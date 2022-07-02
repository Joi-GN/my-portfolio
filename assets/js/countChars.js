export default function countChars() {
  const charCountSpan = document.querySelector('[data-form-char-count]');
  const textArea = document.querySelector('[data-type="message"]');
  charCountSpan.textContent = `${textArea.value.length}/300`;
  if (textArea.value.length >= 250) charCountSpan.classList.add('form__field__chars-count--limit');
  else charCountSpan.classList.remove('form__field__chars-count--limit');
}