const header = document.getElementById('header-menu');

export function toggleMenu() {
  header.classList.toggle('open');
}

export function closeMenu() {
  header.classList.remove('open');
}
