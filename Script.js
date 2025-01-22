const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slides = document.querySelector(".slides")
const elements_of_the_slide = document.querySelectorAll('.slide')

let count = 0

next.addEventListener('click', () => {
    if (count + 3 !== elements_of_the_slide.length)
        slides.style.translate = `${++count * (-33.33)}%`
})
prev.addEventListener('click', () => {
    if (count !==0)
        slides.style.translate = `${--count * (-33.33)}%`
})
const prev2 = document.querySelector(".prev2")
const next2 = document.querySelector(".next2")
const slides2 = document.querySelector(".slides2")
const elements_of_the_slide2 = document.querySelectorAll('.slide2')

next2.addEventListener('click', () => {
    if (count + 2 !== elements_of_the_slide2.length)
        slides2.style.translate = `${++count * (-50)}%`
})
prev2.addEventListener('click', () => {
    if (count !==0)
        slides2.style.translate = `${--count* (-50)}%`
})

const prev3 = document.querySelector(".prev3")
const next3 = document.querySelector(".next3")
const slides3 = document.querySelector(".slides3")
const elements_of_the_slide3 = document.querySelectorAll('.slide3')

next3.addEventListener('click', () => {
    if (count + 1 !== elements_of_the_slide3.length)
        slides3.style.translate = `${++count * (-100)}%`
})
prev3.addEventListener('click', () => {
    if (count !==0)
        slides3.style.translate = `${--count * (-100)}%`
})