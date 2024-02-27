loadText = document.querySelector('.loading-text')

bg = document.querySelector('.bg')

load = 90


loadText.style.opacity = 1
bg.style.filter = "blur(10px)"


function blurring() {
    load = load + 1
    loadText.innerText = `${load}`%
}