const stripe_api_url = "https://services.darideveloper.com/stripe-api/"

function alert_error() {
  // Alert error for api call
  alert("An error occurred. Try again later.")
}

function toggle_loading() {
  // Hide and show loading modal
  modal = document.querySelector(".loading-modal")
  modal.classList.toggle("hide")
}

async function redirect_stripe(buy_data, current_url) {

  toggle_loading()

  // stripe user based on page
  let stripeUser = "cancunconcier"
  const url = window.location.href
  const currentPage = url.split("/")[3]
  console.log({ currentPage, url })
  const validUsers = [
    "the-honey-pot",
  ]
  if (validUsers.includes(currentPage)) {
    stripeUser = currentPage
  }


  try {
    const response = await fetch(stripe_api_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "user": stripeUser,
        "url": current_url,
        "products": buy_data
      }),
      mode: "cors",
    })
    const response_json = await response.json()

    // Validate api response for redirect
    if (Object.keys(response_json).includes("stripe_url")) {
      window.location.href = response_json.stripe_url
    } else {
      alert_error()
    }
  } catch {
    alert_error()
    toggle_loading()
  }

}