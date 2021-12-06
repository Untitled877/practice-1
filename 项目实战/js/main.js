import Player from './player.js'
// import Carousel from "./carousel"
// import GroupImgs from "./group-imgs"
// import Pagination from "./pagination"

// 侧边栏展开收缩
let visible = true
let leftNav = document.querySelector('#left-nav')
let rightContent = document.querySelector('#right-content')
let svgLeft = document.querySelector('.svg-left')
let toggle = () => {
    visible = !visible
    if(visible) {
        leftNav.classList.remove('left-hidden')
        rightContent.classList.remove('content-extension')
        svgLeft.querySelector('use').setAttribute('xlink:href', '#icon-left')
    } else {
        leftNav.classList.add('left-hidden')
        rightContent.classList.add('content-extension')
        svgLeft.querySelector('use').setAttribute('xlink:href', '#icon-right')
    }
}
document.querySelector('#toggle-menu').addEventListener('click', toggle)

// tab 切换
let tabNavItems = document.querySelectorAll('#left-nav > ul > li')
let tabBoxItems = document.querySelectorAll('#route-view > li')

let tabNavActive = document.querySelector('.tab-nav-active')
let tabBoxActive = document.querySelector('.tab-box-active')

tabNavItems.forEach((item, index) => {
    item.onclick = function() {
        tabNavActive.classList.remove('tab-nav-active')
        this.classList.add('tab-nav-active')
        tabNavActive = this

        tabBoxActive.classList.remove('tab-box-active')
        tabBoxItems[index].classList.add('tab-box-active')
        tabBoxActive = tabBoxItems[index]
    }
})

// 回到顶部
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

let footer = document.querySelector('footer')
window.p = new Player(footer)







