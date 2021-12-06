class GroupImgs {
    constructor(node) {
    }
}

let viewHeight = document.documentElement.clientHeight
let throttle = (fn, delay) => {
    let canRun = true
    return function() {
        if(canRun) {
            fn.apply(this, arguments)
            canRun = false
            setTimeout(() => canRun = true, delay)
        }
    }
}

let lazyload = () => {
    let imgs = document.querySelectorAll('img[data-original][lazyload]')
    imgs.forEach(item => {
        if(item.dataset.original === '') {
            return
        }
        let rect = item.getBoundingClientRect()
        if(rect.bottom >= 0 && rect.top < viewHeight) {
            let img = new Image()
            img.src = item.dataset.original
            img.onload = () => {
                item.src = img.src
            }
            item.removeAttribute('data-original')
            item.removeAttribute('lazyload')
        }
    })
}
lazyload()
let throttle_lazyload = throttle(lazyload, 300)
document.querySelector('#right-content').addEventListener('scroll', throttle_lazyload)

export default GroupImgs