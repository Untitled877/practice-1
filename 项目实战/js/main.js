let routerView = null

let nav1HTML =
    `<div class="content-top" id="carousel">
        <div id="list-wrapper">
            <div id="list" style="left: 0">
                <img src="./images/carousel/carousel_1.png" alt="">
                <img src="./images/carousel/carousel_2.jpg" alt="">
                <img src="./images/carousel/carousel_3.jpg" alt="">
                <img src="./images/carousel/carousel_4.jpg" alt="">
                <img src="./images/carousel/carousel_5.jpg" alt="">
            </div>
            <div id="buttons">
                <span index="1" class="on"></span>
                <span index="2"></span>
                <span index="3"></span>
                <span index="4"></span>
                <span index="5"></span>
            </div> 
        </div>
        <svg class="icon" id="prev" aria-hidden="true">
            <use xlink:href="#icon-left"></use>
        </svg>
        <svg class="icon" id="next" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
        </svg>
    </div>
        <div class="content-bottom">
            <div class="user-img img1"></div>
            <div class="user-img img2"></div>
            <div class="user-img img3"></div>
            <div class="user-img img4"></div>
            <div class="user-img img5"></div>
            <div class="user-img img6"></div>
            <div class="user-img img7"></div>
            <div class="user-img img8"></div>
            <div class="user-img img9"></div>
            <div class="user-img img10"></div>
            <div class="user-img img11"></div>
            <div class="user-img img12"></div>
            <div class="user-img img1"></div>
            <div class="user-img img2"></div>
            <div class="user-img img3"></div>
            <div class="user-img img4"></div>
            <div class="user-img img5"></div>
            <div class="user-img img6"></div>
            <div class="user-img img7"></div>
            <div class="user-img img8"></div>
            <div class="user-img img9"></div>
            <div class="user-img img10"></div>
            <div class="user-img img11"></div>
            <div class="user-img img12"></div>
        </div>`

let onHashChange = () => {
    switch (location.hash) {
        case '#/nav1':
            routerView.innerHTML = nav1HTML
            return
        case '#/nav2':
            routerView.innerHTML = 'Nav 2'
            return
        case '#/nav3':
            routerView.innerHTML = 'Nav 3'
            return
        case '#/nav4':
            routerView.innerHTML = 'Nav 4'
            return
        case '#/nav5':
            routerView.innerHTML = 'Nav 5'
            return
        default:
            routerView.innerHTML = nav1HTML
            return
    }
}

let onLoad = () => {
    routerView = document.querySelector('#route-view')
    onHashChange()
}

window.addEventListener('DOMContentLoaded', onLoad)
window.addEventListener('hashchange', onHashChange)

let visible = true
let toggle = () => {
    visible = !visible
    if(visible) {
        document.querySelector('#left-nav').classList.remove('left-hidden')
        document.querySelector('#right-content').classList.remove('content-extension')
        document.querySelector('.svg-right').style.display = 'none'
        document.querySelector('.svg-left').style.display = 'block'
    } else {
        document.querySelector('#left-nav').classList.add('left-hidden')
        document.querySelector('#right-content').classList.add('content-extension')
        document.querySelector('.svg-right').style.display = 'block'
        document.querySelector('.svg-left').style.display = 'none'
    }
}
document.querySelector('#toggle-menu').addEventListener('click', toggle)

let showScrollBar = () => {
    let backToTop = document.querySelector('.back-to-top')
    // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    let scrollTop = document.querySelector('#right-content').scrollTop
    if(scrollTop > 150) {
        backToTop.style.display = 'inline-block'
    } else {
        backToTop.style.display = 'none'
    }
}

let smoothScrollToTop = () => {
    document.querySelector('#right-content').scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}

document.querySelector('#right-content').addEventListener('scroll', showScrollBar)
document.querySelector('.back-to-top').addEventListener('click', smoothScrollToTop)

window.onload = () => {
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

}




