var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  coverflowEffect: {          // added
    rotate: 0,              // added (Rotate of the prev and next slides)
    depth: 200,             // added (Depth of the prev and next slides)
    stretch: 30,            // added (Space between the slides)
    modifier: 1,
    // added (Multiply the values of rotate, depth, and stretch)
    scale: 0.8,               // added (Size ratio of the prev and next slides)
    slideShadows: false,    // added (Presence of shadow on the surfaces of the prev and next slides)
  },
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});



document.querySelector('.operation__filter.mobile').addEventListener('click', () => {
  document.querySelector('.operation__filter-popup').classList.add('active');
})

document.querySelector('.operation__filter-popup .operation__filter svg').addEventListener('click', () => {
  document.querySelector('.operation__filter-popup').classList.remove('active');
})
document.querySelectorAll('.operation__filter-btn')[0].addEventListener('click', () => {
  document.querySelector('.operation__filter-popup').classList.remove('active');
})
document.querySelectorAll('.operation__filter-btn')[1].addEventListener('click', () => {
  document.querySelector('.operation__filter-popup').classList.remove('active');
})



