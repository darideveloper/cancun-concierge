// get elements
const buy_forms = document.querySelectorAll ("article.service .buy form")
const buy_cart = document.querySelector (".buy-cart")


// Lements in the shopping cart
let cart_elems = []

function hide_show_details_cart () {
    // Show or hide details when click button
    const cart_button = buy_cart.querySelector("button.icon")
    cart_button.addEventListener ("click", () => {
        buy_cart.classList.toggle ("active")
    })
}

function render_cart () {
    // Update cart counter
    const card_counter = buy_cart.querySelector (".counter")
    card_counter.innerHTML = String(cart_elems.length)
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
    
        buy_button.addEventListener ("click", () => {
            if (date_selected) {
                // TODO: Submit to payments platform
                console.log ("to payments")
            }
        })
    
        add_button.addEventListener ("click", () => {
            if (date_selected) {
                
                // Get service
                const service_date = `Feb ${date_selected}`
                let service_name = buy_form.parentNode.parentNode.parentNode.querySelector ("h3").innerHTML
                service_name = service_name.replace ("&amp;", "&")
                const service = `${service_date} - ${service_name}`
    
                // save service
                cart_elems.push (service)

                // Update cart
                render_cart()
    
            }
        })    
    }
}

manage_froms ()
hide_show_details_cart ()