const backToTopButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', showBackToTopButton);

function showBackToTopButton() {
  if (scrollY > 600) {
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
  }
}