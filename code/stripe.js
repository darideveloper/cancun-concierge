const stripe_api_url = "http://localhost:5000"

function alert_error () {
    alert ("An error occurred. Try again later.")
}

async function redirect_stripe (buy_data, current_url) {
    try {
        const response = await fetch (stripe_api_url, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": "cancunconcier",
                "url": current_url,
                "products": buy_data
            })
        })
        const response_json = await response.json ()

        // Validate api response for redirect
        if (Object.keys(response_json).includes ("stripe_url")) {
            window.location.href = response_json.stripe_url
        } else {
            alert_error ()
        }
    } catch {
        alert_error ()
    }
}