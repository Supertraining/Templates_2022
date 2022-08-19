const dropDown = document.getElementById('drop-down')
const toggleDropDown = document.getElementById('toggle-dropDown')

toggleDropDown.onmouseover = () => {
        dropDown.classList.add('dropDownMenu')
}
toggleDropDown.onmouseout = () => {
        dropDown.classList.remove('dropDownMenu')
}