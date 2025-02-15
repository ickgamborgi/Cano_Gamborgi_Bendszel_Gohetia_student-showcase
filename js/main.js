console.log("Javascript file is linked.");
gsap.registerPlugin(ScrollTrigger);

// Video Player

const player = new Plyr("#capstoneVideo");

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

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = navToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    navMenu.classList.remove("show-menu");
  }
});

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

  // Check if the scroll position is greater than or equal to 50
  if (window.scrollY >= 50) {
    header.classList.add("shadow-header");
  } else {
    header.classList.remove("shadow-header");
  }
};
window.addEventListener("scroll", shadowHeader);

// ADD SHOW SCROLL UP LOGIC
const scrollUp = () => {
  const scrollUp = document.querySelector("#scroll-up");

  // Check if the scroll position is greater than or equal to 350
  if (window.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

// Intro video Scroll

const canvasMobile = document.querySelector("#explode-view-mobile");
const canvasDesktop = document.querySelector("#explode-view-desktop");
const contextMobile = canvasMobile.getContext("2d");
const contextDesktop = canvasDesktop.getContext("2d");

canvasMobile.width = 1080;
canvasMobile.height = 1920;
canvasDesktop.width = 1920;
canvasDesktop.height = 1080;

const frameCountMobile = 200;
const frameCountDesktop = 200;

const imagesMobile = [];
const imagesDesktop = [];

for (let i = 0; i < frameCountMobile; i++) {
  const imgMobile = new Image();
  imgMobile.src = `images/intro_mobile_seq/intro_mobile${(i + 1)
    .toString()
    .padStart(3, "0")}.png`;
  imagesMobile.push(imgMobile);
}

for (let i = 0; i < frameCountDesktop; i++) {
  const imgDesktop = new Image();
  imgDesktop.src = `images/intro_desktop_seq/intro_desktop${(i + 1)
    .toString()
    .padStart(3, "0")}.png`;
  imagesDesktop.push(imgDesktop);
}

const introVidMobile = {
  frame: 0,
};

const introVidDesktop = {
  frame: 0,
};

gsap.to(introVidMobile, {
  frame: frameCountMobile - 1,
  snap: "frame",
  scrollTrigger: {
    trigger: "#explode-view-mobile",
    pin: true,
    scrub: 2,
    start: "top top",
  },
  onUpdate: renderMobile,
});

gsap.to(introVidDesktop, {
  frame: frameCountDesktop - 1,
  snap: "frame",
  scrollTrigger: {
    trigger: "#explode-view-desktop",
    pin: true,
    scrub: 2,
    start: "top top",
  },
  onUpdate: renderDesktop,
});

imagesMobile[0].addEventListener("load", renderMobile);
imagesDesktop[0].addEventListener("load", renderDesktop);

function renderMobile() {
  contextMobile.clearRect(0, 0, canvasMobile.width, canvasMobile.height);
  contextMobile.drawImage(imagesMobile[introVidMobile.frame], 0, 0);
}

function renderDesktop() {
  contextDesktop.clearRect(0, 0, canvasDesktop.width, canvasDesktop.height);
  contextDesktop.drawImage(imagesDesktop[introVidDesktop.frame], 0, 0);
}

//Adding animation for intro text

gsap.registerPlugin(ScrollTrigger);

gsap.from(".introtext1", {
  scrollTrigger: {
    trigger: ".introtext1",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".introtext2", {
  scrollTrigger: {
    trigger: ".introtext1",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

//Adding animation for Project section
gsap.from(".video-player", {
  scrollTrigger: {
    trigger: ".video-player",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".capstone-project-info", {
  scrollTrigger: {
    trigger: ".capstone-project-info",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

//Adding animation for Exhibit section
gsap.from(".pexhibits__container", {
  scrollTrigger: {
    trigger: ".pexhibits__container",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  opacity: 0,
  duration: 3,
  ease: "power2.out",
});

//Adding animation for Event information
gsap.from(".event-info", {
  scrollTrigger: {
    trigger: ".event-info",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".event-itinerary", {
  scrollTrigger: {
    trigger: ".event-itinerary",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

//Adding animation for IDP Program section
gsap.from(".program-hero", {
  scrollTrigger: {
    trigger: ".program-hero",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".program-info", {
  scrollTrigger: {
    trigger: ".program-info",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".program-img1", {
  scrollTrigger: {
    trigger: ".program-img1",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".program-img2", {
  scrollTrigger: {
    trigger: ".program-img2",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".program-img3", {
  scrollTrigger: {
    trigger: ".program-img3",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: 100,
  opacity: 0,
  duration: 3,
  ease: "power2.out",
});
gsap.from(".program-img4", {
  scrollTrigger: {
    trigger: ".program-img1",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: -100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".program-img5", {
  scrollTrigger: {
    trigger: ".program-img2",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});
gsap.from(".program-img6", {
  scrollTrigger: {
    trigger: ".program-img3",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".card-dev", {
  scrollTrigger: {
    trigger: ".card-dev",
    // toggleActions: "restart none restart none",
    toggleActions: "play none none none",
    once: true,
  },
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

//Adding animation for IDP Program section
gsap.from(".div-container", {
  scrollTrigger: {
    trigger: ".div-container",
  },
  scale: 0.9,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

//Adding animation for Testimonials
gsap.from(".testimonial-con", {
  scrollTrigger: {
    trigger: ".testimonials-sec",
  },
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".testimonial-bio", {
  scrollTrigger: {
    trigger: ".testimonials-sec",
  },
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.out",
});

//This is for the image slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideWrapper = document.querySelector(".slide-wrapper");
const autoplayInterval = 10000;
let autoplayTimer;

function startAutoplay() {
  autoplayTimer = setInterval(() => {
    showSlide(currentIndex + 1);
  }, autoplayInterval);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

function showSlide(index) {
  currentIndex = (index + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;
  slideWrapper.style.transform = `translateX(${offset}%)`;
}

document.querySelector("#prev-btn").addEventListener("click", () => {
  stopAutoplay();
  showSlide(currentIndex - 1);
  setTimeout(startAutoplay, autoplayInterval);
});

document.querySelector("#next-btn").addEventListener("click", () => {
  stopAutoplay();
  showSlide(currentIndex + 1);
  setTimeout(startAutoplay, autoplayInterval);
});

startAutoplay();

//This is for the testimonials
let testimonialIndex = 0;
const tesSlides = document.querySelectorAll(".testimonial-slide");

function tesShowSlide(index) {
  tesSlides.forEach((slide, i) => {
    if (i === testimonialIndex) {
      slide.classList.remove("active"); // Remove active class from current slide
    }
  });

  testimonialIndex = (index + tesSlides.length) % tesSlides.length;

  const newSlide = tesSlides[testimonialIndex];
  newSlide.classList.add("active"); // Add active class to fade in
}

tesShowSlide(testimonialIndex);

document.querySelector("#test-next-btn").addEventListener("click", () => {
  tesShowSlide(testimonialIndex + 1);
});

document.querySelector("#test-prev-btn").addEventListener("click", () => {
  tesShowSlide(testimonialIndex - 1);
});

//Students Portfolio Showcase
const students = [
  {
    name: "Abdul Rahman",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Adama Diop",
    position: "Graphic Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Akira Nakamura",
    position: "Web Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Aliya Khatun",
    position: "Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: "MOTION",
  },
  {
    name: "Ava Smith",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Carlos Cano",
    position: "Web and Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV", "MOTION"],
  },
  {
    name: "Chin Ho Lee",
    position: "Web Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Diego Rodriguez",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: "DEV",
  },
  {
    name: "Elena Costa",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Fatima Bah",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: "DEV",
  },
  {
    name: "Felipe Oliveira",
    position: "3D Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Gabriela Souza",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Hanako Yamamoto",
    position: "Front-End Developer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Henrique Gamborgi",
    position: "Branding and UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION", "DEV"],
  },
  {
    name: "Idris Hassan",
    position: "Web and Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Ifeoluwa Adebayo",
    position: "Graphic Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Imaan Farah",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Ivan Volkov",
    position: "Product Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Jiro Takahashi",
    position: "Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: "MOTION",
  },
  {
    name: "Kofi Mensah",
    position: "UX and 3D Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Kristina Bendszel",
    position: "UX and Web Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Lars Johansen",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Liam Thompson",
    position: "Graphic Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Ling Chen",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Mai Nguyen",
    position: "Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Mei Wong",
    position: "Web and Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DEV", "MOTION"],
  },
  {
    name: "Nikita Ivanov",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Nina Petrov",
    position: "Graphic Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Oluwaseun Okoye",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Priya Sharma",
    position: "Front-end Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Ravi Kumar",
    position: "Animator/Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: "MOTION",
  },
  {
    name: "Sara Mohamed",
    position: "Front-end Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Sheldon Gohetia",
    position: "Front-End Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Siyabonga Ndlovu",
    position: "Web Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
  {
    name: "Tariq Malik",
    position: "Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: "MOTION",
  },
  {
    name: "Thomas Müller",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Vanessa Martins",
    position: "Graphic Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Wang Li",
    position: "Motion Designer",
    portfolio: "https://www.cofolios.com/",
    category: "MOTION",
  },
  {
    name: "Yasmin Hossain",
    position: "Product Designer",
    portfolio: "https://www.cofolios.com/",
    category: "DESIGN",
  },
  {
    name: "Youssef Abdel",
    position: "Web Developer",
    portfolio: "https://www.cofolios.com/",
    category: "DEV",
  },
  {
    name: "Zhang Wei",
    position: "Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "MOTION", "DEV"],
  },
  {
    name: "Zoey Jones",
    position: "UI/UX Designer",
    portfolio: "https://www.cofolios.com/",
    category: ["DESIGN", "DEV"],
  },
];

// Create variable to Select the container div and filter buttons

const container = document.querySelector(".div-container");
const filterButtons = document.querySelectorAll(".card__button_filter");

// Function to shuffle the students array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = parseInt(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayStudents(filter) {
  container.innerHTML = "";

  // Filter the students array
  let filteredStudents;

  if (filter === "ALL") {
    // filteredStudents = students;
    filteredStudents = shuffleArray([...students]);
  } else {
    // filteredStudents = students.filter((student) =>
    //   student.category.includes(filter)
    // );
    filteredStudents = shuffleArray(
      students.filter((student) => student.category.includes(filter))
    );
  }

  //Create a Loop through the filtered array and create elements
  filteredStudents.forEach((student) => {
    const studentDiv = document.createElement("div");
    studentDiv.classList.add("student");

    studentDiv.innerHTML = `
          <h3>${student.name}</h3>
          <p>${student.position}</p>
          <a href="${student.portfolio}" target="_blank">View Portfolio</a>
      `;
    container.appendChild(studentDiv);
  });
}

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    filterButtons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    //Display students based on selected category
    displayStudents(filter);
  });
});

// Display all students by default
displayStudents("ALL");
