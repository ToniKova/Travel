new Swiper('.swiper', {
  navigation: {
    nextEl: '.best__btn-next',
    prevEl: '.best__btn-prev'
  },
})

const form = document.querySelector('.world__form')
const input = document.querySelector('.world__input')
const formBtn = document.querySelector('.world__form-btn')
const video = document.querySelectorAll('.best__video-title')


video.forEach(item => {
  item.addEventListener('focus', () => {
    item.classList.add('video-z')
  })
})
video.forEach(item => {
  item.addEventListener('blur', () => {
    item.classList.remove('video-z')
  })
})

formBtn.addEventListener('click', () => {
  input.value = ''
})
input.addEventListener('focus', () => {
  form.classList.add('world__form--active')
})
input.addEventListener('blur', () => {
  form.classList.remove('world__form--active')
})
