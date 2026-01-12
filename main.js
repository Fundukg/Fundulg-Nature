"use strict";

const burgers = document.querySelectorAll(".header_burger");
const mobileMenu = document.querySelector(".mobile_menu");
const overlayMenu = document.querySelector(".overlay_menu");
const navLinks = document.querySelectorAll(".link");

function closeMenu() {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("no_scroll");
  overlayMenu.classList.remove("active");
}

burgers.forEach((burger) => {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("no_scroll");
    overlayMenu.classList.toggle("active");
  });
});

overlayMenu.addEventListener("click", () => {
  closeMenu();
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
