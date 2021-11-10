let leftMenu = document.querySelector('#left-menu')
let rightMenu = document.querySelector('#right-menu')

let el = document.getElementsByClassName('nav-li')

let visible = true;
let toggle = () => {
    visible = !visible
    if (visible) {
        leftMenu.style.display = 'inline-block'
        rightMenu.style.display = 'none'
        for(let i = 0; i < el.length; i++){
            el[i].classList.add('normal')
            el[i].classList.remove('fade-in')
        }
    } else {
        leftMenu.style.display = 'none'
        rightMenu.style.display = 'inline-block'
        for(let i = 0; i < el.length; i++){
            el[i].classList.add('fade-in')
            el[i].classList.remove('normal')
        }
    }
}