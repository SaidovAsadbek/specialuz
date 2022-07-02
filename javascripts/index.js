window.addEventListener("load", () => {
  const $id = (selection) => document.getElementById(selection);

  $id("submenu-link").addEventListener("click", () => {
    $id("sp-submenu").classList.toggle("hide-menu");
    $id("chevronDown").classList.toggle("chevron-down");
  });
  ("use strict");

  document.querySelector(".toggle").addEventListener("click", function () {
    this.classList.toggle("activate");
  });

  $id("nav-toggle-submit").addEventListener("click", () => {
    $id("nav-toggle-menu").classList.toggle("hide-toggle");
  });
  ("use strict");
});
