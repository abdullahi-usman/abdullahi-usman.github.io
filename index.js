

window.addEventListener("DOMContentLoaded", event => {
    var menu_btn = document.getElementById("menu-btn")
    var is_menu_visible = false;
    const menu_btn_class = "menu-btn-clicked"
    const menu_background_attr = "hidden"
    menu_btn.addEventListener("click", event => {
        is_menu_visible = !is_menu_visible;
        let menu_background = document.getElementById("menu-background")
        
        if (is_menu_visible) {
            menu_btn.classList.add(menu_btn_class)
            menu_background.removeAttribute(menu_background_attr);
        } else {
            menu_btn.classList.remove(menu_btn_class)
            menu_background.setAttribute(menu_background_attr, null)
        }


    })
})

function coming_soon() {
    let coming_soon = document.getElementById("menu-notice")
    coming_soon.removeAttribute("hidden")
}