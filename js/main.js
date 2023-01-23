const form = document.querySelector('.world__form')
const input = document.querySelector('.world__input')
const formBtn = document.querySelector('.world__form-btn')

formBtn.addEventListener('click', () => {
  input.value = ''
})
input.addEventListener('focus', () => {
  form.classList.add('world__form--active')
})
input.addEventListener('blur', () => {
  form.classList.remove('world__form--active')
})
