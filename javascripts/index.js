"use strict";
window.addEventListener("load", () => {
    const $id = (selection) => document.getElementById(selection);

    const openSubmenu = () => {
        $id("collapse").classList.toggle("toggle-menu");
        $id("up-icon").classList.toggle("to-up");
        $id("dropdown-toggle").classList.toggle("active");
    };

    $id("dropdown-toggle").addEventListener("click", openSubmenu);
});