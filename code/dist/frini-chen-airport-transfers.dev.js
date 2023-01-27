"use strict";

var price = 110;
var stripe_user = "fini-chen";
var stripe_api = "https://daridev2.pythonanywhere.com/";

function activete_form(transport_types) {
  transport_types.push("general"); // Activate submit button

  document.querySelector("#submit").classList.remove("hide"); // Enable submit button and form

  document.querySelector("#submit").classList.remove("disabled");
  document.querySelector("form").disabled = false; // Disabled all form sections and inputs

  var all_inputs = document.querySelectorAll("fieldset, fieldset input, fieldset select");
  all_inputs.forEach(function (input) {
    input.classList.add("hide");
    input.disabled = true;
  }); // Activate current form sections

  var selector = transport_types.map(function (transport_type) {
    return "fieldset.".concat(transport_type, ", fieldset.").concat(transport_type, " input:not([id*=\"hotel-other\"]), fieldset.").concat(transport_type, " select");
  }).join(", ");
  var fielsets = document.querySelectorAll(selector);
  fielsets.forEach(function (input) {
    input.classList.remove("hide");
    input.disabled = false;
  }); // Update transportation price

  if (transport_types.length == 2) {
    price = 110;
  } else {
    price = 220;
  }

  console.log({
    price: price,
    transport_types: transport_types
  }); // Update form grid style

  var form = document.querySelector("form .wrapper-fieldsets");

  if (transport_types.length == 2) {
    form.classList.add("two-columns");
    form.classList.remove("three-columns");
  } else if (transport_types.length == 3) {
    form.classList.remove("two-columns");
    form.classList.add("three-columns");
  }
} // Select transport card


var transport_cards = document.querySelectorAll(".cards > .card");
transport_cards.forEach(function (transport_card) {
  // Add click event
  transport_card.addEventListener("click", function (e) {
    // Deactive other cards
    transport_cards.forEach(function (transport_card) {
      transport_card.classList.remove("active");
    }); // Active current card

    transport_card.classList.add("active"); // Get transport type

    var transport_types = transport_card.getAttribute("data-transport-type").split(" "); // Activate form fieldsets

    activete_form(transport_types); // Get product title

    transport_name = transport_card.querySelector("h3").innerText;
  });
}); // Show input for custom hotel

var hotel_inputs = document.querySelectorAll('select[name*="hotel"]');
hotel_inputs.forEach(function (hotel_input) {
  // Add event listener for each hotel select
  hotel_input.addEventListener("change", function (e) {
    // Show or hide input for custom hotel
    var input_custom_hotel = e.target.parentNode.querySelector("input");
    var input_wrapper = input_custom_hotel.parentNode;
    console.log(input_custom_hotel);
    console.log(input_wrapper);

    if (e.target.value == "Other") {
      input_custom_hotel.classList.remove("hide");
      input_custom_hotel.disabled = false;
      input_wrapper.classList.remove("hide");
    } else {
      input_custom_hotel.classList.add("hide");
      input_custom_hotel.disabled = true;
      input_wrapper.classList.add("hide");
    }
  });
});
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Set submit button to loading

  document.querySelector("#submit").value = "loading..."; // Get form data

  var input_selector = "input:not(.hide):not([disabled]):not(#submit), select:not(.hide):not([disabled])";
  var inputs = document.querySelectorAll(input_selector); // Create form text

  var form_data = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;
      var input_name = input.getAttribute("name").replaceAll("-", " ");
      var input_value = input.value;
      form_data.push("".concat(input_name, ": ").concat(input_value));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  form_text = form_data.join(", "); // Stripe data

  var stripe_data = {
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
  }; // Get stripe link

  fetch(stripe_api, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stripe_data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    // Go to stripe page
    window.location.href = data.stripe_url;
  });
});