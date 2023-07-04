const bntMenu = document.querySelector('.bnts-menu')
const navMenu = document.querySelector('.nav__second-menu')

bntMenu.addEventListener('click', function(){
    bntMenu.classList.toggle('bnts-menu-active')
    navMenu.classList.toggle('nav__second-menu-active')
})
