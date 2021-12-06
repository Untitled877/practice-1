class GroupImgs {
    constructor(node) {
        this.root = typeof node === 'string' ? document.querySelector(node) : node
        this.viewHeight = document.documentElement.clientHeight

        this.lazyload()
        document.querySelector('#right-content').addEventListener('scroll', () => {
            this.throttle_lazyload()
        })
    }

    throttle = function(fn, delay) {
        let canRun = true
        return function() {
            if(canRun) {
                fn.apply(this, arguments)
                canRun = false
                setTimeout(() => canRun = true, delay)
            }
        }
    }

    lazyload() {
        this.root.querySelectorAll('img[data-original][lazyload]').forEach(item => {
            if(item.dataset.original === '') {
                return
            }
            let rect = item.getBoundingClientRect()
            if(rect.bottom >= 0 && rect.top < this.viewHeight) {
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

    throttle_lazyload = this.throttle(this.lazyload, 300)
}

export default GroupImgs