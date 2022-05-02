// Disable current link
const active_menu_option = document.querySelector ("header nav ul li a.active")
active_menu_option.setAttribute ("href", "#")

// Active or deactive menu
const menu_btn = document.querySelector ("header .btn-menu")
const nav = document.querySelector ("header nav")
menu_btn.addEventListener ("click", function (e) {
    menu_btn.classList.toggle ("active")
    nav.classList.toggle ("collapsed")
})