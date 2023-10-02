
// document.querySelector('.review__swiper-button').addEventListener('click', function () {
//   document.querySelector('.popup__dep').classList.add('active');
//   document.querySelector('.shadow').classList.add('active');
//   document.querySelector('body').classList.add('lock');
// })
// document.querySelector('.popup__close').addEventListener('click', function () {
//   document.querySelector('.popup__tg').classList.remove('active');
//   for (let i = 0; i < popup.length; i++) {
//     popup[i].classList.remove('active');
//   }
//   document.querySelector('.popup').classList.remove('active');
//   document.querySelector('.shadow').classList.remove('active');
// });
document.querySelector('.popup__close-score').addEventListener('click', () => {
  for (let j = 0; j < scoreTabs.length; j++) {
    scoreTitle[j].classList.remove('active');
    scoreTabs[j].classList.remove('active');
    scoreMain[j].classList.remove('active');
  }
})

let scoreBtn = document.querySelectorAll('.score__btn');
let scoreTitle = document.querySelectorAll('.popup__score-title-point');
let scoreTabs = document.querySelectorAll('.profile__settings-btn');
let scoreMain = document.querySelectorAll('.popup__score-main');

for (let i = 0; i < scoreBtn.length; i++) {
  scoreBtn[i].addEventListener('click', () => {
    scoreTitle[i].classList.add('active');
    scoreTabs[i].classList.add('active');
    scoreMain[i].classList.add('active');
    document.querySelector('.popup__score').classList.add('active');
    document.querySelector('body').classList.add('lock');
    document.querySelector('.popup__content-score').classList.add('active');
    document.querySelector('.shadow').classList.add('active');
  })
}
for (let i = 3; i < scoreBtn.length; i++) {
  scoreBtn[i].addEventListener('click', () => {
    scoreTitle[i - 3].classList.add('active');
    scoreTabs[i - 3].classList.add('active');
    scoreMain[i - 3].classList.add('active');
    document.querySelector('.popup__score').classList.add('active');
    document.querySelector('.popup__content-score').classList.add('active');
    document.querySelector('.shadow').classList.add('active');
  })
}
for (let i = 0; i < scoreTabs.length; i++) {
  scoreTabs[i].addEventListener('click', () => {
    for (let j = 0; j < scoreTabs.length; j++) {
      scoreTitle[j].classList.remove('active');
      scoreTabs[j].classList.remove('active');
      scoreMain[j].classList.remove('active');
    }
    scoreTitle[i].classList.add('active');
    scoreTabs[i].classList.add('active');
    scoreMain[i].classList.add('active');
  })

}


// for (let i = 0; i < scoreTabs.array; i++) {
//   for (let j = 0; j < scoreTabs.array; j++) {
//     scoreTitle[j].classList.remove('active');
//     scoreTabs[j].classList.remove('active');
//     scoreMain[j].classList.remove('active');
//   }
//   scoreTabs[i].addEventListener('click', () => {
//     scoreTitle[i].classList.add('active');
//     scoreTabs[i].classList.add('active');
//     scoreMain[i].classList.add('active');
//   })

// }




