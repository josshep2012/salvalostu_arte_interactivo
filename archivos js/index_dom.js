import darktheme from "./modo_oscuro.js";
import hamburgerMenu from "./menu_hamburguesa.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{


    hamburgerMenu(".panel-btn", ".panel");
    
    darktheme(".dark-theme-btn", "dark-mode");



})


