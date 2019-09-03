var menu = document.getElementById('nav__toggle');
var body = document.getElementsByTagName('body');

menu.onclick = function() {
    body.classList.toggle("menu__open");
}