const dropDown = document.getElementById('drop-down')
const toggleDropDown = document.getElementById('toggle-dropDown')

toggleDropDown.onmouseover = () => {
        dropDown.classList.add('dropDownMenu')
}
toggleDropDown.onmouseout = () => {
        dropDown.classList.remove('dropDownMenu')
}

const toggleButton = document.getElementById('toggle-button')
const sideBar = document.getElementById('side-bar')

toggleButton.onclick = () => {
        if (sideBar.classList.contains('header__Ul__HideSidebar')) {
                sideBar.classList.remove('header__Ul__HideSidebar')
                sideBar.classList.add('header__Ul__ShowSidebar')
        } else if (sideBar.classList.contains('header__Ul__ShowSidebar')) {
                sideBar.classList.remove('header__Ul__ShowSidebar')
                sideBar.classList.add('header__Ul__HideSidebar')
        }
}

