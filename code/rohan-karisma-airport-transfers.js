// Percentage to slide gallery
var move_value = 50

const stripe_user = "fini-chen"
const stripe_api = "https://stripe-api-flask.herokuapp.com/"

// Global elements
const form_elem = document.querySelector("form")
const transport_cards_wrapper = document.querySelector(".cards.translate")
const transport_cards = document.querySelectorAll(".cards.translate > .card")
const transport_vehicles_wrapper = document.querySelector(".cards.vehicle")
const transport_vehicles = document.querySelectorAll(".cards.vehicle > .card")
const buttons_wrapper = document.querySelector(".buttons")
const button_back = document.querySelector(".buttons .back")

// Prices
const prices = {
  "deluxe": {
    "arriving": 170.00,
    "departing": 170.00,
    "arriving departing": 340,
  },
  "van": {
    "arriving": 130.00,
    "departing": 130.00,
    "arriving departing": 260.00,
  },
  "sprinter": {
    "arriving": 205.00,
    "departing": 205.00,
    "arriving departing": 410.00,
  },
}
let current_transport_type = ""
let current_price = 0

function activete_form(transport_types) {

  transport_types.push ("general")

  // Show form
  form_elem.classList.remove("hide")

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
    const transport_type_value = transport_card.getAttribute("data-transport-type")
    const transport_types = transport_card.getAttribute("data-transport-type").split(" ")

    // Activate form fieldsets
    activete_form(transport_types)

    // Get product title
    transport_name = transport_card.querySelector("h3").innerText

    // Update price
    current_price = prices[current_transport_type][transport_type_value]

    console.log({current_transport_type, current_price})
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

// Show transport translate options, after select vehicleç
transport_vehicles.forEach(transport_vehicle => {
  // Add click event
  transport_vehicle.addEventListener("click", ((e) => {

    // Deactive other cards
    transport_vehicles.forEach(transport_vehicle => {
      transport_vehicle.classList.remove("active")
    })

    // Active current card
    transport_vehicle.classList.add("active")

    // Activate transport options
    transport_cards_wrapper.classList.remove("hide")

    // Get product title
    current_transport_type = transport_vehicle.getAttribute("data-transport-type")

    // Update prices
    let prices_vehicule = prices[current_transport_type]
    transport_cards.forEach(transport_card => {
      const transport_type = transport_card.getAttribute("data-transport-type")
      const price_elem = transport_card.querySelector(".price > span")
      const price_clean = prices_vehicule[transport_type].toFixed(2)
      price_elem.innerText = `${price_clean} USD`
    })

    // Show back button
    buttons_wrapper.classList.remove("hide")

    // Hide vehicle options
    transport_vehicles_wrapper.classList.add("hide")
  }))
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
  form_data.push (`Transport vehicle: ${current_transport_type}`)
  form_text = form_data.join (", ")

  // Stripe data
  let stripe_data = {
    "user": stripe_user,
    "url": window.location.href,
    "products": {}
  }

  stripe_data["products"][transport_name] = {
    "amount": 1,
    "price": current_price,
    "description": form_text,
    "image_url": "https://cancunconciergedmc.com/imgs/transportation-car-regular.png"
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

button_back.addEventListener("click", (e) => {
  // Hide transport options
  transport_cards_wrapper.classList.add("hide")

  // Show vehicle options
  transport_vehicles_wrapper.classList.remove("hide")

  // Hide back button
  buttons_wrapper.classList.add("hide")

  // Hide form
  form_elem.classList.add("hide")
})

// // Run script when page loads
// self.addEventListener('load', (e) => {
//   document.querySelector('[data-transport-type="arriving departing"]').click()
// })