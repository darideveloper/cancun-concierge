const transport_cards = document.querySelectorAll (".transport .cards > .card")

for (let transport_card of transport_cards) {
    
    // Get card elements
    let name = transport_card.querySelector ("h3").innerHTML
    let detail = transport_card.querySelector ("p.detail").innerHTML
    let people = transport_card.querySelector ("p.people").innerHTML
    let link = transport_card.querySelector ("a")


    // Generate whstapp link
    let message = "Me interesa el servicio " + name + " (de " + detail + "), " + people
    let message_formated = message.replaceAll(" ", "%20")
    let whatsapp_link = "https://api.whatsapp.com/send?phone=5219982391978&text=" + message_formated

    // Set link to anchors
    link.setAttribute("href", whatsapp_link)
}

// Percentage to slide gallery
var move_value = 33.333
