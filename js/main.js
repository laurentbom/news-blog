var barreNav = document.querySelector(".header__nav__links");
var burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle("burgerHover");
  barreNav.classList.toggle("responsiveMenu");
});

// Icone to the top
var iconeTop = document.querySelector(".footer__totop");
var scrollAffichage = window.innerHeight / 10;
var lastScroll = 0;
window.addEventListener("scroll", function(){
  var scrolled = window.scrollY;
  if(scrolled >= scrollAffichage) {
    iconeTop.classList.add('show');
  } else {
    iconeTop.classList.remove('show');
  }
  lastScroll = scrolled;
});