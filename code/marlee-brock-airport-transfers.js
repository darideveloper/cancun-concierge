const stripe_user = "marlee-brock"
const stripe_api = "https://services.darideveloper.com/stripe-api/"

// Global elements
const form_elem = document.querySelector("form")
const transport_cards_wrapper = document.querySelector(".cards.translate")
const transport_cards = document.querySelectorAll(".cards.translate > .card")
const transport_vehicles_wrapper = document.querySelector(".cards.vehicle")
const transport_vehicles = document.querySelectorAll(".cards.vehicle > .card")
const buttons_wrapper = document.querySelector(".buttons")
const button_back = document.querySelector(".buttons .back")

// Sweet alert when done query
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const done = urlParams.get('done')
if (done) {
  alert("Payment saved. Check the receipt in your email")
}

// Prices
const prices = {
  "Van": {
    "arriving": 180.00,
    "departing": 180.00,
    "arriving departing": 360.00,
  },
  "SUV": {
    "arriving": 238.00,
    "departing": 238.00,
    "arriving departing": 476.00,
  },
  "Sprinter": {
    "arriving": 302.00,
    "departing": 302.00,
    "arriving departing": 604.00,
  },
}

// Passenger options per vehicle
const passengers = {
  "Van": [1, 2, 3, 4, 5, 6],
  "SUV": [1, 2, 3, 4],
  "Sprinter": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
}

const passengersText = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
]

let current_transport_type = ""
let current_direction = ""
let current_price = 0
let transport_name = ""

function update_passengers() {
  if (!current_transport_type) return
  const passengersNums = passengers[current_transport_type] || [1, 2, 3, 4, 5, 6]
  const maxPassengers = Math.max(...passengersNums)
  const maxPassengersText = passengersText[maxPassengers]
  const passengersTextElem = document.querySelector('#passengers + p')
  if (passengersTextElem) {
    passengersTextElem.innerHTML = `Maximum ${maxPassengersText} passengers`
  }

  const selectElem = document.querySelector('#passengers')
  if (selectElem) {
    const previousValue = parseInt(selectElem.value, 10) || 1
    let options = ""
    for (const passenger of passengersNums) {
      const plural = passenger > 1 ? "s" : ""
      options += `<option value="${passenger}">${passenger} passenger${plural}</option>`
    }
    selectElem.innerHTML = options
    const clampedValue = Math.min(previousValue, maxPassengers)
    selectElem.value = clampedValue.toString()
  }
}

function activete_form(transport_types) {
  transport_types.push("general")

  // Show form
  form_elem.classList.remove("hide")

  // Activate submit button
  document.querySelector("#submit").classList.remove("hide")
  document.querySelector("#submit").classList.remove("disabled")
  document.querySelector("form").disabled = false

  // Disable all form sections and inputs
  const all_inputs = document.querySelectorAll("fieldset, fieldset input, fieldset select")
  all_inputs.forEach(input => {
    input.classList.add("hide")
    input.disabled = true
  })

  // Activate current form sections
  const selector = transport_types.map(transport_type => `fieldset.${transport_type}, fieldset.${transport_type} input:not([id*="hotel-other"]), fieldset.${transport_type} select`).join(", ")
  const fieldsets = document.querySelectorAll(selector)
  fieldsets.forEach(input => {
    input.classList.remove("hide")
    input.disabled = false
  })

  // Update form grid style
  const form_grid = document.querySelector("form .wrapper-fieldsets")
  if (transport_types.length == 2) {
    form_grid.classList.add("two-columns")
    form_grid.classList.remove("three-columns")
  } else if (transport_types.length == 3) {
    form_grid.classList.remove("two-columns")
    form_grid.classList.add("three-columns")
  }

  // Update passengers limits and options
  update_passengers()
}

// Vehicle selection handler (Step 1)
transport_vehicles.forEach(transport_vehicle => {
  transport_vehicle.addEventListener("click", ((e) => {
    // Deactivate other vehicles
    transport_vehicles.forEach(vehicle => vehicle.classList.remove("active"))

    // Activate selected vehicle
    transport_vehicle.classList.add("active")

    // Set current vehicle type
    current_transport_type = transport_vehicle.getAttribute("data-transport-type")

    // Update prices on the transfer cards
    const vehicle_prices = prices[current_transport_type]
    transport_cards.forEach(transport_card => {
      const transport_type = transport_card.getAttribute("data-transport-type")
      const price_elem = transport_card.querySelector(".price > span")
      if (price_elem && vehicle_prices[transport_type]) {
        price_elem.innerText = `${vehicle_prices[transport_type].toFixed(2)} USD`
      }
      transport_card.classList.remove("active")
    })

    // Update selected vehicle badge
    const badgeElem = document.querySelector(".selected-vehicle-badge .vehicle-title")
    if (badgeElem) {
      const vehicleLabel = transport_vehicle.querySelector("h3").innerText
      badgeElem.innerText = vehicleLabel
    }

    // Hide vehicle options
    transport_vehicles_wrapper.classList.add("hide")

    // Reveal transfer direction options and back button
    transport_cards_wrapper.classList.remove("hide")
    buttons_wrapper.classList.remove("hide")

    // Reset direction and hide form until a direction is chosen
    current_direction = ""
    current_price = 0
    transport_name = ""
    form_elem.classList.add("hide")
  }))
})

// Select transport card (direction - Step 2)
transport_cards.forEach(transport_card => {
  transport_card.addEventListener("click", ((e) => {
    // Deactivate other direction cards
    transport_cards.forEach(card => card.classList.remove("active"))

    // Activate current card
    transport_card.classList.add("active")

    // Get transport direction
    current_direction = transport_card.getAttribute("data-transport-type")
    const transport_types = current_direction.split(" ")

    // Activate form fieldsets
    activete_form(transport_types)

    // Get product title
    const clean_dir = transport_card.querySelector("h3").innerText.replace("\n", " ")
    transport_name = `${current_transport_type} - ${clean_dir}`

    // Update price
    current_price = prices[current_transport_type][current_direction]
  }))
})

// Show input for custom hotel
const hotel_inputs = document.querySelectorAll('select[name*="hotel"]')
hotel_inputs.forEach(hotel_input => {
  hotel_input.addEventListener("change", (e) => {
    const input_custom_hotel = e.target.parentNode.querySelector("input")
    const input_wrapper = input_custom_hotel.parentNode
    if (e.target.value == "Other") {
      input_custom_hotel.classList.remove("hide")
      input_custom_hotel.disabled = false
      input_wrapper.classList.remove("hide")
    } else {
      input_custom_hotel.classList.add("hide")
      input_custom_hotel.disabled = true
      input_wrapper.classList.add("hide")
    }
  })
})

// Back button handler
if (button_back) {
  button_back.addEventListener("click", (e) => {
    e.preventDefault()

    // Hide transfer options, back button, and form
    transport_cards_wrapper.classList.add("hide")
    buttons_wrapper.classList.add("hide")
    form_elem.classList.add("hide")

    // Unhide vehicle options
    transport_vehicles_wrapper.classList.remove("hide")

    // Reset selection states
    transport_vehicles.forEach(vehicle => vehicle.classList.remove("active"))
    transport_cards.forEach(card => card.classList.remove("active"))
    current_transport_type = ""
    current_direction = ""
    current_price = 0
    transport_name = ""
  })
}

// Form submit
const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  // Set submit button to loading
  document.querySelector("#submit").value = "loading..."

  // Get form data
  const input_selector = "input:not(.hide):not([disabled]):not(#submit), select:not(.hide):not([disabled])"
  const inputs = document.querySelectorAll(input_selector)

  // Create form text
  let form_data = []
  for (const input of inputs) {
    const input_name = input.getAttribute("name").replaceAll("-", " ")
    const input_value = input.value
    form_data.push(`${input_name}: ${input_value}`)
  }
  form_data.push(`vehicle: ${current_transport_type}`)
  const form_text = form_data.join(", ")

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
  fetch(stripe_api, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stripe_data)
  })
  .then(response => response.json())
  .then(data => {
    window.location.href = data.stripe_url
  })
})
