// call center Toggle
sp_call_btn.onclick = function () {
  collaps.classList.toggle("active");
  sp_bar.classList.remove("active");
  sp_bars_btn.classList.remove("active");
};
// call center Toggle
// Nav toggle
sp_bars_btn.onclick = function () {
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

sp_close_modal.onclick = () => {
  modalPage.classList.remove("active");
};

bg_close.onclick = () => {
  modalPage.classList.remove("active");
};

window.addEventListener("mousedown", (e) => {
  mousedown = e.pageY;
});
window.addEventListener("mouseup", (e) => {
  if (mousedown - e.pageY > 100 && modalPage.classList.contains("active")) {
    modalPage.classList.remove("active");
  }
});

// Nav , toggle modal

// Buyurtma berish

for (let i = 0; i < placing.length; i++) {
  placing[i].onclick = () => {
    modalPlacing.classList.add("active");
  };
}
bgclose.onclick = () => {
  modalPlacing.classList.remove("active");
};
close_Placing_btn.onclick = ()=>{
  modalPlacing.classList.remove("active");
}
// Buyurtma berish

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
const leaf = document.querySelectorAll(".leaf");
leaf.forEach((element) => {
  element.onclick = () => {
    element.classList.toggle("active");
  };
});
// =============== LEAF
