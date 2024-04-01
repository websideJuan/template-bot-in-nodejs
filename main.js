import { getSlider } from './objeto.js'
import { formatTextController } from './js/utils/panellcontroller.js'

const buttonPlus = document.querySelector('.btn-plus')
const buttonMinus = document.querySelector('.btn-minus')

const image = document.querySelector('.image')

document.addEventListener('DOMContentLoaded', () => rederSlider())

let index = 0

console.log('main.js')

async function sliderPlus (n) {
  const sliderArr = await getSlider()

  if (index === (sliderArr.length - 1)) {
    image.setAttribute('src', sliderArr[0].image)
    index = 0
    rederSlider()
    return
  }

  index += n
  image.setAttribute('src', sliderArr[index].image)
  rederSlider()
}

async function sliderMinus (n) {
  const sliderArr = await getSlider()

  if (index === 0) {
    image.setAttribute('src', sliderArr[sliderArr.length - 1].image)
    index = sliderArr.length - 1
    rederSlider()
    return
  }

  index -= n
  image.setAttribute('src', sliderArr[index].image)
  rederSlider()
}

async function rederSlider () {
  const sliderArr = await getSlider()
  console.log(sliderArr)

  const title = document.querySelector('.card-title')
  const description = document.querySelector('.card-description')

  image.setAttribute('src', sliderArr[index].image)
  image.setAttribute('data-id', sliderArr[index].id)
  title.innerHTML = sliderArr[index].title
  title.style.textTransform = 'capitalize'
  title.style.padding = '10px 0'
  description.innerHTML = formatTextController(sliderArr[index].description)
}

buttonPlus.addEventListener('click', () => sliderPlus(1))
buttonMinus.addEventListener('click', () => sliderMinus(1))
// Path: js/form/form.js
