var icon = document.getElementById('input__nav')
var menus = document.querySelector('#display')
icon.onclick = function(){
    menus.classList.toggle('open')
}
var listLi = document.querySelectorAll('.nav__list')
for (let li of listLi) {
    li.onclick = function(){
        menus.classList.remove('open')
    }
}

