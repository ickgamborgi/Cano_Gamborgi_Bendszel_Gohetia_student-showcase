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

// ADD SHOW SCROLL UP LOGIC
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

gsap.to(".section__ititle, .section__ctitle, .section__etitle", {
  scrollTrigger: ".box",
  x: 20,
  delay: 0.3,
});

// This is for the image slider
const slider = document.querySelector("#image-slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
let slideWidth = slider.clientWidth;
let currentIndex = 0;
//By using a negative value, the slides are translated to the left
function showSlide(index) {
  const newTransformValue = -index * slideWidth + "px";
  //The -index is used to calculate the position of the slide in the opposite direction.
  // For example, if index is 1, then -index becomes -1, which means moving one slide width to the left.
  // If index is 2, then -index becomes -2, which means moving two slide widths to the left.
  console.log(newTransformValue);
  slider.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide() {
  console.log(currentIndex);
  currentIndex++;
  //if count is greater than or equal to number of slides restart
  if (currentIndex >= slider.children.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  // if count is less than 0 go to last slide
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1;
  }
  showSlide(currentIndex);
}

function updateSlideWidth() {
  slideWidth = slider.clientWidth;
  showSlide(currentIndex); // Adjust the position of the current slide on resize
}

// Attach click event handlers to buttons using event listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("resize", updateSlideWidth);

// Call updateSlideWidth initially to set the correct initial slide width
updateSlideWidth();
