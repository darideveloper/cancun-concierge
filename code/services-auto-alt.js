// Add alt tag to service cards
const services = document.querySelectorAll("article.service")

for (const service of services) {
    let serviceTitle = service.querySelector("h3").innerHTML.toLowerCase()
    serviceTitle = serviceTitle.replaceAll("&amp;", "and")
    let serviceImgs = service.querySelectorAll("img")
    serviceImgs.forEach(img => {
        img.setAttribute("alt", `${serviceTitle} service image`)
    })
}