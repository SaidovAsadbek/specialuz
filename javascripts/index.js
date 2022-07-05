"use strict";
window.addEventListener("load", () => {
    const $id = (selection) => document.getElementById(selection);
    // ---------- Submenu 
    const openSubmenu = () => {
        if ($id("collapse").classList.contains("toggle-menu")) {
            $id("collapse").classList.remove("toggle-menu");
            $id("up-icon").classList.add("to-up");
        } else {
            $id("collapse").classList.add("toggle-menu");
            $id("up-icon").classList.remove("to-up");
            $id("dropdown-toggle").classList.remove("active");
        }
    };
    $id("dropdown-toggle").addEventListener("click", openSubmenu);

    const closeSubmenu = () => {
        if (!$id("collapse").classList.contains("toggle-menu")) {
            $id("collapse").classList.add("toggle-menu");
            $id("up-icon").classList.remove("to-up");
        }
    };
    $id("submenu-close-btn").addEventListener("click", closeSubmenu);

    // ---------- Submenu 

    // ---------- Scroll Navbar 
    // const scrollBar = () => {
    //     let lists;
    //     if (window.scrollY > 50) {
    //         $id("navbar").classList.add("fixed-bar");
    //         $id("collapse").classList.add("menu-scroller");
    //         $id("btn-light").classList.add("bg-success");
    //         lists = document.querySelectorAll(".list a");
    //         lists.forEach(list => {
    //             list.classList.add("bar-lists");
    //         });
    //     } else {
    //         lists = document.querySelectorAll(".list a");
    //         lists.forEach(list => {
    //             list.classList.remove("bar-lists");
    //         });
    //         $id("collapse").classList.remove("menu-scroller");
    //         $id("navbar").classList.remove("fixed-bar");
    //         $id("btn-light").classList.remove("bg-success");
    //     }
    // };
    // window.addEventListener("scroll", scrollBar);

    // ---------- Scroll Navbar 

    // ---------- Order Menu
    const domElement = document.querySelector("canvas");

    domElement.addEventListener("click", () => {
        if (!$id("order-menu").classList.contains("scale")) {
            domElement.classList.remove("bg-black");
            $id("order-menu").classList.add("scale");
        }
    });

    $id("order-btn").addEventListener("click", () => {
        $id("order-menu").classList.remove("scale");
        if (!$id("order-menu").classList.contains("scale")) {
            domElement.classList.add("bg-black");
        } else {
            domElement.classList.remove("bg-black");
        }
    });

    $id("order-btn-safe").addEventListener("click", () => {
        $id("order-menu").classList.remove("scale");
        if (!$id("order-menu").classList.contains("scale")) {
            domElement.classList.add("bg-black");
        } else {
            domElement.classList.remove("bg-black");
        }
    });

    const closeMenu = () => {
        if (!$id("order-menu").classList.contains("d-none")) {
            domElement.classList.remove("bg-black");
            $id("order-menu").classList.add("scale");
        } else {
            domElement.classList.add("bg-black");
            $id("order-menu").classList.remove("scale");
        }
    };

    $id("close-menu").addEventListener("click", closeMenu);

    // ---------- Order Menu

    // ---------- Navbar Open and Close
    const navbarMenu = () => {
        $id("navbar-submenu").classList.toggle("active");
        $id("close-navbar").classList.toggle("show");
        $id("open-navbar").classList.toggle("hide");
        if ($id("navbar-submenu").classList.contains("active")) {
            $id("body").style.overflow = "hidden";
        } else {
            $id("body").style.overflow = "auto";
        }

        // ---------- Call-Center 
        const closeNavbar = () => {
            $id("navbar-submenu").classList.remove("active");
            $id("close-navbar").classList.remove("show");
            $id("open-navbar").classList.remove("hide");
            $id("collapse").classList.add("toggle-menu");
            $id("up-icon").classList.remove("to-up");
        };

        $id("call").addEventListener("click", closeNavbar);
        // ---------- Call-Center 

    };
    $id("menu-outline").addEventListener("click", navbarMenu);

    // ---------- Navbar Open and Close

    // ---------- Call-Center 
    const callMenu = () => {
        $id("call-collapse").classList.toggle("call-active");
    };
    $id("call").addEventListener("click", callMenu);
    // ---------- Call-Center 

    // ---------- Call-Center 
});