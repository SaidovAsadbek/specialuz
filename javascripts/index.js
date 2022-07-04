// call center Toggle
sp_call_btn.onclick = function () {
  collaps.classList.toggle("active");
  sp_bar.classList.remove('active')
  sp_bars_btn.classList.remove('active')
};
// call center Toggle
// Nav toggle 
sp_bars_btn.onclick = function(){
  this.classList.toggle('active')
  sp_bar.classList.toggle('active')
  collaps.classList.remove("active");
}
// Nav toggle 

// Nav , toggle modal
for (let i = 0; i < create.length; i++) {
  create[i].onclick = function () {
    modalPage.classList.toggle("active");
  };
}
modalPage.onclick = function () {
  modalPage.classList.toggle("active");
};
// Nav , toggle modal