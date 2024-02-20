const btn_next = document.querySelector (".gallery button.next")
const btn_back = document.querySelector (".gallery button.back")
const images = document.querySelector (".gallery .imgs")
const max_images  = document.querySelectorAll (".gallery .imgs img").length

var current_image = 0
var auto_move = true



function set_max_images (max) {
    max_images = max
}

function sleep(s) {
    // Wait time in seconds
    return new Promise(resolve => setTimeout(resolve, s*1000));
}

function incress_counter () {
    // Incress image counter based in max images number
    current_image++
    if (current_image >= max_images) {
        current_image = 0
    }
}

function decress_counter () {
    // Decress image counter with 0 as the last image
    current_image--
    if (current_image < 0) {
        current_image = max_images - 1
    }
}

function move_images () {
    // Update styles for move images
    let move_percentage = current_image * -move_value
    images.style.transform = "translateX(-100vw)"
}

async function run_auto_move () {
    // Auto slide gallery
    while (true) {
        await sleep(3)
        if (auto_move) {
            incress_counter ()
            move_images ()
        } else {
            break
        }
    }
}

btn_next.addEventListener ("click", function () {
    auto_move = false
    incress_counter()
    move_images ()
})

btn_back.addEventListener ("click", function () {
    auto_move = false
    decress_counter()
    move_images ()
})

run_auto_move ()