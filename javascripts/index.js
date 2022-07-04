let WinScroll = 0;
// call center Toggle
sp_call_btn.onclick = function () {
  collaps.classList.toggle("active");
  sp_bar.classList.remove("active");
  sp_bars_btn.classList.remove("active");
};
// call center Toggle
// Nav toggle
sp_bars_btn.onclick = function () {
  WinScroll = window.scrollY
  this.classList.toggle("active");
  sp_bar.classList.toggle("active");
  collaps.classList.remove("active");
};
// Nav toggle

// Nav , toggle modal
for (let i = 0; i < create.length; i++) {
  create[i].onclick = function () {
    WinScroll = window.screenY;
    modalPage.classList.toggle("active");
  };
}
sp_close_modal.onclick = function () {
  modalPage.classList.toggle("active");
};
// Nav , toggle modal
// Nav Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    if (!nav_fixed.classList.contains("active")) {
      nav_fixed.classList.add("active");
    }
  } else {
    nav_fixed.classList.remove("active");
  }
  console.log(WinScroll);
  if (WinScroll < window.scrollY) {
    collaps.classList.remove("active");
    sp_bars_btn.classList.remove("active");
    sp_bar.classList.remove("active");
    modalPage.classList.remove("active");
    WinScroll = 0
  }
});
// Nav Scroll
