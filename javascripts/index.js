window.addEventListener("load", () => {
  const $id = (selection) => document.getElementById(selection);

  $id("submenu-link").addEventListener("click", () => {
    $id("sp-submenu").classList.toggle("hide-menu");
    $id("chevronDown").classList.toggle("chevron-down");
  });
});
