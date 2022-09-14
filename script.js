'use strict'
let buttonOpen = document.querySelector('.page-header__mobile-button');
let buttonClose = document.querySelector('.page-header__mobile-button-close')
let menu = document.querySelector('.menu')
let mobileMenu = document.querySelector('.page-header__mobile-menu')
let mobileHeader = document.querySelector('.page-header__menu');

buttonOpen.onclick = function(){
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
};

buttonClose.onclick = function(){
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
};


window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const resolution = screen.width;

    if (scrolled >= 300 && (resolution <= 768 && resolution > 576))
    {
        mobileHeader.style.position='fixed';
        buttonOpen.style.position='fixed';
        mobileHeader.style.backgroundColor = 'rgba(' + 226 + ',' + 230 + ',' + 238 + ',' + 1 +')';
    }
    /* Зафиксировали баннер после того */
    /* как пользователь отскролил вниз */
    
    else if (scrolled < 300 && (resolution <= 768 && resolution > 576))
    {
        mobileHeader.style.position='static';
        buttonOpen.style.position='static';
        mobileHeader.style.backgroundColor = 'rgba(' + 226 + ',' + 230 + ',' + 238 + ',' + 0 +')';
    }
    /* Вернули обратно, никаких хитростей */
    /* в современных браузерах придумывать не нужно */
});
