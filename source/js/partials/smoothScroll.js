document.querySelectorAll('.js-smooth-link').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
        window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
        });
    });
});