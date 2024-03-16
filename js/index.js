one = document.querySelector('.one')
two = document.querySelector('.two')
three = document.querySelector('.three')
four = document.querySelector('.four')
five = document.querySelector('.five')
six = document.querySelector('.six')

change = document.querySelector('.change')


change.addEventListener('click', () => {
    a = Math.floor(Math.random() * 10)
    one.style.zIndex = a
    console.log(a)
    console.log("HELLO")
    two.style.zIndex = Math.floor(Math.random() * 10)
    three.style.zIndex = Math.floor(Math.random() * 10)
    four.style.zIndex = Math.floor(Math.random() * 10)
    five.style.zIndex = Math.floor(Math.random() * 10)
    six.style.zIndex = Math.floor(Math.random() * 10)

})
