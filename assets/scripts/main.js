var el = document.querySelector('#nav__toggle');
var body = document.querySelector('body');

el.onclick = function () {
  body.classList.toggle("menu__open");
}