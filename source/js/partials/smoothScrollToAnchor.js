const ACTIVE_LINK_CLASS = 'menu__link--active',
      LINKS_SELECTOR = '.js-anchor-scroll',
      HEADER_SELECTOR = '.header',
      EXCLUDE_HEIGHT = 120;
function scrollToBlock(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - EXCLUDE_HEIGHT,
        bottom: element.offsetTop - EXCLUDE_HEIGHT,
    });
}
document.querySelectorAll(LINKS_SELECTOR).forEach(a => {
    a.addEventListener('click', function (e) {
        const href = this.getAttribute("href");
        e.preventDefault();
        window.location.hash = '/' + href.replace('#', '');
        const getElement = document.getElementById(window.location.hash.replace('#/', ''))
        if (!!getElement) {
            scrollToBlock(getElement);
        }
    });
});
function scrollByHash(){
    const emptyHash = (window.location.hash === '#' || window.location.hash === '' || !window.location.hash);
    if (!emptyHash) {
        const getElement = document.querySelector(window.location.hash.replace('#/', '#'))
        if (!!getElement) {
            scrollToBlock(getElement);
        }
    }
}
window.onload = function(evt) {
    scrollByHash();
}
window.onhashchange = function(evt) {
    scrollByHash();
}
function onWindowScrollChangeActiveMenu(evt) {
    let scrollCount = 0;
    scrollCount = window.scrollY;
    document.querySelectorAll(LINKS_SELECTOR).forEach(a => {
        let refElement = document.querySelector(a.getAttribute('href'));
        if (refElement) {
            if ((scrollCount + EXCLUDE_HEIGHT) >= refElement.offsetTop) {
                document.querySelector('.' + ACTIVE_LINK_CLASS).classList.remove(ACTIVE_LINK_CLASS);
                a.classList.add(ACTIVE_LINK_CLASS);
            }
        }
    }); 
}
window.addEventListener('scroll', onWindowScrollChangeActiveMenu);