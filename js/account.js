document.querySelector('.burger__profile').addEventListener('click', function () {
  document.querySelector('.popup__profile').classList.add('active');
  document.querySelector('.shadow').classList.add('active');
  document.querySelector('.main-block').classList.toggle('active');
});


document.querySelector('.header__burger').addEventListener('click', function () {
  document.querySelector('.main-navbar').classList.toggle('active');
  document.querySelector('.header-burger__block').classList.toggle('active');

  document.querySelector('.main-block').classList.toggle('active');
});
document.querySelector('.main-navbar__language').addEventListener('click', function () {
  document.querySelector('.main-navbar__language').classList.toggle('active');

});
document.querySelector('.header__balance').addEventListener('click', function () {
  document.querySelector('.header__balance').classList.toggle('active');

});
document.querySelector('.burger__profile-tg').addEventListener('click', function () {
  document.querySelector('.popup__tg').classList.toggle('active');
  document.querySelector('.popup').classList.toggle('active');
  document.querySelector('.shadow').classList.toggle('active');
});
let popup = document.querySelectorAll('.popup');
let popupClose = document.querySelectorAll('.popup__close');

for (let i = 0; i < popupClose.length; i++) {

  popupClose[i].addEventListener('click', function () {
    document.querySelector('body').classList.remove('lock');
    popup[i].classList.remove('active');
    document.querySelector('.popup__tg').classList.remove('active');
    document.querySelector('.shadow').classList.remove('active');
  })
}

// document.querySelector('.popup__close').addEventListener('click', function () {
//   document.querySelector('.popup__tg').classList.remove('active');
//   for (let i = 0; i < popup.length; i++) {
//     popup[i].classList.remove('active');
//   }
//   document.querySelector('.popup').classList.remove('active');
//   document.querySelector('.shadow').classList.remove('active');
// });
document.querySelector('.popup__profile-close').addEventListener('click', function () {
  document.querySelector('.popup__profile').classList.remove('active');
  document.querySelector('.shadow').classList.remove('active');
  document.querySelector('.main-block').classList.remove('active');
});
document.querySelector('.burger__ref-bottom svg').addEventListener('click', function () {
  document.querySelector('.burger__ref-bottom-copy').classList.toggle('active');
});

document.querySelector('.shadow').addEventListener('click', function () {
  document.querySelector('body').classList.remove('lock');
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.remove('active');;

  }
  document.querySelector('.popup__tg').classList.remove('active');
  document.querySelector('.popup').classList.remove('active');
  document.querySelector('.shadow').classList.remove('active');
  document.querySelector('.popup__profile').classList.remove('active');
  document.querySelector('.main-block').classList.remove('active');
});



let reviewPop = document.querySelectorAll('.review__bottom-period');
let reviewPopMain = document.querySelectorAll('.review__bottom-period-pop');
for (let i = 0; i < reviewPop.length; i++) {
  reviewPop[i].addEventListener('click', function () {
    reviewPopMain[i].classList.toggle('active');
    reviewPop[i].classList.toggle('active');
  });
}

