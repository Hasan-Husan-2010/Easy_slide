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