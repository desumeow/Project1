'use strict'
let buttonOpen = document.querySelector('.page-header__mobile-button');
let buttonClose = document.querySelector('.page-header__mobile-button-close')
let menu = document.querySelector('.menu')
let mobileMenu = document.querySelector('.page-header__mobile-menu')
let mobileHeader = document.querySelector('.page-header__menu');

const mobileMenuFunc = () => {
    buttonOpen.onclick = () => {
        menu.classList.toggle('active');
        mobileMenu.classList.toggle('active')
    };

    buttonClose.onclick = () => {
        menu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    };
};

const menuScroll = window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const resolutionWidth = screen.width;
    
    const isBreakpoint = resolutionWidth <= 768 && resolutionWidth > 576;
    const isScrolledY = scrolled >= 300;

    if (isScrolledY && isBreakpoint)
    {   
        mobileHeader.classList.add('page-header__menu--fixed');
    };
    
    if (!isScrolledY || !isBreakpoint)
    {   
        mobileHeader.classList.remove('page-header__menu--fixed');
    };
});

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

const onPageReady = () => {
    mobileMenuFunc()
    menuScroll()
    swiper()
};

onPageReady();