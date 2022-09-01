let buttonOpen = document.querySelector('.page-header__mobile-button');
let buttonClose = document.querySelector('.page-header__mobile-button-close')
let menu = document.querySelector('.menu')
let mobileMenu = document.querySelector('.page-header__mobile-menu')

buttonOpen.onclick = function(){
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
};

buttonClose.onclick = function(){
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active')
};
