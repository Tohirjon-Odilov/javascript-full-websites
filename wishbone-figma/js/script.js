const menu = document.querySelector('#mobile-menu')
const menuLikns = document.querySelector('.navbar_menu')
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLikns.classList.toggle('active');
})