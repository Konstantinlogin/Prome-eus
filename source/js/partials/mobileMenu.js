const mobileBtn = document.querySelector('.js-mobile-menu');
const mobileMenu = document.querySelector('.js-navigation');

if (!!mobileBtn && !!mobileMenu) {
    let menuActive = true;

    let onKeyDown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            closeMenu();
        }
    };
    
    let onBodyClick = function (evt) {
        evt = evt || window.event;
        let targetHref = evt.target.getAttribute('href');
        if (evt.target.classList.contains('menu__link') || /^#/.test(targetHref)) {
            closeMenu();
        }
    };
    
    let showMenu = function () {
        mobileBtn.querySelector('.menu-btn').classList.add('open');
        mobileMenu.classList.add('open');
        document.body.classList.add('mobile-menu-opened');
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('click', onBodyClick);
        menuActive = false;
    }
    let closeMenu = function () {
        mobileBtn.querySelector('.menu-btn').classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('mobile-menu-opened');
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('click', onBodyClick);
        menuActive = true;
    }
    
    mobileBtn.onclick = function () {
        console.log('123');
        if (menuActive) {
            showMenu();
        } else {
            closeMenu();
        }
    };
}