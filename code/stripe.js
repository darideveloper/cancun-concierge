const stripe_api_url = "http://localhost:5000"

async function redirect_stripe (buy_data, current_url) {
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
    console.log (response_json)
}