function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

// Navbar scroll effect
const header = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});

const slideshow = document.getElementById("slideshow");
const slides = slideshow.querySelectorAll("img");
let current = 0;

function slideNext() {
  current = (current + 1) % slides.length;
  slideshow.style.transform = `translateX(-${current * 100}%)`;
}

// Auto slide every 5s
setInterval(slideNext, 5000);

