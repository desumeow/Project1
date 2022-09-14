const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev', 
    },

    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
    }
  });
  