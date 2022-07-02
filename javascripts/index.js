"use strict";
window.addEventListener("load", () => {
    const $id = (selection) => document.getElementById(selection);

    const openSubmenu = () => {
        $id("collapse").classList.toggle("toggle-menu");
        $id("up-icon").classList.toggle("to-up");
        $id("dropdown-toggle").classList.toggle("active");
        if (!$id("collapse").classList.contains("toggle-menu")) {
            $id("body").style.overflow = "hidden";
        } else {
            $id("body").style.overflow = "auto";
        }
    };

    $id("dropdown-toggle").addEventListener("click", openSubmenu);


    const scrollBar = () => {
        let lists;
        if (window.scrollY > $id("nav").offsetTop) {
            $id("navbar").classList.remove("top-bar");
            $id("collapse").classList.add("menu-scroller");
            $id("btn-light").classList.add("bg-success");
            lists = document.querySelectorAll(".list a");
            lists.forEach(list => {
                list.classList.add("bar-lists");
            });
        } else {
            lists = document.querySelectorAll(".list a");
            lists.forEach(list => {
                list.classList.remove("bar-lists");
            });
            $id("collapse").classList.remove("menu-scroller");
            $id("navbar").classList.add("top-bar");
            $id("btn-light").classList.remove("bg-success");
        }
    };
    window.addEventListener("scroll", scrollBar);

    const domElement = document.querySelector("canvas");

    domElement.addEventListener("click", () => {
        if (!$id("order-menu").classList.contains("d-none")) {
            domElement.classList.remove("bg-black");
            $id("order-menu").classList.add("d-none");
        }
    });

    $id("order-btn").addEventListener("click", () => {
        $id("order-menu").classList.remove("d-none");
        if (!$id("order-menu").classList.contains("d-none")) {
            domElement.classList.add("bg-black");
        } else {
            domElement.classList.remove("bg-black");
        }
    });

    const closeMenu = () => {
        if (!$id("order-menu").classList.contains("d-none")) {
            domElement.classList.remove("bg-black");
            $id("order-menu").classList.add("d-none");
        } else {
            domElement.classList.add("bg-black");
            $id("order-menu").classList.remove("d-none");
        }
    };

    $id("close-menu").addEventListener("click", closeMenu);


    const navbarMenu = () => {
        $id("navbar-submenu").classList.toggle("active");
        $id("close-navbar").classList.toggle("show");
        $id("open-navbar").classList.toggle("hide");
    };
    $id("menu-outline").addEventListener("click", navbarMenu);

    const callMenu = () => {
        $id("call-collapse").classList.toggle("active");
    };
    $id("call").addEventListener("click", callMenu);

});