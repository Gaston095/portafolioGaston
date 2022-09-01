let menuItem = querySelector('#nav__menu-item');
let btnMenu = querySelector('#nav__btnMenu');

btnMenu.addEventListener('click', function() {
	menuItem.classList.toggle('menuToggle');
})

