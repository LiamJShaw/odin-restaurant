(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    height: 100vh;\n    background-color: rgb(226, 226, 226);\n    color: white;\n}\n\n.container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n\n    justify-content: space-between;\n}\n\n/* Nav bar */\nnav {\n    background-color: rgb(10, 3, 39);\n}\n\n.nav-container {\n    padding: 1rem 2rem;\n    display: flex;\n    align-items: center;\n    \n}\n\n.nav-links,\n.left-links,\n.right-links {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 1rem;\n\n    width: 100%;\n    margin: auto;\n\n    font-weight: 600;\n}\n\n.logo {\n    flex-shrink: 1;\n    flex-basis: 30%;\n    font-weight: 900;\n    font-size: x-large;\n}\n\n.logo svg {\n    fill: white;\n    height: 6rem;\n}\n\n.nav-links li {\n    list-style-type: none;\n    text-align: center;\n}\n\nnav a {\n    text-decoration: none;\n    color: white;\n}\n\n.nav-links li:hover {\n    opacity: 50%;\n}\n\n/* Hero */\n\n.hero {\n    background-color: rgb(10, 3, 39);\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    padding: 1rem 2rem 0.5rem 2rem;\n    \n}\n\n.hero-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.hero-container .title {\n    font-size: 6rem;\n}\n\n.hero-container .established {\n    color: rgb(180, 180, 180);\n}\n\n.hero-container .buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 1rem;\n\n    margin-top: 3rem;\n    padding: 1rem;\n}\n\n.hero-container .buttons button {\n    padding: 1rem 3rem;\n    border-style: none;\n    border-radius: 5px;\n    background-color: #5d3602;\n    \n    color: inherit;\n    font-size: large;\n\n    outline: white solid 1px;\n    outline-offset: -6px;\n}\n\n.hero-container .buttons button:hover,\n.hero-container .buttons button.active  {\n    background-color: transparent;\n    cursor: pointer;\n}\n\nmain {\n    flex: 1;\n\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n\n    flex-direction: column;\n\n    padding-top: 2rem;\n}\n\n\n/* I feel like this should be in its own CSS with Webpack? */\n/* About us content */\n\nmain .about-container {\n    display: flex;\n    justify-content: space-between;\n    justify-content: center;\n    align-items: center;\n    max-width: 80%;\n}\n\nmain img {\n    width: 40%;\n    height: auto;\n}\n\nmain .info {\n    max-width: 50%;\n    margin: 1rem;\n    color: black;\n}\n\nmain .info p {\n    font-size: x-large;\n    font-weight: 600;\n    font-family: 'Shadows Into Light', cursive;\n    margin-bottom: 4rem;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    text-align: center;\n    padding: 0.25rem;\n    opacity: 75%;\n\n    margin-top: auto;\n}\n\n/* Beers content */\n.beers-container {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    gap: 1rem;\n\n    max-width: 80%;\n}\n\n.beer-card {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 1rem;\n\n    min-width: 10rem;\n    min-height: 15rem;\n\n    padding: 1rem;\n    margin-bottom: 2rem;\n    \n    background-color: rgb(10, 3, 39);\n    color: white;\n}\n\n/* Cocktail content */\n.cocktails-container {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    gap: 1rem;\n\n    max-width: 80%;\n}\n\n.cocktail-card {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    gap: 1rem;\n\n    min-width: 10rem;\n    min-height: 15rem;\n\n    padding: 1rem;\n    margin-bottom: 2rem;\n    \n    background-color: rgb(10, 3, 39);\n    color: white;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=document.createElement("div");function g(n,e){const t=document.createElement("div");t.classList.add("cocktail-card");const r=document.createElement("h3"),o=document.createElement("p");return r.textContent=n,o.textContent=e,t.append(r),t.append(o),t}h.classList.add("cocktails-container");const v=document.createElement("div");function b(n,e,t){const r=document.createElement("div"),o=document.createElement("h3"),a=document.createElement("p"),i=document.createElement("p");return o.textContent=n,a.textContent=e,i.textContent=t,r.classList.add("beer-card"),r.append(o,a,i),r}v.classList.add("beers-container");const y=t.p+"6f91d7996fae87c5a358.jpg";function x(){const n=document.createElement("div");n.classList.add("about-container"),n.innerHTML="";const e=document.createElement("div");e.classList.add("info");const t=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p");t.textContent="Hiding in Reform Place, just off North Road is the oasis that is the Head of Steam. Just a stone's throw from the famous Durham Cathedral and the popular Riverwalk. We host a fantastic range of craft beer, local real ale, and beers from around the world. We also have an extensive selection of spirits and cocktails. There is no place quite like the Head of Steam.",r.textContent="The venue has a beautiful outside balcony and terrace area, which is the perfect place to enjoy your favourite tipple away from the hustle and bustle of the city. The venue has two floors, with the upstairs being the perfect place for your next function or business meeting.",o.textContent="Looking for something to eat? The Head of Steam offers a great selection of burgers, pizzas, and sharers. We also have a range of vegetarian, vegan, and gluten free options.",e.append(t,r,o);const a=new Image;return a.src=y,n.append(e,a),n}const w=document.querySelector(".main"),k=document.querySelector(".buttons");function L(){k.childNodes.forEach((n=>{1===n.nodeType&&n.classList.remove("active")}))}k.addEventListener("click",(n=>{switch(n.target.id){case"beers":console.log("beers"),w.innerHTML="",w.appendChild((v.innerHTML="",v.append(b("Heineken","Lager","5%")),v.append(b("Stella","Piss","4.6%")),v.append(b("Stone IPA","IPA","7%")),v)),L(),n.target.classList.add("active");break;case"cocktails":console.log("cocktails"),w.innerHTML="",w.appendChild((h.innerHTML="",h.append(g("Shandy","Lager, lemonade")),h.append(g("Margarita","Tequila, lime")),h.append(g("Mojito","Vodka, mint, soda water")),h)),L(),n.target.classList.add("active");break;case"food":console.log("food"),w.innerHTML="",L(),n.target.classList.add("active")}})),document.querySelector(".logo").addEventListener("click",(()=>{w.innerHTML="",L(),w.appendChild(x())})),w.appendChild(x())})()})();