// window.onload = function () {
// Preloader
setTimeout(function () {
  var preloader = document.querySelector("#page-preloader");
  if (!preloader.classList.contains("done")) {
    preloader.classList.add("done");
  }
}, 2000)

//Выплывающее аудио
var songBtn = document.querySelector(".song-text");
var audio = document.querySelector(".audio");
songBtn.addEventListener("click", function () {
  audio.style.opacity = audio.style.opacity == "0.7" ? "0" : "0.7";
});

//Открываем презентацию
var openBtn = document.querySelector('.open-btn');
var presentation = document.querySelector('.open-powerpoint');
openBtn.addEventListener("click", function () {
  presentation.style.display = presentation.style.display == "block" ? "none" : "block";
});

// Стрелка "Наверх
function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('back_to_top-show');
  }
};
var goTopBtn = document.querySelector('.back_to_top');
window.addEventListener('scroll', trackScroll);

// Menu burger
var menuBurger = document.querySelector('.menu-burger');
var menu = document.querySelector('.menu__inner');
menuBurger.addEventListener('click', function () {
  menu.style.display = menu.style.display == "flex" ? "none" : "flex";
});


// };
