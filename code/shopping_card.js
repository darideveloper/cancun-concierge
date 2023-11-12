// get elements
const buy_forms = document.querySelectorAll ("article.service .buy-section form")
const buy_cart = document.querySelector (".buy-cart")

// Page url
const current_url = window.location.href

// Lements in the shopping cart
let cart_elems = {}

// Services prices
const services_prices = {
    "LUXURY YACHT & SNORKELING": 179,
    "WHALE WATCHING IN PUERTO VALLARTA": 135,
    "OUTDOOR ZIP LINE ADVENTURE": 180,
    "EXTREME ZIP LINE ADVENTURE": 199,
    "ISLAS MARIETAS ECO DISCOVERY": 144,
    "SEA SAFARI": 180,
    "YELAPA & MAJAHUITAS TOUR": 135,
    "PUEBLOS CULTURAL TOUR": 156
}

function get_service_image (buy_form) {

    // Get imafe
    const image_elem = buy_form.parentNode.parentNode.parentNode.querySelector (".content .gallery img")

    // Format image url
    let image_url = `${current_url}${image_elem.getAttribute ("src")}`
    image_url = image_url.replace ("index.html../", "").replace("/rivera-getaway/..", "")

    return image_url

}


function get_service_info (date_selected, buy_form) {

    // Create service name and service date
    const service_date = `Feb ${date_selected}`
    let service_name = buy_form.parentNode.parentNode.parentNode.querySelector ("h3").innerHTML

    // Clean service name
    service_name = service_name.replace ("&amp;", "&")

    // Format and return
    const service_name_date = `${service_date} - ${service_name}`

    return [service_name_date, service_name]
}

function hide_show_details_cart () {
    // Show or hide details when click button
    const cart_button = buy_cart.querySelector("button.icon")
    cart_button.addEventListener ("click", () => {
        if (Object.keys(cart_elems).length > 0) {
            buy_cart.classList.toggle ("active")
        }
    })

    // Add event to buy button
    const buy_button = buy_cart.querySelector("button.buy-all")
    console.log (buy_button)
    buy_button.addEventListener ("click", async function () {
        await redirect_stripe (cart_elems, current_url)
    })
}

function render_cart () {
    // Update cart counter
    const card_counter = buy_cart.querySelector (".counter")
    total_services = 0
    for (const cart_elem in cart_elems) {
        cart_num = cart_elems[cart_elem]["amount"]
        total_services += cart_num
    }
    card_counter.innerHTML = String(total_services)

    // Update services in cart
    services = ""
    for (const cart_name in cart_elems) {
        card_number = cart_elems[cart_name]["amount"]
        service = `
            <div class="service">
                <button class="btn close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"/></svg>
                </button>
                <p class="details">${cart_name} ( ${card_number} )</p>
            </div>
        `
        services += service
    }

    const services_elem = buy_cart.querySelector (".services")
    services_elem.innerHTML = services

    // Add event listers
    const service_buttons = buy_cart.querySelectorAll("button.close")
    for (const service_button of service_buttons) {
        service_button.addEventListener ("click", (e) => {
            // Get service text
            console.log (service_button.parentNode)
            service = service_button.parentNode.querySelector ("p").innerHTML.replace ("&amp;", "&")
            service_delimiter = service.indexOf ("(") - 1
            service = service.substring(0, service_delimiter)

            // reduce dcounter of the elemnt
            cart_elems[service]["amount"]--

            // Delete element if is required
            if (cart_elems[service]["amount"] == 0) {
                delete cart_elems[service]
            }

            // Hide cart elements if its empty
            if (Object.keys(cart_elems).length == 0) {
                buy_cart.classList.remove ("active")
            }

            // Render cart again
            render_cart ()

        })
    }
}

function manage_froms () {
    // Manage form event to buy services or add to cart
    
    // Loop for each uy form
    for (const buy_form of buy_forms) {

        // form status
        let date_selected = ""
    
        // Add listener to checkbox for update date_selected
        const checkboxes = buy_form.querySelectorAll ("label > input")
        for (const checkbox of checkboxes) {
            checkbox.addEventListener ("click", (e) => {
                date_selected = e.target.value
            })
        }
    
    
    
        buy_form.addEventListener ("submit", (e) => {
            // Disable submit events in each form
            e.preventDefault ()
        })
        
        // Add event listeners for form buttons
        const buy_button = buy_form.querySelector ("button.buy-now")
        const add_button = buy_form.querySelector ("button.add-cart")
    
        buy_button.addEventListener ("click", async function (e) {
            if (date_selected) {
                // Get service and image
                const [service_name_date, service_name] = get_service_info (date_selected, buy_form)
                const image_url = get_service_image (buy_form)

                // Get service price
                const price = services_prices[service_name]

                // Format service
                const service_obj = {}
                service_obj[service_name_date] = {
                    "amount": 1, 
                    image_url, 
                    price, 
                    "description": "TOURS & WATER ACTIVITIES, Rivera Getaway, Cancun Concierge"}
                
                // Redirect to stripe
                await redirect_stripe (service_obj, current_url)

            }
        })
    
        add_button.addEventListener ("click", () => {
            if (date_selected) {
                
                // Get service
                const [service_name_date, service_name] = get_service_info (date_selected, buy_form)

                // Get service price
                const price = services_prices[service_name]
    
                // save service
                if (Object.keys(cart_elems).includes (service_name_date)) {
                    // Incress amount
                    cart_elems[service_name_date]["amount"]++
                } else {
                    // get service image
                    const image_url = get_service_image (buy_form)

                    // save service details
                    cart_elems[service_name_date] = {
                        "amount": 1, 
                        "image_url": image_url, 
                        price,
                        "description": "TOURS & WATER ACTIVITIES, Rivera Getaway, Cancun Concierge"}
                }

                console.log (cart_elems)

                // Update cart
                render_cart()
    
            }
        })    
    }
}

manage_froms ()
hide_show_details_cart ()