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
    name: "Akamjot Singh",
    position: "Graphic Designer and Developer",
    portfolio: "https://akamjotsingh.ca/",
    category: ["DESIGN", "FRONTEND", "BACKEND"],
  },
  {
    name: "Ali El Maniary",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://alielmaniary.com/",
    category: ["DESIGN", "MOTION", "FRONTEND"],
  },
  {
    name: "Alisher Yantizhanov",
    position: "Graphic Designer and Front-End Developer",
    portfolio: "https://alishdesign.com/",
    category: ["DESIGN", "FRONTEND"],
  },
  {
    name: "Amari Buck",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://amaribuck.com/",
    category: ["DESIGN", "MOTION", "FRONTEND"],
  },
  {
    name: "Music Apapat J.",
    position: "Graphic, Motion Designer and PM",
    portfolio: "https://musicjun.com/",
    category: ["DESIGN", "MOTION", "PM"],
  },
  {
    name: "Bernardo Jr. Macapagal",
    position: "Graphic and Motion Designer, PM and Front-End Developer",
    portfolio: "https://bmjrdesigns.com/",
    category: ["DESIGN", "MOTION", "PM", "FRONTEND"],
  },
  {
    name: "Bozhi Zhang",
    position: "Graphic and Motion Designer",
    portfolio: "https://owenz724.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Carlos C. Menendez",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://carloscano.ca/",
    category: ["DESIGN", "MOTION", "FRONTEND"],
  },
  {
    name: "Cassidy Pelacek",
    position: "Graphic Designer and Developer",
    portfolio: "https://cassidentity.ca/",
    category: ["DESIGN", "BACKEND", "FRONTEND"],
  },
  {
    name: "Diego Rodriguez Ramos",
    position: "Motion Designer and Front-End Developer",
    portfolio: "https://diegoxr.com/",
    category: ["MOTION", "FRONTEND"],
  },
  {
    name: "Dina Bondarchuk",
    position: "Graphic and Motion Designer",
    portfolio: "https://dinabond.com/",
    category: ["MOTION", "DESIGN"],
  },
  {
    name: "Divij Saddul",
    position: "Graphic and Motion Designer, PM",
    portfolio: "https://divijsdesign.ca/",
    category: ["MOTION", "DESIGN", "PM"],
  },
  {
    name: "Dixie Marie Laput",
    position: "Front-End and Back-End Developer",
    portfolio: "https://dixiemarielaput.ca/",
    category: ["BACKEND", "FRONTEND"],
  },
  {
    name: "Emmanuel Opadele",
    position: "Graphic and Motion Designer, PM and Developer",
    portfolio: "https://emmanuelopadele.com/",
    category: ["BACKEND", "FRONTEND", "DESIGN", "MOTION", "PM"],
  },
  {
    name: "Faizan Khan",
    position: "Graphic and Motion Designer",
    portfolio: "https://faizankhan.net/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Henrique Gamborgi",
    position: "Graphic Designer, PM and Front-End Developer",
    portfolio: "https://henriquegamborgi.com/",
    category: ["DESIGN", "PM", "FRONTEND"],
  },
  {
    name: "Het Shah",
    position: "Graphic and Motion Designer",
    portfolio: "https://shahhet.ca/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Isaac Bilyea",
    position: "Front-End and Back-End Developer",
    portfolio: "https://isaacbilyea.com/",
    category: ["FRONTEND", "BACKEND"],
  },
  {
    name: "Ishan Mehra",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://ishanmehra.ca",
    category: ["FRONTEND", "DESIGN", "MOTION"],
  },
  {
    name: "Jashan Kumar",
    position: "PM, Front-End and Back-End Developer",
    portfolio: "https://www.jkumar.dev/",
    category: ["FRONTEND", "BACKEND", "PM"],
  },
  {
    name: "Jenifer Q. Evangelista",
    position: "Graphic Designer and Developer",
    portfolio: "https://jeniferquelali.com/",
    category: ["FRONTEND", "BACKEND", "DESIGN"],
  },
  {
    name: "Joyal Gregory",
    position: "Graphic Designer",
    portfolio: "https://joyalgregory.ca/",
    category: "DESIGN",
  },
  {
    name: "Justin Rian Reyes",
    position: "Graphic and Motion Designer",
    portfolio: "https://jreyesmotion.com/",
    category: ["MOTION", "DESIGN"],
  },
  {
    name: "Katrina Macadams",
    position: "Front-End Developer and Motion Designer",
    portfolio: "https://katrinamacadams.ca",
    category: ["MOTION", "FRONTEND"],
  },
  {
    name: "Keith Lie",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://keithliecreative.com/",
    category: ["MOTION", "FRONTEND", "DESIGN"],
  },
  {
    name: "King Yin Sham",
    position: "Graphic and Motion Designer, PM",
    portfolio: "https://www.sky-connie.com/",
    category: ["MOTION", "DESIGN", "PM"],
  },
  {
    name: "Kirk Caspe",
    position: "Graphic and Motion Designer",
    portfolio: "https://kirkcaspe.ca/",
    category: ["MOTION", "DESIGN"],
  },
  {
    name: "Kyuri Park",
    position: "Graphic Designer, PM and Front-End Developer",
    portfolio: "https://kyurihailiepark.ca/",
    category: ["PM", "FRONTEND", "DESIGN"],
  },
  {
    name: "Lav Patel",
    position: "Back-End and Front-End Developer",
    portfolio: "https://lavpatel.ca/",
    category: ["FRONTEND", "BACKEND"],
  },
  {
    name: "Loi Pan Sit",
    position: "Graphic and Motion Designer",
    portfolio: "https://www.lpsdesigns.com/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Lok Ting Tina Yam",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://www.tinaylt.com/",
    category: ["DESIGN", "MOTION", "FRONTEND"],
  },
  {
    name: "Meghan Damen",
    position: "Graphic and Motion Designer",
    portfolio: "https://maggiewest.ca/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Milana Gabbassova",
    position: "Front-End Developer and Back-End Developer",
    portfolio: "https://milanaweb.dev/",
    category: ["BACKEND", "FRONTEND"],
  },
  {
    name: "Napas Polchai",
    position: "Graphic Designer",
    portfolio: "https://napaspolchai.com/",
    category: "DESIGN",
  },
  {
    name: "Natchanon Mahaittidon",
    position: "Front-End Developer",
    portfolio: "https://nnmhd.com/",
    category: "FRONTEND",
  },
  {
    name: "Nikolai Meijer",
    position: "Graphic and Motion Designer",
    portfolio: "https://designedbynik.ca/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Osarieme Ogbeide",
    position: "Graphic and Motion Designer",
    portfolio: "https://www.onoh.ca/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Qiao-Yi Chu",
    position: "Graphic Designer",
    portfolio: "https://joychudesign.com/",
    category: "DESIGN",
  },
  {
    name: "Rebin Reji Vazhavilayil",
    position: "Graphic Designer",
    portfolio: "https://rebinreji.ca/",
    category: "DESIGN",
  },
  {
    name: "Rodrigo N. do Nascimento",
    position: "Graphic Designer and PM",
    portfolio: "https://www.rodrinascimento.ca/",
    category: ["DESIGN", "PM"],
  },
  {
    name: "Sashoye Maxwell",
    position: "Graphic Designer and PM",
    portfolio: "https://sashoyemaxwell.ca/index.php",
    category: ["DESIGN", "PM"],
  },
  {
    name: "Shauraya Salwan",
    position: "Graphic and Motion Designer",
    portfolio: "https://shaurayasalwan.ca/",
    category: ["DESIGN", "MOTION"],
  },
  {
    name: "Sheldon Gohetia",
    position: "Graphic Designer and Front-End Developer",
    portfolio: "https://sheldongohetia.com/",
    category: ["DESIGN", "FRONTEND"],
  },
  {
    name: "Shon Sojan",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://www.shonsojan.com/",
    category: ["DESIGN", "FRONTEND", "MOTION"],
  },
  {
    name: "Tanya Mae Huertas",
    position: "Graphic and Motion Designer, Front-End Developer",
    portfolio: "https://heytanyadesigns.com/",
    category: ["DESIGN", "FRONTEND", "MOTION"],
  },
  {
    name: "Thi Thanh Thuong Nguyen",
    position: "Graphic Designer and Developer",
    portfolio: "https://annanguyent.com/",
    category: ["DESIGN", "FRONTEND", "BACKEND"],
  },
  {
    name: "Timothy Bryle Flores",
    position: "PM, Graphic and Motion Designer",
    portfolio: "https://bryleflores.com/",
    category: ["DESIGN", "MOTION", "PM"],
  },
  {
    name: "Wing Lam Stephanie Chan",
    position: "Front-End and Back-End Developer",
    portfolio: "https://stephanieportfolio.com/",
    category: ["FRONTEND", "BACKEND"],
  },
  {
    name: "Wisdom Okutepa",
    position: "Front-End and Back-End Developer",
    portfolio: "https://widomdev.com/",
    category: ["FRONTEND", "BACKEND"],
  },
  {
    name: "Yi Ting Lai",
    position: "Graphic Designer and Front-End Developer",
    portfolio: "https://elainelai.com/",
    category: ["FRONTEND", "DESIGN"],
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
