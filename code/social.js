const btn_next = document.querySelector (".gallery button.next")
const btn_back = document.querySelector (".gallery button.back")
const images = document.querySelector (".gallery .imgs")

let current_image = 0
let max_images = 4
let auto_move = true

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
    move_percentage = current_image * -100
    images.style.transform = "translateX(" + move_percentage  +"%)"
}

async function run_auto_move () {
    // Auto slide gallery
    while (auto_move) {
        await sleep(3)
        incress_counter ()
        move_images ()
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