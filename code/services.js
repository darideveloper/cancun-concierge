const links = document.querySelectorAll (".service .paralax")

for (let link of links) {
    // Generate whatsapp link
    let service = link.parentNode
    let service_title = service.querySelector("h2").innerHTML
    let message = "Me interesa su servicio de " + service_title
    let message_formated = message.replaceAll(" ", "%20")
    let whatsapp_link = "https://api.whatsapp.com/send?phone=5219982391978&text=" + message_formated

    // Set link to anchors
    link.setAttribute ("href", whatsapp_link)
}