const ELEMENT = document.querySelector('.header'),
      ADD_CLASS_NAME = 'fixed-on-scroll',
      DEFAULT_ANCHOR_LINK = document.querySelector('#defaultAnchor') ? document.querySelector('#defaultAnchor') : false,
      SCROLL_POSITION = document.querySelector('#about') && document.querySelector('#about').clientHeight ? document.querySelector('#about').clientHeight : 0;

function onWindowScroll(evt) {
    if (this.scrollY) {
        if (this.scrollY >= SCROLL_POSITION) {
            ELEMENT.classList.add(ADD_CLASS_NAME);
        } else {
            ELEMENT.classList.remove(ADD_CLASS_NAME);
        }
    }
}
window.addEventListener('scroll', onWindowScroll);
if (DEFAULT_ANCHOR_LINK) {
    DEFAULT_ANCHOR_LINK.onclick = function(evt){
        evt.preventDefault();
        ELEMENT.classList.remove(ADD_CLASS_NAME);
    }
}