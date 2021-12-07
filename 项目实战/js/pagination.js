class Pagination {
    constructor(node) {
        this.root = typeof node === 'string' ? document.querySelector(node) : node
        this.imgsNum = this.root.querySelectorAll('.more-imgs-wrapper img').length
        this.pageTotal = Math.ceil(this.imgsNum / 3)
        this.currentPage = 1
        this.imgsArray = this.root.querySelectorAll('.more-imgs-wrapper .scale-img')

        this.pages = this.root.querySelector('#pages')
        this.pagesSum = this.pages.children.length

        this.prevPage = this.root.querySelector('#prev-page')
        this.nextPage = this.root.querySelector('#next-page')

        this.fetchImgs(this.currentPage)
        this.bind()

    }

    bind() {
        this.pages.addEventListener('click', (e) => {
            let target = e.target
            if(target.nodeName === 'LI') {
                let numText = target.innerText
                if(numText === '...') return

                this.currentPage = numText * 1
                this.changePage(this.pageTotal, this.pagesSum, this.currentPage)
                for(let i = 0; i < this.pages.children.length; i++) {
                    this.pages.children[i].className = this.pages.children[i].innerText === numText ? 'current' : '';
                }
                this.fetchImgs(this.currentPage)
            }
        })

        this.prevPage.addEventListener('click', () => {
            if(this.currentPage === 1) return
            this.currentPage -= 1
            this.changePage(this.pageTotal, this.pagesSum, this.currentPage)
            for(let i = 0; i < this.pages.children.length; i++) {
                this.pages.children[i].className = this.pages.children[i].innerText === ''+this.currentPage ? 'current' : '';
            }
            this.fetchImgs(this.currentPage)
        })

        this.nextPage.addEventListener('click', () => {
            if(this.currentPage === this.pageTotal) return
            this.currentPage += 1
            this.changePage(this.pageTotal, this.pagesSum, this.currentPage)
            for(let i = 0; i < this.pages.children.length; i++) {
                this.pages.children[i].className = this.pages.children[i].innerText === ''+this.currentPage ? 'current' : '';
            }
            this.fetchImgs(this.currentPage)
        })
    }

    clearStyle() {
        this.imgsArray.forEach(img => img.style.display = 'none')
    }
    fetchImgs(currentPage) {
        this.clearStyle()
        let startIndex = 3 * (currentPage - 1)
        for(let i = startIndex; i < startIndex + 3; i++) {
            this.imgsArray[i].style.display = 'inline-block'
        }
    }

    around(total, pagesLen, currentPage) {
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

    drawPage(total, pagesLen, currentPage) {
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
                    pagesNum = this.around(total, pagesLen, currentPage)
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
                    pagesNum = this.around(total, pagesLen, currentPage)
                }
            } else {
                pagesNum = this.around(total, pagesLen, currentPage)
            }
        }
        return pagesNum
    }

    changePage(total, pagesLen, cur) {
        let nums = this.drawPage(total, pagesLen, cur)
        for(let i = 0; i < this.pages.children.length; i++) {
            this.pages.children[i].innerText = nums[i]
        }
    }



}

// let imgsNum = document.querySelectorAll('.more-imgs-wrapper img').length
// let pageTotal = Math.ceil(imgsNum / 3)
// let currentPage = 1
// let imgsArray = document.querySelectorAll('.more-imgs-wrapper .scale-img')
// let clearStyle = () => {
//     imgsArray.forEach(img => img.style.display = 'none')
// }
// let fetchImgs = (currentPage) => {
//     clearStyle()
//     let startIndex = 3 * (currentPage - 1)
//     for(let i = startIndex; i < startIndex + 3; i++) {
//         imgsArray[i].style.display = 'inline-block'
//     }
// }
// fetchImgs(currentPage)

// total 总页数 pagesLen 页码个数 currentPage当前页码
// let around = (total, pagesLen, currentPage) => {
//     let pagesNum
//     let side = (pagesLen - 5) / 2
//     let leftArr = [], rightArr = []
//     for(let i = 1; i <= side; i++) {
//         leftArr.unshift(currentPage - i)
//         rightArr.push(currentPage + i)
//     }
//     pagesNum = (pagesLen - 5) % 2 === 0 ? [1, '...'].concat(leftArr, currentPage, rightArr, '...', total)
//         : [1, '...'].concat(currentPage - Math.ceil(side), leftArr, currentPage, rightArr, '...', total)
//     return pagesNum
// }
// let drawPage = (total, pagesLen, currentPage) => {
//     let temp = pagesLen - 2
//     let pagesNum = []
//     // 如果总页数小于页码个数，则直接显示总页数个页码
//     if(total <= pagesLen) {
//         for(let i = 0; i < total; i++) {
//             pagesNum.push(i + 1)
//         }
//     } else {
//         // total大于页码总数，分三种情况
//         // 1. 当前页码小于 temp
//         if(currentPage <= temp) {
//             // 1.1 当前页离首页近，尾部显示省略号
//             if(currentPage <= temp + 1 - Math.floor(temp / 2)) {
//                 for(let i = 0; i < temp; i++) {
//                     pagesNum.push(i + 1)
//                 }
//                 pagesNum.push('...', total)
//             } else {
//                 // 1.2 当前页离首页远，两边显示省略号
//                 pagesNum = around(total, pagesLen, currentPage)
//             }
//             // 2. 当前页大于 总数 - temp
//         } else if(currentPage >= total - temp) {
//             // 2.1 当前页离尾页近， 首部显示省略号
//             if(currentPage >= total - Math.ceil(temp / 2)) {
//                 for(let i = 0; i < temp; i++) {
//                     pagesNum.unshift(total - i)
//                 }
//                 pagesNum.unshift(1, '...')
//             } else {
//                 // 当前页离尾页远，两边显示省略号
//                 pagesNum = around(total, pagesLen, currentPage)
//             }
//         } else {
//             pagesNum = around(total, pagesLen, currentPage)
//         }
//     }
//     return pagesNum
// }

// let pages = document.getElementById('pages')
// let pagesSum = pages.children.length
// let pageTotal = 100
// let changePage = (total, pagesLen, cur) => {
//     let nums = drawPage(total, pagesLen, cur)
//     for(let i = 0; i < pages.children.length; i++) {
//         pages.children[i].innerText = nums[i]
//     }
// }

// changePage(pageTotal, pagesSum, currentPage)
// fetchImgs(currentPage)

// pages.addEventListener('click', (e) => {
//     let target = e.target
//     if(target.nodeName === 'LI') {
//         let numText = target.innerText
//         if(numText === '...') return
//
//         currentPage = numText * 1
//         changePage(pageTotal, pagesSum, currentPage)
//         for(let i = 0; i < pages.children.length; i++) {
//             pages.children[i].className = pages.children[i].innerText === numText ? 'current' : '';
//         }
//         fetchImgs(currentPage)
//     }
// })
// let prevPage = document.getElementById('prev-page')
// let nextPage = document.getElementById('next-page')
// prevPage.addEventListener('click', () => {
//     if(currentPage === 1) return
//     currentPage -= 1
//     changePage(pageTotal, pagesSum, currentPage)
//     for(let i = 0; i < pages.children.length; i++) {
//         pages.children[i].className = pages.children[i].innerText === ''+currentPage ? 'current' : '';
//     }
//     fetchImgs(currentPage)
// })
//
// nextPage.addEventListener('click', () => {
//     if(currentPage === pageTotal) return
//     currentPage += 1
//     changePage(pageTotal, pagesSum, currentPage)
//     for(let i = 0; i < pages.children.length; i++) {
//         pages.children[i].className = pages.children[i].innerText === ''+currentPage ? 'current' : '';
//     }
//     fetchImgs(currentPage)
// })

export default Pagination