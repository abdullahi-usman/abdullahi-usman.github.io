


window.addEventListener("DOMContentLoaded", event => {
    
    if (window.screen.availWidth < 769) {
        let menu_btn = document.getElementById("menu-btn")
        let is_menu_visible = false;
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
    } else {
        let menu_desktop = document.getElementById("menu-desktop")

        let is_menu_visible = false;
        const anim_class_name = "menu-desktop-anim"
        
        document.getElementById("menu-btn").addEventListener("click", event => {
            
            if (is_menu_visible) {
                menu_desktop.classList.remove(anim_class_name)
                is_menu_visible = !is_menu_visible;
            } else {
                menu_desktop.classList.add(anim_class_name)
                is_menu_visible = !is_menu_visible;
            }
        })
    }
})

function coming_soon() {
    let coming_soon = document.getElementById("menu-notice")
    coming_soon.removeAttribute("hidden")
}

function lie() {
    console.log("Beautiful");
}