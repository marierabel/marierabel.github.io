//animation scroll
let titrintro = document.querySelector("#titreintro");

function animation() {
  titrintro.classList.add('animation');
}

//carrousselle 1
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };

  update(newActive);
});

const update = function (newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);

  current.classList.remove('carousel__item_active');

  [current, prev, next].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 1) {
    return -current
  }

  return diff;
}

//ham button

let butham = document.querySelector("#ham");
let hamenu = document.querySelector("#menuh");
let iconco = document.querySelectorAll(".h");
let h1 = document.querySelector("#h1")
let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")

function togglemenu() {
  if (hamenu.style.display === 'none') {
    hamenu.style.display = 'block';
    h1.classList.add('a');
    h2.classList.add('b');
    h3.classList.add('c');
  } else {
    hamenu.style.display = 'none';
    h1.classList.remove('a');
    h2.classList.remove('b');
    h3.classList.remove('c');
  }
}

butham.onclick = function () { togglemenu() };

