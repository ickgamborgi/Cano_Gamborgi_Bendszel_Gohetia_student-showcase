console.log("Javascript file is linked.");

// SHOW MENU
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// HIDE MENU
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.querySelector("#nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SHADOW HEADER
const shadowHeader = () => {
  const header = document.querySelector("#header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

// ADD SWIPER LOGIC
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

const swiperpexhibits = new Swiper(".pexhibits__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

// ADD SHOW SCROLL UP LOGIC
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// ADD SCROLL REVEAL ANIMATION LOGIC
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  reset: true,
});
sr.reveal(`.intro__data, .pexhibits__container, .card__container`);
sr.reveal(`.event__data, .event__images`, { delay: 600, scale: 0.5 });
sr.reveal(`.event__leaf`, { delay: 1200 });
sr.reveal(`.projects__img, .kristina_card, .carlos_card, .player`, {
  origin: "left",
});
sr.reveal(`.projects__list, .henry_card, .sheldon_card, .contact__data`, {
  origin: "right",
});
sr.reveal(`.portfolios__card`, { interval: 100 });

// ADD PARALLAX EFFECTS SCROLL LOGIC
let text = document.querySelector("#text");
let leaf = document.querySelector("#leaf");
let hill1 = document.querySelector("#hill1");
let hill4 = document.querySelector("#hill4");
let hill5 = document.querySelector("#hill5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 0.8 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 0.2 + "px";
});
