loadText = document.querySelector('.loading-text')

bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 35)


loadText.style.opacity = 1
bg.style.filter = "blur(10px)"


function blurring() {
    load = load + 1
    loadText.innerText = `${load}`%
}