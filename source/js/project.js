import "../css/project.sass";

// import * as mobile_menu from './partials/mobile_menu.js';
// import * as smoothScroll from './partials/smoothScroll.js';

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.js-anchor-scroll').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.js-anchor-scroll').each(function () {
            $(this).removeClass('menu__link--active');
        })
        $(this).addClass('menu__link--active');
      
        var target = this.hash,
            menu = target,
        $target = $(target);
        $('html, body').stop().animate({'scrollTop': ($target.offset().top - 60) + 2
        }, 500, 'swing', function () {
            // window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.js-anchor-scroll').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("menu__link--active");
            currLink.addClass("menu__link--active");
        }
        else{
            currLink.removeClass("menu__link--active");
        }
    });
}