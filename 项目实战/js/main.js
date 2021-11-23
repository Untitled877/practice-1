let routerView = null

let onHashChange = () => {
    switch (location.hash) {
        case '#/nav1':
            routerView.innerHTML =
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
                </div>`
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
            return
    }
}

let onLoad = () => {
    routerView = document.querySelector('#route-view')
    onHashChange()
}

window.addEventListener('DOMContentLoaded', onLoad)
window.addEventListener('hashchange', onHashChange)

