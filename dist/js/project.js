!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}o(1),n((n(o(2)),o(3)))},function(e,t){},function(e,t,o){"use strict";function n(e){this.scrollY&&(this.scrollY>=l?r.classList.add(c):r.classList.remove(c))}var r=document.querySelector(".header"),c="fixed-on-scroll",i=!!document.querySelector("#defaultAnchor")&&document.querySelector("#defaultAnchor"),l=document.querySelector("#about")&&document.querySelector("#about").clientHeight?document.querySelector("#about").clientHeight:0;window.addEventListener("scroll",n),i&&(i.onclick=function(e){e.preventDefault(),r.classList.remove(c)})},function(e,t,o){"use strict";function n(e){window.scroll({behavior:"smooth",left:0,top:e.offsetTop-u,bottom:e.offsetTop-u})}function r(){if("#"!==window.location.hash&&""!==window.location.hash&&window.location.hash){var e=document.querySelector(window.location.hash.replace("#/","#"));e&&n(e)}}function c(e){var t=0;t=window.scrollY,document.querySelectorAll(l).forEach(function(e){var o=document.querySelector(e.getAttribute("href"));o&&t+u>=o.offsetTop&&(document.querySelector("."+i).classList.remove(i),e.classList.add(i))})}var i="menu__link--active",l=".js-anchor-scroll",u=120;document.querySelectorAll(l).forEach(function(e){e.addEventListener("click",function(e){var t=this.getAttribute("href");e.preventDefault(),window.location.hash="/"+t.replace("#","");var o=document.getElementById(window.location.hash.replace("#/",""));o&&n(o)})}),window.onload=function(e){r()},window.onhashchange=function(e){r()},window.addEventListener("scroll",c)}]);
//# sourceMappingURL=project.js.map