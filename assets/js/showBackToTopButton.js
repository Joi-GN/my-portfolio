export default function showBackToTopButton() {
  const backToTopButton = document.getElementById('back-to-top-button');
  if (scrollY > 600) {
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
  }
}