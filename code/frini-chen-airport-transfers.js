let price = 110
const stripe_user = "cancun_concierge_consolidated_supply"
const stripe_api = "https://daridev2.pythonanywhere.com/"


function activete_form(transport_types) {

  // Enable submit button and form
  document.querySelector("#submit").classList.remove("disabled")
  document.querySelector("form").disabled = false

  // Disabled all form inputs
  all_inputs = document.querySelectorAll("input:not(.hide), select")
  all_inputs.forEach(input => {
    input.disabled = true
  })

  // Activate general form inputs
  general_inputs = document.querySelectorAll(".general input:not(.hide), .general select")
  general_inputs.forEach(input => {
    input.disabled = false
  })

  // Update transportation price
  if (transport_types.length == 1) {
    price = 110
  } else {
    price = 220
  }

  // Activate other form inputs
  selector_inputs = transport_types.map(transport_type => `.${transport_type} input:not(.hide), .${transport_type} select`).join(", ")
  transport_inputs = document.querySelectorAll(selector_inputs)
  transport_inputs.forEach(input => {
    input.disabled = false
  })
}

// Select transport card
const transport_cards = document.querySelectorAll(".cards > .card")
transport_cards.forEach(transport_card => {
  // Add click event
  transport_card.addEventListener("click", ((e) => {

    // Deactive other cards
    transport_cards.forEach(transport_card => {
      transport_card.classList.remove("active")
    })

    // Active current card
    transport_card.classList.add("active")

    // Get transport type
    const transport_types = transport_card.getAttribute("data-transport-type").split(" ")

    // Activate form fieldsets
    activete_form(transport_types)

    // Get product title
    transport_name = transport_card.querySelector("h3").innerText
  }))
})

// Show input for custom hotel
const hotel_inputs = document.querySelectorAll('select[name*="hotel"]')
hotel_inputs.forEach(hotel_input => {

  // Add event listener for each hotel select
  hotel_input.addEventListener("change", (e) => {

    // Show or hide input for custom hotel
    const input_custom_hotel = e.target.nextElementSibling
    if (e.target.value == "Other") {
      input_custom_hotel.classList.remove("hide")
      input_custom_hotel.disabled = false
    } else {
      input_custom_hotel.classList.add("hide")
      input_custom_hotel.disabled = true
    }
  })
})

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault ()

  // Set submit button to loading
  document.querySelector("#submit").value = "loading..."

  // Get form data
  const input_selector = "input:not(.hide):not([disabled]):not(#submit), select:not(.hide):not([disabled])"
  const inputs = document.querySelectorAll (input_selector)

  // Create form text
  let form_data = []
  for (const input of inputs) {
    const input_name = input.getAttribute("name").replace("-", " ")
    const input_value = input.value
    form_data.push (`${input_name}: ${input_value}`)
  }
  form_text = form_data.join (", ")

  // Stripe data
  const stripe_data = {
    "user": stripe_user,
    "url": window.location.href,
    "products": {
      transport_name: {
        "amount": 1,
        "price": price,
        "description": form_text,
        "image_url": "https://cancunconciergedmc.com/imgs/transportation-car-regular.png"
      }
    }
  }

  // Get stripe link
  fetch (stripe_api, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stripe_data)
  })
  .then (response => response.json ())
  .then (data => {
    // Go to stripe page
    window.location.href = data.stripe_url
  })

})
