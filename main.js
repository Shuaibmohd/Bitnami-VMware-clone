const subBtns = document.querySelectorAll('.sub__btn');
const subHeaders = document.querySelectorAll('.sub__header');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const mobileMenu = document.querySelector('.mobile__menu')

// Hamburger Btn 

function navToggle() {
   hamburgerMenu.classList.toggle('open')
   mobileMenu.classList.toggle('show')

}


function showSubMenu(e) {
   removeSubMenu()
   const subHeader = document.querySelector(`#${this.id}sub__header`);
   subHeader.classList.add('show')

}

function removeSubMenu() {
   subHeaders.forEach(subHeader => subHeader.classList.remove('show'))
}

subBtns.forEach(subBtn => subBtn.addEventListener('mouseenter', showSubMenu))
subBtns.forEach(subBtn => subBtn.addEventListener('mouseleave', removeSubMenu))
hamburgerMenu.addEventListener('click', navToggle)

