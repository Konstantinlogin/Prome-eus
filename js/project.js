!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(1),o((o(n(2)),n(3)))},function(e,t){},function(e,t,n){"use strict";var o=document.querySelector(".js-mobile-menu"),r=document.querySelector(".js-navigation");if(o&&r){var c=!0,u=function(e){e=e||window.event,27==e.keyCode&&l()},i=function(e){e=e||window.event;var t=e.target.getAttribute("href");(e.target.classList.contains("menu__link")||/^#/.test(t))&&l()},s=function(){o.querySelector(".menu-btn").classList.add("open"),r.classList.add("open"),document.body.classList.add("mobile-menu-opened"),document.addEventListener("keydown",u),document.addEventListener("click",i),c=!1},l=function(){o.querySelector(".menu-btn").classList.remove("open"),r.classList.remove("open"),document.body.classList.remove("mobile-menu-opened"),document.removeEventListener("keydown",u),document.removeEventListener("click",i),c=!0};o.onclick=function(){c?s():l()}}},function(e,t,n){"use strict";document.querySelectorAll(".js-smooth-link").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("href"),n=document.querySelector(t)||document.querySelector("a[name="+t.substring(1,t.length)+"]");window.scroll({top:n.offsetTop,left:0,behavior:"smooth"})})})}]);
//# sourceMappingURL=project.js.map