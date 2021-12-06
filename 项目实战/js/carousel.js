class Carousel {
    constructor(node) {
        this.root = typeof node === 'string' ? document.querySelector(node) : node
        this.$ = selector => this.root.querySelector(selector)
        this.$$ = selector => this.root.querySelectorAll(selector)

        this.carousel = node
        this.list = this.$('#list')
        this.prev = this.$('#prev')
        this.next = this.$('#next')
        this.buttons = this.$$('#buttons span')
        this.index = 1
        this.timer = null

        this.start()
        this.bind()
    }
    start() {
        this.autoplay()
    }

    bind() {
        let self = this
        this.prev.onclick = () => {
            self.index -= 1
            if(self.index < 1) {
                self.index = 5
            }
            self.showButton()
            self.animate(800)
        }

        this.next.onclick = () => {
            self.index += 1
            if(self.index > 5) {
                self.index = 1
            }
            self.showButton()
            self.animate(-800)
        }
        for(let i = 0; i < self.buttons.length; i++) {
            self.buttons[i].onclick = function() {
                let clickIndex = parseInt(this.getAttribute('index'))
                let offset = 800*(self.index - clickIndex)
                self.animate(offset)
                self.index = clickIndex
                self.showButton()
            }
        }
        self.carousel.onmouseover = () => {
            self.stopplay()
        }

        self.carousel.onmouseout = () => {
            self.autoplay()
        }
    }

    animate(offset) {
        let newLeft = parseInt(this.list.style.left) + offset
        this.list.style.left = newLeft + 'px'
        this.list.style.transition = '300ms ease'
        if(newLeft <= -4000) {
            this.list.style.transition = ''
            this.list.style.left = 0 + 'px'
        }
        if(newLeft >= 800) {
            this.list.style.transition = ''
            this.list.style.left = -3200 + 'px'
        }
    }

    showButton() {
        for(let i = 0; i < this.buttons.length; i++) {
            if(this.buttons[i].className === 'on') {
                this.buttons[i].className = ''
            }
        }
        this.buttons[this.index-1].className = 'on'
    }
    autoplay() {
        this.timer = setInterval(() => {
            this.next.onclick()
        }, 2000)
    }

    stopplay() {
        clearInterval(this.timer)
    }
}

export default Carousel
