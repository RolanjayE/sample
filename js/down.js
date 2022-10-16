let btnShow = document.querySelector("#btn-show");
let modelCon = document.querySelector(".model-con");
let btnClose = document.querySelector(".btn-close");

btnShow.addEventListener("click", function(){
    modelCon.style.display = "block";
    btnShow.style.display = "none";
}, false)

btnClose.addEventListener("click", function(){
    modelCon.style.display = "none";
    btnShow.style.display = "block";
}, false)

