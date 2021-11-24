let routerView = null

let nav1HTML =
    `<div class="content-top">
                    轮播图
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






