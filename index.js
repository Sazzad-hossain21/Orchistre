"use strict";

const navOpener = document.querySelector(".nav-opener");
const mobileNav = document.querySelector(".mobile-navigation");

let navOn = false;
navOpener.addEventListener("click", function() {
    navOn = !navOn;
    mobileNav.classList.toggle("on");
    if(navOn) navOpener.querySelector("img").setAttribute("src", "images/times-circle-solid.svg");
    else navOpener.querySelector("img").setAttribute("src", "images/bars-solid.svg");
})