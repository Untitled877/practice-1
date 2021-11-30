
let routerView = null

let nav1HTML =
    `<div class="content-top" id="carousel">
        <div id="list-wrapper">
            <div id="list" style="left: 0">
                <img src="./images/carousel/carousel_1.jpg" alt="">
                <img src="./images/carousel/carousel_2.jpg" alt="">
                <img src="./images/carousel/carousel_3.jpg" alt="">
                <img src="./images/carousel/carousel_4.png" alt="">
                <img src="./images/carousel/carousel_5.png" alt="">
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
        <p class="read-more"><a href="#/nav1/readMore">查看更多</a></p>
            <div class="image-wrapper">
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/1.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/2.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/3.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/4.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/5.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/6.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/7.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/8.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/9.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/10.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/11.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/12.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/1.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/2.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/3.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/4.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/5.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/6.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/7.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div><div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/8.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/9.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/10.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/11.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
                <div class="box">
                    <div class="img-box">
                        <img src="" alt="" class="image-item" lazyload="true" data-original="./images/12.jpg">
                    </div>
                    <div class="content">
                        <h3>Post Title One</h3>
                        <p>The quick brown fox jumps over a lazy dog.</p>
                    </div>
                </div>
            </div>`

let readMoreHTML = `<div class="more-content">
            <div class="more-imgs-wrapper">
                <div class="scale-img">
                    <img src="./images/13.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/14.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/15.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/16.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/17.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/18.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/19.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/20.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/21.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/22.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/23.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/24.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/25.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/26.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/27.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/28.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/29.jpg" alt="">
                </div>
                <div class="scale-img">
                    <img src="./images/30.jpg" alt="">
                </div>
            </div>
            <div class="pagination">
                <span id="prev-page">上一页</span>
                <ul id="pages">
                    <li class="current">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
                <span id="next-page">下一页</span>
            </div>
        </div>`

let onHashChange = () => {
    switch (location.hash) {
        case '#/nav1':
            routerView.innerHTML = nav1HTML
            return
        case '#/nav1/readMore':
            routerView.innerHTML = readMoreHTML

            let imgsNum = document.querySelectorAll('.more-imgs-wrapper img').length
            let pageTotal = Math.ceil(imgsNum / 3)
            let currentPage = 1
            let imgsArray = document.querySelectorAll('.more-imgs-wrapper .scale-img')
            let clearStyle = () => {
                imgsArray.forEach(img => img.style.display = 'none')
            }
            let fetchImgs = (currentPage) => {
                clearStyle()
                let startIndex = 3 * (currentPage - 1)
                for(let i = startIndex; i < startIndex + 3; i++) {
                    imgsArray[i].style.display = 'inline-block'
                }
            }
            fetchImgs(currentPage)

            // total 总页数 pagesLen 页码个数 currentPage当前页码
            let around = (total, pagesLen, currentPage) => {
                let pagesNum
                let side = (pagesLen - 5) / 2
                let leftArr = [], rightArr = []
                for(let i = 1; i <= side; i++) {
                    leftArr.unshift(currentPage - i)
                    rightArr.push(currentPage + i)
                }
                pagesNum = (pagesLen - 5) % 2 === 0 ? [1, '...'].concat(leftArr, currentPage, rightArr, '...', total)
                                                    : [1, '...'].concat(currentPage - Math.ceil(side), leftArr, currentPage, rightArr, '...', total)
                return pagesNum
            }
            let drawPage = (total, pagesLen, currentPage) => {
                let temp = pagesLen - 2
                let pagesNum = []
                // 如果总页数小于页码个数，则直接显示总页数个页码
                if(total <= pagesLen) {
                    for(let i = 0; i < total; i++) {
                        pagesNum.push(i + 1)
                    }
                } else {
                    // total大于页码总数，分三种情况
                    // 1. 当前页码小于 temp
                    if(currentPage <= temp) {
                        // 1.1 当前页离首页近，尾部显示省略号
                        if(currentPage <= temp + 1 - Math.floor(temp / 2)) {
                            for(let i = 0; i < temp; i++) {
                                pagesNum.push(i + 1)
                            }
                            pagesNum.push('...', total)
                        } else {
                            // 1.2 当前页离首页远，两边显示省略号
                            pagesNum = around(total, pagesLen, currentPage)
                        }
                        // 2. 当前页大于 总数 - temp
                    } else if(currentPage >= total - temp) {
                        // 2.1 当前页离尾页近， 首部显示省略号
                        if(currentPage >= total - Math.ceil(temp / 2)) {
                            for(let i = 0; i < temp; i++) {
                                pagesNum.unshift(total - i)
                            }
                            pagesNum.unshift(1, '...')
                        } else {
                            // 当前页离尾页远，两边显示省略号
                            pagesNum = around(total, pagesLen, currentPage)
                        }
                    } else {
                        pagesNum = around(total, pagesLen, currentPage)
                    }
                }
                return pagesNum
            }

            let pages = document.getElementById('pages')
            let pagesSum = pages.children.length
            // let pageTotal = 100
            let changePage = (total, pagesLen, cur) => {
                let nums = drawPage(total, pagesLen, cur)
                         for(let i = 0; i < pages.children.length; i++) {
                    pages.children[i].innerText = nums[i]
                }
            }

            changePage(pageTotal, pagesSum, currentPage)
            fetchImgs(currentPage)

            pages.addEventListener('click', (e) => {
                let target = e.target
                if(target.nodeName === 'LI') {
                    let numText = target.innerText
                    if(numText === '...') return

                    currentPage = numText * 1
                    changePage(pageTotal, pagesSum, currentPage)
                    for(let i = 0; i < pages.children.length; i++) {
                        pages.children[i].className = pages.children[i].innerText === numText ? 'current' : '';
                    }
                    fetchImgs(currentPage)
                }
            })
            let prevPage = document.getElementById('prev-page')
            let nextPage = document.getElementById('next-page')
            prevPage.addEventListener('click', () => {
                if(currentPage === 1) return
                currentPage -= 1
                changePage(pageTotal, pagesSum, currentPage)
                for(let i = 0; i < pages.children.length; i++) {
                    pages.children[i].className = pages.children[i].innerText === ''+currentPage ? 'current' : '';
                }
                fetchImgs(currentPage)
            })

            nextPage.addEventListener('click', () => {
                if(currentPage === pageTotal) return
                currentPage += 1
                changePage(pageTotal, pagesSum, currentPage)
                for(let i = 0; i < pages.children.length; i++) {
                    pages.children[i].className = pages.children[i].innerText === ''+currentPage ? 'current' : '';
                }
                fetchImgs(currentPage)
            })

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
}

let bindEvents = () => {

}

// 音乐播放器部分：
const songList = [
    {
        id: '-1',
        title: '超度我',
        author: '福禄寿FloruitShow',
        album: '超度我',
        lyric: 'lyric_chaoduwo',
        url: '../项目实战/assets/福禄寿FloruitShow - 超度我.mp3'
    },
    {
        id: '0',
        title: '我用什么把你留住',
        author: '福禄寿FloruitShow',
        album: '我用什么把你留住',
        lyric: 'lyric_baniliuzhu',
        url: '../项目实战/assets/福禄寿FloruitShow - 我用什么把你留住.mp3'
    },
    {
        id: '1',
        title: '马',
        author: '福禄寿FloruitShow',
        album: '马',
        lyric: 'lyric_ma',
        url: '../项目实战/assets/福禄寿FloruitShow - 马.mp3'
    },
    {
        id: '2',
        title: '玉珍',
        author: '福禄寿FloruitShow',
        album: '玉珍',
        lyric: 'lyric_yuzhen',
        url: '../项目实战/assets/福禄寿FloruitShow - 玉珍.mp3'
    },
    {
        id: '3',
        title: 'FEARLESS',
        author: '福禄寿FloruitShow',
        album: 'FEARLESS',
        lyric: 'lyric_fearless',
        url: '../项目实战/assets/福禄寿FloruitShow - FEARLESS.mp3'
    },
    {
        id: '4',
        title: 'Say Something',
        author: 'A Great Big World',
        album: 'Is There Anybody Out There?',
        lyric: 'lyric_saysomething',
        url: '../项目实战/assets/A Great Big World - Say Something.mp3'
    },
    {
        id: '5',
        title: 'Trouble Sleeping',
        author: 'Corinne Bailey Rae',
        album: 'Trouble Sleeping',
        lyric: 'lyric_troublesleeping',
        url: '../项目实战/assets/Corinne Bailey Rae - Trouble Sleeping.mp3'
    },
    {
        id: '6',
        title: 'Tokyo Love Theme',
        author: 'Yusuke Tsutsumi',
        album: 'A Little World(Music for Film)',
        lyric: 'lyric_piano1',
        url: '../项目实战/assets/Yusuke Tsutsumi - Tokyo Love Theme.mp3'
    },
    {
        id: '8',
        title: '如同悲伤被下载了两次',
        author: '陈珊妮；林宥嘉',
        album: '如同悲伤被下载了两次',
        lyric: 'lyric_xiazaileliangci',
        url: '../项目实战/assets/陈珊妮 林宥嘉 - 如同悲伤被下载了两次.mp3'
    },
    {
        id: '7',
        title: '被时光移动的城市',
        author: '石进',
        album: '夜的钢琴曲Ⅱ',
        lyric: 'lyric_piano2',
        url: '../项目实战/assets/石进 - 被时光移动的城市.mp3'
    },
]

let currentIndex = 0
let isPlaying = false
const audio = new Audio()
let currentTime = 0
let flagPause = document.querySelector('#flag-pause')
let flagPlay = document.querySelector('#flag-play')

let prevSong = document.querySelector('#prev-song')
let nextSong = document.querySelector('#next-song')

let musicPanel = document.querySelector('#music-panel')
let closeButton = document.querySelector('#panel-close')
let showList = document.querySelector('.svg-wrapper')

closeButton.addEventListener('click', () => {
    musicPanel.style.display = 'none'
})

showList.addEventListener('click', () => {
    musicPanel.style.display = 'block'
})

let songBar = document.querySelector('.song-bar')
let progress = document.querySelector('.song-bar .progress')
let progressButton = document.querySelector('.song-bar .progress-button')

let progressChange = (progressLeft) => {
    if(progressLeft <= 0) {
        progressLeft = 0
    } else if(progressLeft >= 445) {
        progressLeft = 445
    }
    progressButton.style.left = progressLeft + 'px'
    progress.style.width = progressLeft + 'px'
    audio.currentTime = audio.duration * (progressLeft/445)
}

let resetProgress = () => {
    progress.style.width = '0'
    progressButton.style.left = '0'
}

progressButton.onmousedown = function(e) {
    let progressLeft = e.clientX - this.offsetLeft
    document.onmousemove = function(e) {
        let progressX = e.clientX - progressLeft
        progressChange(progressX)
    }
    document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
    }
}

songBar.onclick = function(e) {
    let progressLeft = e.clientX - this.offsetLeft
    progressChange(progressLeft)
}

let toggleStyle = (isPlaying) => {
    if(isPlaying) {
        flagPlay.style.display = 'inline-block'
        flagPause.style.display = 'none'
    } else {
        flagPause.style.display = 'inline-block'
        flagPlay.style.display = 'none'
    }
}

let changeMusic = (index) => {
    if(index < 0 || index >= songList.length) {
        return
    }
    console.log(songList[index].title)
    audio.src = songList[index].url
    audio.play()
    resetProgress()
    isPlaying = true
    toggleStyle(isPlaying)
}

flagPause.onclick = function() {
    audio.src = songList[currentIndex].url
    audio.currentTime = currentTime
    audio.play()
    isPlaying = true
    toggleStyle(isPlaying)
}

flagPlay.onclick = function() {
    isPlaying = false
    currentTime = audio.currentTime
    audio.pause()
    toggleStyle(isPlaying)
}

prevSong.addEventListener('click', (e) => {
    if(--currentIndex < 0) {
        window.alert('已经是第一首歌啦~')
        currentIndex = 0
        return
    }
    changeMusic(currentIndex)
})

nextSong.addEventListener('click', (e) => {
    if(++currentIndex >= songList.length) {
        window.alert('已经是最后一首歌啦~')
        currentIndex = songList.length - 1
        return
    }
    changeMusic(currentIndex)
})

audio.addEventListener('ended', () => {
    isPlaying = false
    toggleStyle(isPlaying)
    currentIndex++
    changeMusic(currentIndex)
})

audio.addEventListener('timeupdate', () => {
    let deltaX = (audio.currentTime / audio.duration) * 455
    progressButton.style.left = deltaX + 'px'
    progress.style.width = deltaX + 'px'
})











