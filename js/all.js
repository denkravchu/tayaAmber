!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.onload=function(){setTimeout((function(){var e=document.querySelector(".bg-preloader");console.log(e),e.classList.contains("done")||e.classList.add("done"),setTimeout((function(){e=document.querySelector(".bg-preloader").remove()}),1e3)}),2e3)};var n=1.5,o=11,i=1,r=!1,s=!1;function l(e){for(var t=0;t<e.length;t++)e[t].id=t+1}function d(e){e.forEach((function(e){e.id=0}))}function a(e,t,n,r){if("576px"===n){for(d(e),l(t),o=t.length,console.log(o),i=1;t[i-1].style.zIndex===t[i-1].id;)i++;s=!1,r[i-1].firstChild.classList.add("active");for(var a=0;a<11;a++)a!=i-1&&r[a].firstChild.classList.remove("active")}else{for(l(e),d(t),o=e.length,console.log(o),i=1;e[i-1].style.zIndex===e[i-1].id;)i++;s=!0,r[i-1].firstChild.classList.add("active");for(a=0;a<8;a++)a!=i-1&&r[a].firstChild.classList.remove("active")}}function u(e){return e<0?0:e}window.addEventListener("load",(function(){var e=document.querySelectorAll(".desktop .cover"),t=document.querySelectorAll(".mobile .cover"),n=document.querySelectorAll(".navbar li"),o=getComputedStyle(document.querySelector("head")).width;a(e,t,o,n),window.addEventListener("resize",(function(){o=getComputedStyle(document.querySelector("head")).width,a(e,t,o,n)}))})),window.NextPage=function(){if(!r)if(r=!0,(i<1||i>=o+1)&&s)r=!1;else if(!(i<1||i>=o)||s){var e=document.getElementById(i),t=document.getElementById(i+1);console.log("NextPage: list = "+i),s||(n=1.2),e.style.transition="transform ".concat(n/2,"s ease-in"),e.style.transform="rotateY(90deg)",i+1<=o&&!s&&(t.style.overflow="visible",t.style.height="auto"),i+=1;var l=n;s||(l=1.4),setTimeout((function(){e.style.zIndex=o-e.style.zIndex+1,e.style.transition="transform ".concat(n/2,"s ease-out"),e.style.transform="rotateY(0deg)",s||setTimeout((function(){e.style.height="0",e.style.overflow="hidden"}),200),r=!1}),1e3*l/2),function(e){var t=document.querySelectorAll(".navbar li"),n=(document.querySelectorAll(".desktop .cover"),document.querySelectorAll(".mobile .cover")),o=e-1;console.log("--- "+o),s?(t[o-1].firstChild.classList.remove("active"),t[o].firstChild.classList.add("active")):(o--,t[u(Math.ceil((n[o].id-1)/2-1))].firstChild.classList.remove("active"),t[Math.ceil((n[o].id-1)/2)].firstChild.classList.add("active"),console.log("math: "+Math.ceil((n[o].id-1)/2)))}(i)}else r=!1},window.PreviousPage=function(){if(!r)if(r=!0,i<=1||i>o+1)r=!1;else{console.log(i-1);var e=document.getElementById(i-1),t=document.getElementById(i);s||(n=.8,e.style.height="auto",e.style.overflow="visible"),e.style.transition="transform ".concat(n/2,"s ease-in"),e.style.transform="rotateY(90deg)",i-=1,setTimeout((function(){e.style.zIndex=o-e.style.zIndex+1,e.style.transition="transform ".concat(n/2,"s ease-out"),e.style.transform="rotateY(180deg)",setTimeout((function(){i<=o-1&&!s&&(t.style.overflow="hidden",t.style.height="0")}),250),r=!1}),n/2*1e3),function(e){var t=document.querySelectorAll(".navbar li"),n=(document.querySelectorAll(".desktop .cover"),document.querySelectorAll(".mobile .cover")),o=e;s?(t[o-1].firstChild.classList.add("active"),t[o].firstChild.classList.remove("active")):(t[u(Math.ceil((n[o].id-1)/2-1))].firstChild.classList.add("active"),t[Math.ceil((n[o].id-1)/2)].firstChild.classList.remove("active"))}(i)}},window.OpenPage=function(e,t,l){var d=document.querySelectorAll(".navbar li");d[l-1].firstChild.classList.add("active");for(var a=0;a<11;a++)a!=l-1&&d[a].firstChild.classList.remove("active");if(!r)if(r=!0,s&&(requiredList=1&e?(e+1)/2:e/2+1),1&e&&!s&&(requiredList=e),console.log("requiredList = "+requiredList),console.log("list = "+i),requiredList!==i)if(requiredList<i)if(1===i-requiredList)r=!1,PreviousPage();else{if(s)for(a=requiredList+1;a<i-1;a++)document.getElementById(a).style.display="none";else for(var a=requiredList+1;a<i-1;a++)document.getElementById(a).style.overflow="hidden",document.getElementById(a).style.height="0";s||(document.getElementById(requiredList).style.overflow="visible",document.getElementById(requiredList).style.height="auto",setTimeout((function(){document.getElementById(i).style.overflow="hidden",document.getElementById(i).style.height="0"}),1e3)),s||(n=1.2),(u=[document.getElementById(i-1),document.getElementById(requiredList)]).forEach((function(e){e.style.transition="transform ".concat(n/2,"s ease-in"),e.style.transform="rotateY(90deg)"})),setTimeout((function(){u.forEach((function(e){e.style.zIndex=o-e.style.zIndex+1,e.style.transition="transform ".concat(n/2,"s ease-out"),e.style.transform="rotateY(180deg)"}))}),1e3*n/2),setTimeout((function(){for(var e=requiredList+1;e<i-1;e++){var t=document.getElementById(e);t.style.zIndex=o-t.style.zIndex+1,t.style.transition="transform 0s",t.style.transform="rotateY(180deg)",s&&(t.style.display="block")}r=!1,i=requiredList}),1e3*n)}else if(1===requiredList-i)s&&(r=!1,NextPage());else{if(s)for(a=i+1;a<requiredList-1;a++)document.getElementById(a).style.display="none";else{for(a=i+1;a<requiredList;a++)document.getElementById(a).style.hidden="hidden";document.getElementById(a).style.height="0"}var u;s||(document.getElementById(requiredList).style.display="block",document.getElementById(requiredList).style.overflow="visible",document.getElementById(requiredList).style.height="auto"),s||setTimeout((function(){document.getElementById(i).style.overflow="hidden",document.getElementById(i).style.height="0"}),1e3),(u=[document.getElementById(requiredList-1),document.getElementById(i)]).forEach((function(e){e.style.transition="transform ".concat(n/2,"s ease-in"),e.style.transform="rotateY(90deg)"})),setTimeout((function(){u.forEach((function(e){e.style.zIndex=o-e.style.zIndex+1,e.style.transition="transform ".concat(n/2,"s ease-out"),e.style.transform="rotateY(0deg)"}))}),1e3*n/2),setTimeout((function(){for(var e=i+1;e<requiredList-1;e++){var t=document.getElementById(e);t.style.zIndex=o-t.style.zIndex+1,t.style.transition="transform 0s",t.style.transform="rotateY(0deg)",s&&(t.style.display="block")}r=!1,i=requiredList}),1e3*n)}else r=!1},document.addEventListener("swiped-left",NextPage),document.addEventListener("swiped-right",PreviousPage),function(e,t){"use strict";"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var o=t.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o},e.CustomEvent.prototype=e.Event.prototype),t.addEventListener("touchstart",(function(e){if("true"===e.target.getAttribute("data-swipe-ignore"))return;l=e.target,s=Date.now(),n=e.touches[0].clientX,o=e.touches[0].clientY,i=0,r=0}),!1),t.addEventListener("touchmove",(function(e){if(!n||!o)return;var t=e.touches[0].clientX,s=e.touches[0].clientY;i=n-t,r=o-s}),!1),t.addEventListener("touchend",(function(e){if(l!==e.target)return;var t=parseInt(l.getAttribute("data-swipe-threshold")||"20",10),d=parseInt(l.getAttribute("data-swipe-timeout")||"500",10),a=Date.now()-s,u="";Math.abs(i)>Math.abs(r)?Math.abs(i)>t&&a<d&&(u=i>0?"swiped-left":"swiped-right"):Math.abs(r)>t&&a<d&&(u=r>0?"swiped-up":"swiped-down");""!==u&&l.dispatchEvent(new CustomEvent(u,{bubbles:!0,cancelable:!0}));n=null,o=null,s=null}),!1);var n=null,o=null,i=null,r=null,s=null,l=null}(window,document)}]);