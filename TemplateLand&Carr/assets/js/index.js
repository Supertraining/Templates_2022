const btnJumbo = document.getElementById('jumbotron-btn');
const whappImg = document.getElementById('img-whapp')
const whappImgBlack = document.getElementById('img-whapp-black')

btnJumbo.onmouseover = () => {
    if(whappImg.classList.contains('show') && whappImgBlack.classList.contains('hide')) {
    whappImg.classList.remove('show')
    whappImg.classList.add('hide')
    whappImgBlack.classList.remove('hide')
    whappImgBlack.classList.add('show')
    } 
}
btnJumbo.onmouseout = () => {
    if(whappImg.classList.contains('hide') && whappImgBlack.classList.contains('show')) {
    whappImg.classList.remove('hide')
    whappImg.classList.add('show')
    whappImgBlack.classList.remove('show')
    whappImgBlack.classList.add('hide')
    } 
}

const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()



