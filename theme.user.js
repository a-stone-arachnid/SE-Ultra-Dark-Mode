// ==UserScript==
// @name         Stack Exchange Ultra Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @updateURL    https://github.com/a-stone-arachnid/SE-Ultra-Dark-Mode/raw/master/theme.user.js
// @downloadURL  https://github.com/a-stone-arachnid/SE-Ultra-Dark-Mode/raw/master/theme.user.js
// @description  Ultra Dark Mode for Stack Exchange
// @author       a stone arachnid
// @match        https://*.stackexchange.com/*
// @match        https://*.askubuntu.com/*
// @match        https://*.stackoverflow.com/*
// @match        https://*.serverfault.com/*
// @match        https://*.superuser.com/*
// @match        https://*.stackapps.com/*
// @match        https://*.mathoverflow.net/*
// @exclude      https://chat.*
// @grant        none
// ==/UserScript==

(function($,se){
    "use strict";
    const styles = `
body.theme-ultradark {
 --white:#000;
 --black:#fff;
 --black-025:#1e1e1e;
 --black-050:#2b2b2b;
 --black-075:#2b2b2b;
 --black-100:#363636;
 --black-150:#363636;
 --black-200:#3f3f3f;
 --black-300:#3f3f3f;
 --black-350:#464646;
 --black-400:#464646;
 --black-500:#4a4a4a;
 --black-600:#4a4a4a;
 --black-700:#4e4e4e;
 --black-750:#4e4e4e;
 --black-800:#505050;
 --black-900:#505050;
 --orange-050:#371b02;
 --orange-100:#371b02;
 --orange-200:#42250b;
 --orange-300:#42250b;
 --orange-400:#522c05;
 --orange-500:#522c05;
 --orange-600:#693806;
 --orange-700:#693806;
 --orange-800:#793e03;
 --orange-900:#793e03;
 --blue-050:#00254a;
 --blue-100:#00254a;
 --blue-200:#0b2d4e;
 --blue-300:#0b2d4e;
 --blue-400:#183856;
 --blue-500:#183856;
 --blue-600:#0f3450;
 --blue-700:#0f3450;
 --blue-800:#173d5a;
 --blue-900:#173d5a;
 --powder-050:#0a263a;
 --powder-100:#0a263a;
 --powder-200:#102c41;
 --powder-300:#102c41;
 --powder-400:#193245;
 --powder-500:#193245;
 --powder-600:#1e384c;
 --powder-700:#1e384c;
 --powder-800:#233c50;
 --powder-900:#233c50;
 --green-025:#052811;
 --green-050:#0a3017;
 --green-100:#0a3017;
 --green-200:#0e361c;
 --green-300:#0e361c;
 --green-400:#133e22;
 --green-500:#133e22;
 --green-600:#194729;
 --green-700:#194729;
 --green-800:#215634;
 --green-900:#215634;
 --yellow-050:#382d01;
 --yellow-100:#382d01;
 --yellow-200:#403404;
 --yellow-300:#403404;
 --yellow-400:#4b3d08;
 --yellow-500:#4b3d08;
 --yellow-600:#59490d;
 --yellow-700:#59490d;
 --yellow-800:#705c14;
 --yellow-900:#705c14;
 --red-050:#340101;
 --red-100:#340101;
 --red-200:#390404;
 --red-300:#390404;
 --red-400:#420a0a;
 --red-500:#420a0a;
 --red-600:#4a1010;
 --red-700:#4a1010;
 --red-800:#541717;
 --red-900:#541717;
 --gold:#816700;
 --gold-lighter:#ffd652;
 --gold-darker:#725600;
 --silver:#71787f;
 --silver-lighter:#a8a8a8;
 --silver-darker:#5a5c5f;
 --bronze:#926742;
 --bronze-lighter:#cba888;
 --bronze-darker:#5b4430
}
body.theme-ultradark::after {
    content: '';
    position: fixed;
    display: block;
    border-radius: 100%;
    top: calc(var(--cursorY) - 100px);
    left: calc(var(--cursorX) - 100px);
    background-color: transparent;
    width: 200px;
    height: 200px;
    backdrop-filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='flashlight'%3E%3CfeFlood result='floodFill' x='0' y='0' width='200' height='200' flood-color='white' flood-opacity='1' /%3E%3CfeBlend in='floodFill' in2='SourceGraphic' mode='overlay' /%3E%3C/filter%3E%3C/svg%3E#flashlight") brightness(500%) saturate(0%);
    pointer-events: none;
    z-index: 9999999999999;
}
body.theme-ultradark img:not(.ignore-filter), .site-header{
 filter:brightness(.25)
}
body.theme-ultradark .top-bar .-logo .-img {
 filter:invert(.5) brightness(.5)
}
:root {
 --cursorX:50vw;
 --cursorY:50vh
}
`;
    $("<style></style>").text(styles).appendTo("head");
    $("body").addClass("theme-ultradark");
    document.addEventListener('mousemove', e => {
        window.requestAnimationFrame(() => {
            const X = e.clientX;
            const Y = e.clientY;

            document.documentElement.style.setProperty('--cursorX', X + 'px');
            document.documentElement.style.setProperty('--cursorY', Y + 'px');
        });
    });
})(window.jQuery,window.StackExchange);
