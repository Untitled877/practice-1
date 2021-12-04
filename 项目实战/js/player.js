class Player {
    constructor(node) {
        this.root = typeof node === 'string' ? document.querySelector(node) : node
        this.$ = selector => this.root.querySelector(selector)
        this.$$ = selector => this.root.querySelectorAll(selector)

        this.songList = [
            {
                title: '超度我',
                author: '福禄寿FloruitShow',
                duration: '03:51',
                cover: '../项目实战/assets/cover/超度我.jpg',
                lyric: '../项目实战/assets/lyrics/超度我.lrc',
                url: '../项目实战/assets/songs/福禄寿FloruitShow - 超度我.mp3'
            },
            {
                title: '我用什么把你留住',
                author: '福禄寿FloruitShow',
                duration: '05:29',
                cover: '../项目实战/assets/cover/我用什么把你留住.jpg',
                lyric: '../项目实战/assets/lyrics/我用什么把你留住.lrc',
                url: '../项目实战/assets/songs/福禄寿FloruitShow - 我用什么把你留住.mp3'
            },
            {
                title: '马',
                author: '福禄寿FloruitShow',
                duration: '03:52',
                cover: '../项目实战/assets/cover/马.jpg',
                lyric: '../项目实战/assets/lyrics/马.lrc',
                url: '../项目实战/assets/songs/福禄寿FloruitShow - 马.mp3'
            },
            {
                title: '玉珍',
                author: '福禄寿FloruitShow',
                duration: '06:22',
                cover: '../项目实战/assets/cover/玉珍.jpg',
                lyric: '../项目实战/assets/lyrics/玉珍.lrc',
                url: '../项目实战/assets/songs/福禄寿FloruitShow - 玉珍.mp3'
            },
            {
                title: 'FEARLESS',
                author: '福禄寿FloruitShow',
                duration: '05:05',
                cover: '../项目实战/assets/cover/fearless.jpg',
                lyric: '../项目实战/assets/lyrics/FEARLESS.lrc',
                url: '../项目实战/assets/songs/福禄寿FloruitShow - FEARLESS.mp3'
            },
            {
                title: 'Say Something',
                author: 'A Great Big World',
                duration: '03:53',
                cover: '../项目实战/assets/cover/say something.jpg',
                lyric: '../项目实战/assets/lyrics/Say Something.lrc',
                url: '../项目实战/assets/songs/A Great Big World - Say Something.mp3'
            },
            {
                title: 'Trouble Sleeping',
                author: 'Corinne Bailey Rae',
                duration: '03:26',
                cover: '../项目实战/assets/cover/trouble sleeping.jpg',
                lyric: '../项目实战/assets/lyrics/Trouble Sleeping.lrc',
                url: '../项目实战/assets/songs/Corinne Bailey Rae - Trouble Sleeping.mp3'
            },
            {
                title: 'Tokyo Love Theme',
                author: 'Yusuke Tsutsumi',
                duration: '05:37',
                cover: '../项目实战/assets/cover/Tokyo Love Theme.jpg',
                lyric: '../项目实战/assets/lyrics/Tokyo Love Theme.lrc',
                url: '../项目实战/assets/songs/Yusuke Tsutsumi - Tokyo Love Theme.mp3'
            },
            {
                title: '如同悲伤被下载了两次',
                author: '陈珊妮 林宥嘉',
                duration: '04:29',
                cover: '../项目实战/assets/cover/如同悲伤被下载了两次.jpg',
                lyric: '../项目实战/assets/lyrics/如同悲伤被下载了两次.lrc',
                url: '../项目实战/assets/songs/陈珊妮 林宥嘉 - 如同悲伤被下载了两次.mp3'
            },
            {
                title: '被时光移动的城市',
                author: '石进',
                duration: '01:32',
                cover: '../项目实战/assets/cover/被时光移动的城市.jpg',
                lyric: '../项目实战/assets/lyrics/被时光移动的城市.lrc',
                url: '../项目实战/assets/songs/石进 - 被时光移动的城市.mp3'
            },
        ]

        this.currentIndex = 0
        // this.runtime = '00:00'
        this.audio = new Audio()
        this.lyricIndex = -1
        this.lyricArr = []

        this.start()
        this.bind()

    }
    start() {
        this.renderSongsList()
        this.loadSong()
    }

    bind() {
        let self = this
        this.$('#flag-play').onclick = function() {
            if(this.classList.contains('playing')) {
                self.audio.pause()
                this.classList.remove('playing')
                this.classList.add('pause')
                this.querySelector('use').setAttribute('xlink:href', '#icon-pause')
            } else if(this.classList.contains('pause')) {
                self.audio.play()
                this.classList.remove('pause')
                this.classList.add('playing')
                this.querySelector('use').setAttribute('xlink:href', '#icon-play')
            }
        }
        this.audio.ontimeupdate = function() {
            self.locateLyric()
        }
    }

    renderSongsList() {
        this.$$('.song-list-length').forEach(item => item.innerText = this.songList.length)
        let fragment = document.createDocumentFragment()
        this.songList.forEach((item, index) => {
            let node = document.createElement('li')
            // let svg = document.createElement('svg')
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            svg.classList.add('icon')
            svg.setAttribute('aria-hidden', 'true')
            let use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
            use.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                "#icon-play-now"
            );
            svg.appendChild(use)
            let songNameNode = document.createElement('span')
            songNameNode.innerText = item.title
            songNameNode.classList.add('col-song-name')
            let singerNode = document.createElement('span')
            singerNode.innerText = item.author
            singerNode.classList.add('col-song-singer')
            let songTimeNode = document.createElement('span')
            songTimeNode.innerText = item.duration
            songTimeNode.classList.add('col-song-time')
            if(index === this.currentIndex) {
                node.classList.add('song-selected')
            }

            node.appendChild(svg)
            node.appendChild(songNameNode)
            node.appendChild(singerNode)
            node.appendChild(songTimeNode)
            fragment.appendChild(node)
        })
        this.$('.music-names-list').appendChild(fragment)

    }

    loadSong() {
        let songObj = this.songList[this.currentIndex]
        this.$('.song-info img').src = songObj.cover
        this.$('.song-info .song-name').innerText = songObj.title
        this.$('.song-info .song-singer').innerText = songObj.author
        this.$('#time-bar .time-start').innerText = '00:00'
        this.$('#time-bar .time-end').innerText = songObj.duration
        this.audio.src = songObj.url

        this.loadLyric()
    }

    playSong() {
        this.audio.oncanplaythrough = () => this.audio.play()
    }

    loadLyric() {
        let lyric = ''
        let request = new XMLHttpRequest()
        request.open('GET', this.songList[this.currentIndex].lyric)
        request.onreadystatechange = () => {
            if(request.readyState === 4 && request.status === 200) {
                lyric = request.responseText
                // console.log(lyric)
                this.setLyrics(lyric)
            }
        }
        request.send()
    }

    setLyrics(lyrics) {
        // this.lyricIndex = 0
        let fragment = document.createDocumentFragment()
        let lyricArr = []
        this.lyricArr = lyricArr
        lyrics.split(/\n/)
            .filter(str => str.match(/\[.+?\]/))
            .forEach(line => {
                let str = line.replace(/\[.+?\]/g, '')
                line.match(/\[.+?\]/g).forEach(t=>{
                    t = t.replace(/[\[\]]/g,'')
                    let milliseconds = parseInt(t.slice(0,2))*60*1000 + parseInt(t.slice(3,5))*1000 + parseInt(t.slice(6))
                    lyricArr.push([milliseconds, str])
                })
            })

        lyricArr.filter(line => line[1].trim() !== '').sort((v1, v2) => {
            if(v1[0] > v2[0]) {
                return 1
            } else {
                return -1
            }
        }).forEach(line => {
            let node = document.createElement('li')
            node.setAttribute('data-time', line[0])
            node.innerText = line[1]
            fragment.appendChild(node)
        })
        let container = document.querySelector('.music-content-right #lyric')
        container.innerHTML = ''
        container.appendChild(fragment)
    }



    locateLyric() {
        let currentTime = this.audio.currentTime*1000
        let nextLineTime = this.lyricArr[this.lyricIndex+1][0]
        if(currentTime > nextLineTime && this.lyricIndex < this.lyricArr.length - 1) {
            this.lyricIndex++
            let node = document.querySelector(('[data-time="'+ this.lyricArr[this.lyricIndex][0]+'"]'))
            if(node) {
                this.setLineToCenter(node)
                // console.log(node.innerText)
            }
        }
    }

    setLineToCenter(node) {
        let contentRight = document.querySelector('.music-content-right')
        let lyricContainer = document.querySelector('.music-content-right #lyric')
        let offset = node.offsetTop - contentRight.offsetHeight/2
        offset = offset > 0 ? offset : 0
        lyricContainer.style.transform = `translateY(-${offset}px)`
        document.querySelectorAll('#lyric li').forEach(node => node.classList.remove('current'))
        node.classList.add('current')
    }

}

// 音乐播放器部分：

/*
// let currentIndex = 0
let isPlaying = false
// const audio = new Audio()
let currentTime = 0
let flagPause = document.querySelector('#flag-pause')
let flagPlay = document.querySelector('#flag-play')

let prevSong = document.querySelector('#prev-song')
let nextSong = document.querySelector('#next-song')

let musicPanel = document.querySelector('#music-panel')
let closeButton = document.querySelector('#panel-close')
let showList = document.querySelector('.svg-wrapper')

let songLength = songList.length

closeButton.addEventListener('click', () => {
    musicPanel.style.display = 'none'
})

showList.addEventListener('click', () => {
    musicPanel.style.display = 'block'
})

let songBar = document.querySelector('.song-bar')
let progress = document.querySelector('.song-bar .progress')
let progressButton = document.querySelector('.song-bar .progress-button')
let runtime = document.querySelector('#time-bar .time-start')
runtime.innerText = '00:00'

let lyric = ''
let lyricIndex = 0
let lyricArr = []

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
    // console.log(songList[index].title)
    audio.src = songList[index].url
    audio.play()
    runtime.innerText = '00:00'
    resetProgress()
    isPlaying = true
    toggleStyle(isPlaying)
}

flagPause.onclick = function() {
    audio.src = songList[currentIndex].url
    audio.currentTime = currentTime
    audio.oncanplaythrough = () => audio.play()
    isPlaying = true
    toggleStyle(isPlaying)
}

flagPlay.onclick = function() {
    isPlaying = false
    currentTime = audio.currentTime
    audio.pause()
    toggleStyle(isPlaying)
}



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
    locateLyric()
    runtime.innerText = formatTime(audio.currentTime)
})

let setLyrics = (lyrics) => {
    let fragment = document.createDocumentFragment()
    lyrics.split(/\n/)
        .filter(str => str.match(/\[.+?\]/))
        .forEach(line => {
            let str = line.replace(/\[.+?\]/g, '')
            line.match(/\[.+?\]/g).forEach(t=>{
                t = t.replace(/[\[\]]/g,'')
                let milliseconds = parseInt(t.slice(0,2))*60*1000 + parseInt(t.slice(3,5))*1000 + parseInt(t.slice(6))
                lyricArr.push([milliseconds, str])
            })
        })

    lyricArr.filter(line => line[1].trim() !== '').sort((v1, v2) => {
        if(v1[0] > v2[0]) {
            return 1
        } else {
            return -1
        }
    }).forEach(line => {
        let node = document.createElement('li')
        node.setAttribute('data-time', line[0])
        node.innerText = line[1]
        fragment.appendChild(node)
    })
    let container = document.querySelector('.music-content-right #lyric')
    container.innerHTML = ''
    container.appendChild(fragment)
}

let loadLyric = (currentIndex) => {
    let request = new XMLHttpRequest()
    request.open('GET', songList[currentIndex].lyric)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            lyric = request.responseText
            // console.log(lyric)
            setLyrics(lyric)
        }
    }
    request.send()
}

loadLyric(currentIndex)

// 歌词定位
let locateLyric = () => {
    let currentTime = audio.currentTime*1000
    let nextLineTime = lyricArr[lyricIndex+1][0]
    if(currentTime > nextLineTime && lyricIndex < lyricArr.length - 1) {
        lyricIndex++
        let node = document.querySelector(('[data-time="'+ lyricArr[lyricIndex][0]+'"]'))
        if(node) {
            setLineToCenter(node)
            // console.log(node.innerText)
        }
    }
}

let setLineToCenter = (node) => {
    let contentRight = document.querySelector('.music-content-right')
    let lyricContainer = document.querySelector('.music-content-right #lyric')
    let offset = node.offsetTop - contentRight.offsetHeight/2
    offset = offset > 0 ? offset : 0
    lyricContainer.style.transform = `translateY(-${offset}px)`
    document.querySelectorAll('#lyric li').forEach(node => node.classList.remove('current'))
    node.classList.add('current')
}

let renderList = () => {
    document.querySelectorAll('.song-list-length').forEach(item => item.innerText = songLength)
    let fragment = document.createDocumentFragment()
    songList.forEach((item, index) => {
        let node = document.createElement('li')
        // let svg = document.createElement('svg')
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.classList.add('icon')
        svg.setAttribute('aria-hidden', 'true')
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use')
        use.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "href",
            "#icon-play-now"
        );
        svg.appendChild(use)
        let songNameNode = document.createElement('span')
        songNameNode.innerText = item.title
        songNameNode.classList.add('col-song-name')
        let singerNode = document.createElement('span')
        singerNode.innerText = item.author
        singerNode.classList.add('col-song-singer')
        let songTimeNode = document.createElement('span')
        songTimeNode.innerText = item.duration
        songTimeNode.classList.add('col-song-time')
        if(index === currentIndex) {
            node.classList.add('song-selected')
        }

        node.appendChild(svg)
        node.appendChild(songNameNode)
        node.appendChild(singerNode)
        node.appendChild(songTimeNode)
        fragment.appendChild(node)
    })
    document.querySelector('.music-names-list').appendChild(fragment)
    document.querySelector('.song-info img').src = songList[currentIndex].cover
    document.querySelector('.song-info .song-name').innerText = songList[currentIndex].title
    document.querySelector('.song-info .song-singer').innerText = songList[currentIndex].author
    document.querySelector('#time-bar .time-end').innerText = songList[currentIndex].duration
}

let renderSong = () => {
    // startTime置为00：00
}

renderList()

let formatTime = (secondsTotal) => {
    let minutes = parseInt(secondsTotal/60)
    minutes = minutes >= 10 ? '' + minutes : '0' + minutes
    let seconds = parseInt(secondsTotal%60)
    seconds = seconds >= 10 ? '' + seconds : '0' + seconds
    return minutes + ':' + seconds
}
*/

export default Player
