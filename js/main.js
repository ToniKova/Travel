
/*======================================================================*/
// Slider - 1
const slider1 = document.querySelector('.best__slider-wrapper')

if (slider1) {
  let oneSwiper = new Swiper(slider1, {
    slideClass : 'best__slider-item',
    wrapperClass : 'best__slider-body',

    navigation : {
      nextEl: '.best__btn-next',
      prevEl: '.best__btn-prev'
    },
  })
}
/*=======================================================================*/
const slider2 = document.querySelector('.tourist__slider-wrapper')

if (slider2) {
  let twoSlider = new Swiper(slider2, {
    slideClass : 'tourist__slider-item',
    wrapperClass : 'tourist__slider-body',

    scrollbar : {
      el : '.swiper-scrollbar',
      draggable : true
    },

    navigation : {
      nextEl: '.tourist__btn-next',
      prevEl: '.tourist__btn-prev'
    },
  })
}






const form = document.querySelector('.world__form')
const input = document.querySelector('.world__input')
const formBtn = document.querySelector('.world__form-btn')
const video = document.querySelectorAll('.best__video-item')


// video.forEach(item => {
//   item.addEventListener('focus', () => {
//     item.classList.add('video-z')
//   })
// })
// video.forEach(item => {
//   item.addEventListener('blur', () => {
//     item.classList.remove('video-z')
//   })
// })

formBtn.addEventListener('click', () => {
  input.value = ''
})
input.addEventListener('focus', () => {
  form.classList.add('world__form--active')
})
input.addEventListener('blur', () => {
  form.classList.remove('world__form--active')
})
