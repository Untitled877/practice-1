class Carousel {
    constructor(node) {

    }
}
let list = document.getElementById('list')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let animate = (offset) => {
    let newLeft = parseInt(list.style.left) + offset
    list.style.left = newLeft + 'px'
    list.style.transition = '300ms ease'
    if(newLeft <= -4000) {
        list.style.transition = ''
        list.style.left = 0 + 'px'
    }
    if(newLeft >= 800) {
        list.style.transition = ''
        list.style.left = -3200 + 'px'
    }
}

let buttons = document.getElementById('buttons').getElementsByTagName('span')
let index = 1
let showButton = () => {
    for(let i = 0; i < buttons.length; i++) {
        if(buttons[i].className === 'on') {
            buttons[i].className = ''
        }
    }
    buttons[index-1].className = 'on'
}

prev.onclick = function() {
    index -= 1
    if(index < 1) {
        index = 5
    }
    showButton()
    animate(800)
}
next.onclick = function() {
    index += 1
    if(index > 5) {
        index = 1
    }
    showButton()
    animate(-800)
}

let timer
let autoplay = () => {
    timer = setInterval(() => {
        next.onclick()
    }, 2000)
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        let clickIndex = parseInt(this.getAttribute('index'))
        let offset = 800*(index - clickIndex)
        animate(offset)
        index = clickIndex
        showButton()
    }
}

autoplay()

let carouselImgs = document.querySelector('#list-wrapper')
function stopplay() {
    clearInterval(timer)
}
carouselImgs.onmouseover = stopplay
carouselImgs.onmouseout = autoplay

export default Carousel