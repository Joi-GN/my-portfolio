import showBackToTopButton from "./showBackToTopButton.js";
import countChars from "./countChars.js";
import validate from "./validateForm.js";
import { closeMenu, toggleMenu } from "./toggleMobileMenu.js";

// Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const menuAnchors = document.querySelectorAll('.menu__list__item');
window.addEventListener('resize', closeMenu);
mobileMenu.addEventListener('click', toggleMenu);
menuAnchors.forEach(anchor => anchor.addEventListener('click', closeMenu));

// Back To Top Button
window.addEventListener('scroll', showBackToTopButton);

// Count Chars
const textArea = document.querySelector('[data-type="message"]');
textArea.addEventListener('keyup', countChars);

// Validate Inputs
const inputs = document.querySelectorAll('[data-type]');
inputs.forEach(input => {
  input.addEventListener('blur', (e) => validate(e.target));
})