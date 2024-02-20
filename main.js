let theme1 = document.querySelector("#t1");
let theme2 = document.querySelector("#t2");
let theme3 = document.querySelector("#t3");
let choix = document.querySelector("#choix");
let imgt1 = document.querySelector("#imgpla");
let cirt1 = document.querySelector("#imgcir");
let t2cs = document.querySelector("#comsoon");
let li1 = document.querySelector(".l1");
let li2 = document.querySelector(".l2");
let li3 = document.querySelector(".l3");
let la1 = document.querySelector(".langages1");
let la2 = document.querySelector(".langages2");
let la3 = document.querySelector(".langages3");

//theme1.style.transformOrigin = "left top";
//theme2.style.transformOrigin = "bottom right";

theme1.onmouseenter = function (e) {
  console.log(e);
  theme1.classList.add('expandedt1');
  cirt1.classList.add('cirexp');
  imgt1.classList.add('anipla');
  li1.style.display = 'block';
  la1.style.display = 'block';
  //toggleLayer("tiges");
};

theme1.onmouseleave = function () {
  theme1.classList.remove('expandedt1');
  cirt1.classList.remove('cirexp');
  imgt1.classList.remove('anipla');
  li1.style.display = 'none';
  la1.style.display = 'none';
  //toggleLayer("tiges");
}

theme2.onmouseenter = function () {
  theme2.classList.add('expandedt2');
  li2.style.display = 'block';
  la2.style.display = 'block';
}

theme2.onmouseleave = function () {
  theme2.classList.remove('expandedt2');
  li2.style.display = 'none';
  la2.style.display = 'none';
}

theme3.onmouseenter = function () {
  theme3.classList.add('expandedt3');
  li3.style.display = 'block';
  la3.style.display = 'block';
}

theme3.onmouseleave = function () {
  theme3.classList.remove('expandedt3');
  li3.style.display = 'none';
  la3.style.display = 'none';
}


function toggleLayer(layerId) {
  let layer = document.getElementById(layerId);
  if (layer.style.display === 'none') {
    layer.style.display = 'block';
  } else {
    layer.style.display = 'none';
  }
}