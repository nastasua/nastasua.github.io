document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus()
  }
});

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
                                            // ПОЛЗУНОК
var slider = document.getElementById('catRange');
var catBig = document.querySelector('.box-range__box-before');
var catSlim = document.querySelector('.box-range__box-after');
var btnBefore = document.querySelector('.box-range__btn');
var btnAfter = document.querySelector('.box-range__btn--after');

if(slider) {
  slider.addEventListener('change', function() {
    console.log(this.value);
    catBig.style.width = (100 - this.value) + "%";
    catSlim.style.width = this.value + "%";
  });

  btnBefore.addEventListener('click', function() {
    console.log(this.value);
    catBig.style.width = "100%";
    catSlim.style.width = "0%";
    slider.value = 0;
  });

  btnAfter.addEventListener('click', function() {
    console.log(this.value);
    catSlim.style.width = "100%";
    catBig.style.width = "0%";
    slider.value = 100;
  });
};
