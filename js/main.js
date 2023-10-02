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

const accordionItem = document.querySelectorAll('.faq__item');
const accordionText = document.querySelectorAll('.faq__item-info');
const accordionIcon = document.querySelectorAll('.faq__item-icon path:last-child');
const accordionBtn = document.querySelectorAll('.faq__btn');
const accordionList = document.querySelectorAll('.faq__list');



for(let i = 0; i < accordionBtn.length; i++){
  accordionBtn[i].addEventListener('click', ()=>{
    for(let j = 0; j < accordionBtn.length; j++ ){
    
      accordionBtn[j].classList.remove('active')
      accordionList[j].classList.remove('active')
    }
    accordionBtn[i].classList.add('active')
    accordionList[i].classList.add('active')
  })
}
 
for(let i = 0; i < accordionItem.length; i++){
  accordionItem[i].addEventListener('click', ()=>{
    if(accordionIcon[i].classList.contains('active')){
      accordionText[i].classList.remove('active');
    accordionIcon[i].classList.remove('active');
    accordionItem[i].classList.remove('active');
    }
    else{

      for(let j = 0; j < accordionText.length; j++){
        accordionText[j].classList.remove('active');
        accordionIcon[j].classList.remove('active');
        accordionItem[j].classList.remove('active');
      }
      accordionText[i].classList.add('active');
      accordionIcon[i].classList.add('active');
      accordionItem[i].classList.add('active');
    }
    

  })
}

const burgerBtnOpen = document.querySelector('.burger__btn')
const burgerBtnClose = document.querySelector('.burger__close')

burgerBtnOpen.addEventListener('click', ()=>{
  document.querySelector('.burger__menu').classList.add('active')
  document.querySelector('body').classList.add('active')
})
burgerBtnClose.addEventListener('click', ()=>{
  document.querySelector('.burger__menu').classList.remove('active')
  document.querySelector('body').classList.remove('active')
})