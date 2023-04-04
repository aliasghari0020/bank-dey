const swiper = new Swiper('.swiper-one', {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    

  },
});
const swiperTwo = new Swiper('.swiper-two', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    1200:{
      slidesPerView: 6,
      spaceBetween: 30
    },

    991: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 90
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 70
    }
  }

});