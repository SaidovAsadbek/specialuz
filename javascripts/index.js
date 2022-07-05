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
  if (window.scrollY > 38) {
    header_fixed.classList.add("active");
  } else {
    header_fixed.classList.remove("active");
  }
  if (WinScroll < window.scrollY) {
    collaps.classList.remove("active");
    sp_bars_btn.classList.remove("active");
    sp_bar.classList.remove("active");
    modalPage.classList.remove("active");
    WinScroll = 0
  }
});
// Nav Scroll
// Parellax
// const mocup = document.querySelectorAll('.mocup')
// window.addEventListener('mousemove',(e)=>{
//   for (let i = 0; i < mocup.length; i++) {
//     var speed = mocup[i].getAttribute('data-speed') 
//     let y = (window.innerHeight -  e.clientY * speed) / 100
//     let x = (window.innerWidth - e.clientX * speed) / 100
//     mocup[i].style.top = `${y}px`
//     mocup[i].style.left = `${x}px`
//   }
// })
// Parellax
// =============== LEAF
const leaf = document.querySelectorAll('.leaf')
leaf.forEach(element => {
  element.onclick = ()=>{
    element.classList.toggle('active')
  }
});
// =============== LEAF