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
        this.audio = new Audio()
        this.audio.volume = 0.5
        this.currentLyricIndex = 0
        this.lyricArr = []
        this.lyricTimeArr = []

        this.isPlaying = false
        // listcycle 列表循环
        // singlecycle 单曲循环
        // shuffleplay 随机播放
        this.mode = 'listcycle'
        this.show = false

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
            self.isPlaying = !self.isPlaying
            self.togglePlay()
        }

        this.$('#prev-song').onclick = function() {
            if(self.mode === 'listcycle') {
                self.currentIndex = (self.songList.length + self.currentIndex - 1) % self.songList.length
            } else if(self.mode === 'shuffleplay') {
                self.currentIndex = Math.floor(Math.random() * self.songList.length)
            }
            self.changeMusic()
        }

        this.$('#next-song').onclick = function() {
            if(self.mode === 'listcycle') {
                self.currentIndex = (self.currentIndex + 1) % self.songList.length
            } else if(self.mode === 'shuffleplay') {
                self.currentIndex = Math.floor(Math.random() * self.songList.length)
            }
            self.changeMusic()
        }

        let musicPanel = this.$('#music-panel')

        this.$('#panel-close').onclick = () => {
            musicPanel.style.display = 'none'
        }

        this.$('.svg-wrapper').onclick = () => {
            musicPanel.style.display = 'block'
            self.renderSongSelected()
        }

        let songBar = this.$('.song-bar')
        let progressButton = this.$('.song-bar .progress-button')

        progressButton.onmousedown = function(e) {
            let progressLeft = e.clientX - this.offsetLeft
            document.onmousemove = function(e) {
                let progressX = e.clientX - progressLeft
                self.progressChange(progressX)
            }
            document.onmouseup = function() {
                document.onmousemove = null
                document.onmouseup = null
            }
        }

        songBar.onclick = function(e) {
            let progressLeft = e.clientX - this.offsetLeft
            self.progressChange(progressLeft)
        }

        let volumnProgressButton = this.$('.volumn-bar .volumn-progress-button')

        volumnProgressButton.onmousedown = function(e) {
            let progressTop = e.clientY - this.offsetTop
            document.onmousemove = function(e) {
                let progressY = e.clientY - progressTop
                self.volumnProgressChange(100 - progressY)
            }
            document.onmouseup = function() {
                document.onmousemove = null
                document.onmouseup = null
            }
        }

        this.$('#sound-volume').onclick = function() {
            self.show = !self.show
            if(self.show) {
                self.$('.control-buttons .box-wrapper').style.display = 'block'
                self.setVolumnBar()
            } else {
                self.$('.control-buttons .box-wrapper').style.display = 'none'
            }
        }

        this.$$('.music-names-list li').forEach((item, index) => {
            item.addEventListener('dblclick', () => {
                this.currentIndex = index
                this.changeMusic()
            })
        })

        this.audio.ontimeupdate = function() {
            self.togglePlay()
            self.locateLyric()
            self.setProgressBar()
        }

        this.audio.addEventListener('ended', function() {
            // 自动加载下一首
            self.$('#next-song').onclick()
        })

        this.$('#loop-play').onclick = function() {
            if(self.mode === 'listcycle') {
                this.querySelector('use').setAttribute('xlink:href', '#icon-play-shuffle')
                self.mode = 'shuffleplay'
            } else if(self.mode === 'shuffleplay') {
                this.querySelector('use').setAttribute('xlink:href', '#icon-single-circle')
                self.mode = 'singlecycle'
            } else {
                this.querySelector('use').setAttribute('xlink:href', '#icon-play-loop')
                self.mode = 'listcycle'
            }
        }
    }
    togglePlay() {
        if(this.isPlaying) {
            this.audio.play()
            this.$('#flag-play').querySelector('use').setAttribute('xlink:href', '#icon-play')
        } else {
            this.audio.pause()
            this.$('#flag-play').querySelector('use').setAttribute('xlink:href', '#icon-pause')
        }
    }

    changeMusic() {
        this.loadSong()
        this.playSong()
        this.isPlaying = true
        this.togglePlay()
        this.renderSongSelected()
    }

    setVolumnBar() {
        this.$('.volumn-bar .volumn-progress-button').style.bottom = this.audio.volume * 100 + 'px'
        this.$('.volumn-progress').style.height = this.audio.volume * 100 + 'px'
    }

    progressChange(progressLeft) {
        if(progressLeft <= 0) {
            progressLeft = 0
        } else if(progressLeft >= 460) {
            progressLeft = 460
        }
        this.$('.song-bar .progress-button').style.left = progressLeft + 'px'
        this.$('.song-bar .progress').style.width = progressLeft + 'px'

        this.audio.currentTime = this.audio.duration * (progressLeft/460)
        this.locateLyric()
    }

    volumnProgressChange(progressTop) {
        if(progressTop <= 0) {
            progressTop = 0
            this.$('#sound-volume').querySelector('use').setAttribute('xlink:href', '#icon-mute')
        } else if(progressTop >= 100) {
            progressTop = 100
        } else {
            this.$('#sound-volume').querySelector('use').setAttribute('xlink:href', '#icon-audio')
        }

        this.$('.volumn-bar .volumn-progress-button').style.bottom = progressTop + 'px'
        this.$('.volumn-progress').style.height = progressTop + 'px'

        this.audio.volume = progressTop / 100
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

            node.appendChild(svg)
            node.appendChild(songNameNode)
            node.appendChild(singerNode)
            node.appendChild(songTimeNode)
            fragment.appendChild(node)
        })
        this.$('.music-names-list').appendChild(fragment)
        this.renderSongSelected()
    }

    renderSongSelected() {
        this.$$('.music-names-list li').forEach((item, index) => {
            item.classList.remove('song-selected')
            if(index === this.currentIndex) {
                item.classList.add('song-selected')
            }
        })
        if(this.$$('.music-names-list li')[this.currentIndex].offsetTop > 150) {
            this.$('.music-content-left').scrollTo({
                top: 200,
                behavior: 'smooth'
            })
        } else {
            this.$('.music-content-left').scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    loadSong() {
        let songObj = this.songList[this.currentIndex]
        this.$('.music-header-right .header-song-name').innerText = songObj.title
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

    setProgressBar() {
        let percent = (this.audio.currentTime * 100 / this.audio.duration) + '%'
        this.$('.song-bar .progress').style.width = percent
        this.$('.song-bar .progress-button').style.left = percent
        this.$('#time-bar .time-start').innerText = this.formatTime(this.audio.currentTime)
    }

    loadLyric() {
        let lyric = ''
        let request = new XMLHttpRequest()
        request.open('GET', this.songList[this.currentIndex].lyric)
        request.onreadystatechange = () => {
            if(request.readyState === 4 && request.status === 200) {
                lyric = request.responseText
                this.setLyrics(lyric)
            }
        }
        request.send()
    }

    setLyrics(lyrics) {
        let fragment = document.createDocumentFragment()
        let lyricArr = []
        let lyricTimeArr = []
        this.lyricArr = lyricArr
        this.lyricTimeArr = lyricTimeArr
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

        this.lyricArr.forEach((item) => {
            this.lyricTimeArr.push(item[0])
        })

        let container = document.querySelector('.music-content-right #lyric')
        container.innerHTML = ''
        container.appendChild(fragment)
    }

    locateLyric() {
        let currentTime = this.audio.currentTime*1000
        this.currentLyricIndex = 0
        this.lyricTimeArr.forEach((item, index) => {
            if(currentTime >= item) {
                this.currentLyricIndex = index
            }
        })
        let node = document.querySelector(('[data-time="'+ this.lyricArr[this.currentLyricIndex][0]+'"]'))
        if(node) {
            this.setLineToCenter(node)
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

    formatTime = (secondsTotal) => {
        let minutes = parseInt(secondsTotal/60 + '')
        minutes = minutes >= 10 ? '' + minutes : '0' + minutes
        let seconds = parseInt(secondsTotal%60 + '')
        seconds = seconds >= 10 ? '' + seconds : '0' + seconds
        return minutes + ':' + seconds
    }
}

export default Player
