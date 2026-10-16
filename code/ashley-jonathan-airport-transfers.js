// Percentage to slide gallery
var move_value = 33.33

// Temporarily use rohan-karisma until ashley-jonathan credentials are added in Stripe admin
const stripe_user = "rohan-karisma"
// const stripe_user = "ashley-jonathan"
const is_local = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.protocol === "file:"
const stripe_api = is_local
  ? "http://127.0.0.1:8000/ashley-jonathan/sale/"
  : "https://omar.apps.darideveloper.com/ashley-jonathan/sale/"

// Global elements
const form_elem = document.querySelector("form")
const transport_cards_wrapper = document.querySelector(".cards.translate")
const transport_cards = document.querySelectorAll(".cards.translate > .card")
const transport_vehicles_wrapper = document.querySelector(".cards.vehicle")
const transport_vehicles = document.querySelectorAll(".cards.vehicle > .card")
const buttons_wrapper = document.querySelector(".buttons")
const button_back = document.querySelector(".buttons .back")
const submit_elem = document.querySelector("#submit")

// Alert when done query
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const done = urlParams.get('done')
if (done) {
  alert("Reservation confirmed! Check your email for booking details.")
}

// Prices
const prices = {
  "deluxe": {
    "arriving": 0.00,
    "departing": 215.00,
    "arriving departing": 215.00,
  },
  "van": {
    "arriving": 0.00,
    "departing": 155.00,
    "arriving departing": 155.00,
  },
  "sprinter": {
    "arriving": 0.00,
    "departing": 244.00,
    "arriving departing": 244.00,
  },
}

// Array from 2 to 4
const passengers = {
  "deluxe": [1,2,3,4],
  "van": [1,2,3,4,5,6],
  "sprinter": [7,8,9,10,11,12]
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
let current_price = 0
let transport_name = ""
let current_direction = ""

// Format a numeric price for display
function formatPrice (value) {
  const clean = value.toFixed(2)
  return clean === "0.00" ? "Free" : `${clean} USD`
}

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

  // Update passengers (generic 1-12 fallback for free arrivals with no vehicle)
  const passengersNums = passengers[current_transport_type] || [1,2,3,4,5,6,7,8,9,10,11,12]
  const maxPassengers = Math.max(...passengersNums)
  const maxPassengersText = passengersText[maxPassengers]
  const passagersTextElem = document.querySelector('#passengers + p')
  passagersTextElem.innerHTML = `Maximum ${maxPassengersText} passengers`

  // Opdate passengers options
  const selectElem = document.querySelector('#passengers')
  options = ""
  for (const passenger of passengersNums) {
    const plural = passenger > 1 ? "s" : ""
    options += `<option value="${passenger}">${passenger} passenger${plural}</option>`
  }
  selectElem.innerHTML = options

}

// Select transportation type (direction) - first step
transport_cards.forEach(transport_card => {
  // Add click event
  transport_card.addEventListener("click", ((e) => {

    // Deactive other cards
    transport_cards.forEach(transport_card => {
      transport_card.classList.remove("active")
    })

    // Active current card
    transport_card.classList.add("active")

    // Reset previously selected vehicle, if any
    transport_vehicles.forEach(transport_vehicle => {
      transport_vehicle.classList.remove("active")
    })
    current_transport_type = ""
    current_price = 0

    // Get selected direction
    current_direction = transport_card.getAttribute("data-transport-type")

    // Get product title
    transport_name = transport_card.querySelector("h3").innerText.replace(/\s+/g, ' ').trim()

    // Update price in each vehicle card
    transport_vehicles.forEach(transport_vehicle => {
      const vehicle_type = transport_vehicle.getAttribute("data-transport-type")

      transport_vehicle.querySelector(".price > span").innerText = formatPrice(prices[vehicle_type][current_direction])
    })

    // Free arrival: skip vehicle selection, go straight to form
    if (current_direction === "arriving") {
      current_transport_type = ""
      current_price = 0

      // Keep vehicle options hidden, hide direction options
      transport_vehicles_wrapper.classList.add("hide")
      transport_cards_wrapper.classList.add("hide")

      // Show back button
      buttons_wrapper.classList.remove("hide")

      // Show form directly with generic passengers
      activete_form(current_direction.split(" "))

      // Update CTA button text
      if (submit_elem) {
        submit_elem.value = "Book Free Transfer"
      }
      return
    }

    // Show vehicle options, hide direction options
    transport_vehicles_wrapper.classList.remove("hide")
    transport_cards_wrapper.classList.add("hide")

    // Show back button
    buttons_wrapper.classList.remove("hide")
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

// Select vehicle - second step
transport_vehicles.forEach(transport_vehicle => {
  // Add click event
  transport_vehicle.addEventListener("click", ((e) => {

    // A direction must be selected first
    if (!current_direction) return

    // Deactive other cards
    transport_vehicles.forEach(transport_vehicle => {
      transport_vehicle.classList.remove("active")
    })

    // Active current card
    transport_vehicle.classList.add("active")

    // Get selected vehicle
    current_transport_type = transport_vehicle.getAttribute("data-transport-type")

    // Update current price
    current_price = prices[current_transport_type][current_direction]

    // Activate form fieldsets for the selected direction
    activete_form(current_direction.split(" "))

    // Update CTA button text
    if (submit_elem) {
      submit_elem.value = current_price === 0 ? "Book Free Transfer" : "Buy now"
    }

    // Keep vehicle options visible as a summary of the selection
  }))
})

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {

  e.preventDefault ()

  // Paid flows require an explicit vehicle selection
  if (current_direction !== "arriving" && !current_transport_type) {
    alert("Please select a vehicle to continue.")
    document.querySelector("#submit").value = "Buy now"
    return
  }

  // Set submit button to loading
  document.querySelector("#submit").value = "loading..."

  // Get form data
  const input_selector = "input:not(.hide):not([disabled]):not(#submit), select:not(.hide):not([disabled])"
  const inputs = document.querySelectorAll (input_selector)

  // Create form text
  let form_data = {}
  for (const input of inputs) {
    const input_name = input.getAttribute("name").replaceAll("-", "_")
    const input_value = input.value
    form_data[input_name] = input_value
  }
  form_data['transport_vehicle'] = current_transport_type

  // Stripe data
  let stripe_data = {
    "user": stripe_user,
    "url": window.location.href,
    "products": {}
  }

  stripe_data["products"][transport_name] = {
    "amount": 1,
    "price": current_price,
    "description": form_data,
    "image_url": "https://github.com/darideveloper/cancun-concierge/blob/master/imgs/transports.png?raw=true"
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
  .then (response => {
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`)
    }
    return response.json()
  })
  .then (data => {
    if (data && data.stripe_url) {
      // Go to stripe or confirmation page
      window.location.href = data.stripe_url
    } else {
      throw new Error("Invalid response: stripe_url not found")
    }
  })
  .catch (error => {
    console.error("Booking submission error:", error)
    alert("An error occurred while processing your request. Please try again.")
    if (submit_elem) {
      submit_elem.value = current_price === 0 ? "Book Free Transfer" : "Buy now"
    }
  })

})

button_back.addEventListener("click", (e) => {
  // Hide form
  form_elem.classList.add("hide")

  // Hide vehicle options
  transport_vehicles_wrapper.classList.add("hide")

  // Show direction options
  transport_cards_wrapper.classList.remove("hide")

  // Hide back button
  buttons_wrapper.classList.add("hide")

  // Reset selection state
  transport_cards.forEach(transport_card => {
    transport_card.classList.remove("active")
  })
  transport_vehicles.forEach(transport_vehicle => {
    transport_vehicle.classList.remove("active")
  })
  current_direction = ""
  current_transport_type = ""
  current_price = 0
})

// // Run script when page loads
// self.addEventListener('load', (e) => {
//   document.querySelector('[data-transport-type="arriving departing"]').click()
// })