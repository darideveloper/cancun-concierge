function aos_responsive () {
    if (window.matchMedia("(max-width: 500px)").matches) {
        // Add animation to the last image in the firt article
        const image = document.querySelector ("article .gallery img:nth-child(3)")
        image.setAttribute ("data-aos", "fade-up")
        image.setAttribute ("data-aos-delay", "100")

    } else if (window.matchMedia("(max-width: 800px)").matches) {
        
        // Fix animation delay in middle images
        const images_3th = document.querySelectorAll ("article .gallery img:nth-child(3)")
        const images_4th = document.querySelectorAll ("article .gallery img:nth-child(4)")

        for (image of images_3th) {
            image.setAttribute ("data-aos-delay", "100")
        }

        for (image of images_4th) {
            image.setAttribute ("data-aos-delay", "200")
        }

    } 
    
    if (window.matchMedia("(max-width: 1050px)").matches) {

        // Add animation for the bar in the first article
        const first_bar = document.querySelector("article:nth-child(2) .bar");
        first_bar.setAttribute ("data-aos", "flip-left")
    } 
}

window.onload = aos_responsive ()
window.addEventListener ("resize", () => aos_responsive())