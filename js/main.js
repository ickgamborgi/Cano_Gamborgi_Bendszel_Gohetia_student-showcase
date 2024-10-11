console.log("Javascript file is linked.");

// Video Player

const player = new Plyr("video");

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

//Students Portfolio Showcase
const students = [
  {
    name: "Carlos",
    position: "Web Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Graphic Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Web Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "Motion Designer",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "UI/UX Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Animator/Motion Designer",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "Backend Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "UI/UX Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Web Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "Motion Designer",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "UI/UX Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Web Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "Backend Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "Front-end Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "3D Developer",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "Visual Designer",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "Graphics Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
  {
    name: "Carlos",
    position: "Motion Graphics",
    portfolio: "https://carlos.com",
    category: "MOTION",
  },
  {
    name: "Carlos",
    position: "Web Developer",
    portfolio: "https://carlos.com",
    category: "DEV",
  },
  {
    name: "Carlos",
    position: "UI/UX Designer",
    portfolio: "https://carlos.com",
    category: "DESIGN",
  },
];

// Create variable to Select the container div and filter buttons
const container = document.querySelector(".div-container");
const filterButtons = document.querySelectorAll(".card__button_filter");

// Create Function to display students based on category
function displayStudents(filter) {
  container.innerHTML = "";

  // Filter the students array
  let filteredStudents;

  if (filter === "ALL") {
    filteredStudents = students;
  } else {
    filteredStudents = students.filter(
      (student) => student.category === filter
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
    // Prevent the default anchor link behavior
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
