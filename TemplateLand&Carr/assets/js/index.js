const btnJumbo = document.getElementById('jumbotron-btn');
const whappImg = document.getElementById('img-whapp');
const whappImgBlack = document.getElementById('img-whapp-black');

btnJumbo.onmouseover = () => {
    if (whappImg.classList.contains('show') && whappImgBlack.classList.contains('hide')) {
        whappImg.classList.remove('show');
        whappImg.classList.add('hide');
        whappImgBlack.classList.remove('hide');
        whappImgBlack.classList.add('show');
    }
}
btnJumbo.onmouseout = () => {
    if (whappImg.classList.contains('hide') && whappImgBlack.classList.contains('show')) {
        whappImg.classList.remove('hide');
        whappImg.classList.add('show');
        whappImgBlack.classList.remove('show');
        whappImgBlack.classList.add('hide');
    }
}
const btnJumbo1 = document.getElementById('jumbotron-btn1');
const whappImg1 = document.getElementById('img-whapp1');
const whappImgBlack1 = document.getElementById('img-whapp-black1');

btnJumbo1.onmouseover = () => {
    if (whappImg1.classList.contains('show') && whappImgBlack1.classList.contains('hide')) {
        whappImg1.classList.remove('show');
        whappImg1.classList.add('hide');
        whappImgBlack1.classList.remove('hide');
        whappImgBlack1.classList.add('show');
        btnJumbo1.classList.add('border', 'border-dark')
    }
}
btnJumbo1.onmouseout = () => {
    if (whappImg1.classList.contains('hide') && whappImgBlack1.classList.contains('show')) {
        whappImg1.classList.remove('hide');
        whappImg1.classList.add('show');
        whappImgBlack1.classList.remove('show');
        whappImgBlack1.classList.add('hide');
    }
}




const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()



