let price = 110
const stripe_user = "cancun_concierge_consolidated_supply"
const stripe_api = "https://daridev2.pythonanywhere.com/"


function activete_form(transport_types) {

  transport_types.push ("general")

  // Activate submit button
  document.querySelector("#submit").classList.remove("hide")

  // Enable submit button and form
  document.querySelector("#submit").classList.remove("disabled")
  document.querySelector("form").disabled = false

  // Disabled all form sections and inputs
  const all_inputs = document.querySelectorAll("fieldset, fieldset input, fieldset select")
  all_inputs.forEach(input => {
    input.classList.add ("hide")
    input.disabled = true
  })

  // Activate current form sections
  const selector = transport_types.map(transport_type => `fieldset.${transport_type}, fieldset.${transport_type} input:not([id*="hotel-other"]), fieldset.${transport_type} select`).join (", ")
  const fielsets = document.querySelectorAll(selector)
  fielsets.forEach(input => {
    input.classList.remove ("hide")
    input.disabled = false
  })

  // Update transportation price
  if (transport_types.length == 1) {
    price = 110
  } else {
    price = 220
  }

  // Update form grid style
  const form = document.querySelector("form .wrapper-fieldsets")
  if (transport_types.length == 2) {
    form.classList.add ("two-columns")
    form.classList.remove ("three-columns")
  } else if (transport_types.length == 3) {
    form.classList.remove ("two-columns")
    form.classList.add ("three-columns")
  }
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
    const input_custom_hotel = e.target.parentNode.querySelector ("input")
    const input_wrapper = input_custom_hotel.parentNode
    console.log (input_custom_hotel)
    console.log (input_wrapper)
    if (e.target.value == "Other") {
      input_custom_hotel.classList.remove("hide")
      input_custom_hotel.disabled = false
      input_wrapper.classList.remove ("hide")
    } else {
      input_custom_hotel.classList.add("hide")
      input_custom_hotel.disabled = true
      input_wrapper.classList.add ("hide")
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
    const input_name = input.getAttribute("name").replaceAll("-", " ")
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
