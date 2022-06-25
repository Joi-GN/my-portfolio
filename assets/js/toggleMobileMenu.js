const header = document.getElementById('header-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuAnchors = document.querySelectorAll('.menu__list__item');

function toggleMenu() {
  header.classList.toggle('open');
}

function closeMenu() {
  header.classList.remove('open');
}

window.addEventListener('resize', closeMenu);
mobileMenu.addEventListener('click', toggleMenu);
menuAnchors.forEach(anchor => anchor.addEventListener('click', closeMenu));
