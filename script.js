// ==========================
// 1. NAVBAR & MENU LOGIC
// ==========================
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

const header = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Close menu when clicking a link (Mobile UX)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    // FIX: If the clicked link is the "About" dropdown, DO NOT close the menu
    if (link.parentElement.classList.contains('dropdown')) {
      return; 
    }

    const navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});

// Mobile Dropdown Toggle
const dropdownLink = document.querySelector('.dropdown > a');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownLink && dropdownMenu) {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); 
      dropdownMenu.classList.toggle('show-mobile');
    }
  });
}

// ==========================
// 2. HOME PAGE SLIDESHOW
// ==========================
const slideshow = document.getElementById("slideshow");
if (slideshow) {
  const slides = slideshow.querySelectorAll("img");
  let current = 0;

  function slideNext() {
    current = (current + 1) % slides.length;
    slideshow.style.transform = `translateX(-${current * 100}%)`;
  }
  setInterval(slideNext, 5000);
}

// ==========================
// 3. LOCAL SPOTS MAP LOGIC
// ==========================
function changeMap(place, element) {
  const mapFrame = document.getElementById("gmap");
  const infoBox = document.getElementById("info-box");

  if (!mapFrame || !infoBox) return;

  // Highlight Active Button
  const allLinks = document.querySelectorAll('.coffee-menu li a');
  allLinks.forEach(link => link.classList.remove('active-spot'));

  if (element) {
    element.classList.add('active-spot');
  }

  let mapSrc = "";
  let info = "";

  // Define Data
  if (place === "Beanhi") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.0772792907933!2d121.09342369368531!3d14.621809703344411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b937e7e85f8d%3A0x428845390fc59fc8!2sBeanhi%20Coffee%20House!5e0!3m2!1sen!2sph!4v1757325016872!5m2!1sen!2sph";
    info = `
      <h2>Beanhi</h2>
      <img src="foodspot/beanhi.png" alt="Beanhi" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 83 M. H. del Pilar St, Marikina</p>
      <p><strong>Price Range:</strong> ₱70 - ₱125+</p>
    `;
  } else if (place === "Bread") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9400574144815!2d121.1067260747813!3d14.659343185833995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9d3bb77ec2d%3A0xfd58898bab836a06!2sBread%20Head%20Cafe!5e0!3m2!1sen!2sph!4v1757325138491!5m2!1sen!2sph"; 
    info = `
      <h2>Bread Head Cafe</h2>
      <img src="foodspot/breadhead.jpg" alt="Bread Head" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 9 Lakandula, Marikina</p>
      <p><strong>Price Range:</strong> ₱95 - ₱180+</p>
    `;
  } else if (place === "Dogud") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.6943679433343!2d121.11075134124285!3d14.6594277430547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90fc50fd489%3A0x635765ebea3d6c98!2sDo%20G%C3%BCd%20Cafe!5e0!3m2!1sen!2sph!4v1757340327363!5m2!1sen!2sph";
    info = `
      <h2>Do Güd Cafe</h2>
      <img src="foodspot/dugud.jpg" alt="Do Güd Cafe" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 9 E. Rodriguez St, Corner Lakandula, Marikina</p>
      <p><strong>Price Range:</strong> ₱105 - ₱200+</p>
    `;
  } else if (place === "Matcha") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b94e1350c0cd%3A0xc148cb3e0049f653!2sMatcha%20Place!5e0!3m2!1sen!2sph!4v1757325693169!5m2!1sen!2sph";
    info = `
      <h2>Matcha Place</h2>
      <img src="foodspot/matchap.jpg" alt="Matcha Place" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 31 C.M. Recto St, Marikina</p>
      <p><strong>Price Range:</strong> ₱49 - ₱69+</p>
    `;
  } else if (place === "Cocol") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9666645fc5f%3A0xdd2c39d0b0e954b6!2sCocol%20Coffee%20%26%20Tea%20-%20Parang%20Branch!5e0!3m2!1sen!2sph!4v1757325757793!5m2!1sen!2sph";
    info = `
      <h2>Cocol Coffee & Tea</h2>
      <img src="foodspot/cocol.png" alt="Cocol Coffee & Tea" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 18 Parnaso Street, Corner P. Paterno St, Marikina</p>
      <p><strong>Price Range:</strong> ₱100 - ₱200+</p>
    `;
  } else if (place === "Duplex") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.928057809585!2d121.10803907523173!3d14.66002408583343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9912199739d%3A0x8d484652af20f1ca!2sDupleXpresso!5e0!3m2!1sen!2sph!4v1757341623663!5m2!1sen!2sph";
    info = `
      <h2>DupleXpresso</h2>
      <img src="foodspot/duplex.jpg" alt="DupleXpresso" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
      <p><strong>Address:</strong> 14 E Rodriguez, Marikina</p>
      <p><strong>Price Range:</strong> ₱90-200+</p>
    `;
  } else if (place === "Benito") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1048867100061!2d121.099852!3d14.6321099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9be01931167%3A0x1d819863d42ceca8!2sKape%20Benito%20Community%20Cafe!5e0!3m2!1sen!2sph!4v1757341732131!5m2!1sen!2sph";
    info = `
      <h2>Kape Benito Community Cafe</h2>
      <img src="foodspot/benito.jpg" alt="Kape Benito Community Cafe" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
      <p><strong>Address:</strong> 48 Sparrow, Marikina</p>
      <p><strong>Price Range:</strong> ₱200-400+</p>
    `;
  } else if (place === "Mama") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1175749987641!2d121.09669709999999!3d14.629224400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9924d082a07%3A0xca823e743bb2789e!2sMama%20Chits%20Coffee%20House!5e0!3m2!1sen!2sph!4v1757341804767!5m2!1sen!2sph";
    info = `
      <h2>Mama Chits Coffee House</h2>
      <img src="foodspot/mama.jpg" alt="Mama Chits Coffee House" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
      <p><strong>Address:</strong> 278 J. P. Rizal St, Marikina</p>
      <p><strong>Price Range:</strong> ₱100-200+</p>
    `;
  } else if (place === "1975") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.8802123015334!2d121.09684934617175!3d14.622388006060849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90e022620cf%3A0x4f64ea72ab877188!2s1975%20Old-Fashioned%20Burgers!5e0!3m2!1sen!2sph!4v1757341702835!5m2!1sen!2sph";
    info = `
      <h2>1975 Old-Fashioned Burgers</h2>
      <img src="foodspot/1975.jpg" alt="1975 Old-Fashioned Burgers" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
      <p><strong>Address:</strong> 26, Yamson, Marikina</p>
      <p><strong>Price Range:</strong> ₱200-400+</p>
    `;
  } else if (place === "Sally") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.5848112306624!2d121.09588138263777!3d14.623569957716306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b839be28bcd1%3A0x2aa90e3b62eaccf9!2sSally's%20Gotohan!5e0!3m2!1sen!2sph!4v1759759326408!5m2!1sen!2sph";
    info = `
      <h2>Sally's Gotohan</h2>
      <img src="foodspot/sally.jpg" alt="Sally's Gotohan" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
      <p><strong>Address:</strong> 27 Diego Silang, Marikina</p>
      <p><strong>Price Range:</strong> ₱100-200+</p>
    `;
  }

  // Update DOM & Trigger Animation
  mapFrame.src = mapSrc;
  infoBox.innerHTML = info;

  infoBox.classList.remove("fade-in-content");
  void infoBox.offsetWidth; 
  infoBox.classList.add("fade-in-content");

  // Mobile Auto-Scroll
  if (window.innerWidth <= 768) {
    document.getElementById("map-info-container").scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

// Automatically select first item on load
document.addEventListener("DOMContentLoaded", () => {
  const firstLink = document.querySelector('.coffee-menu li a');
  if (firstLink) {
    firstLink.click(); 
  }
});

// ==========================
// 4. SCROLL ANIMATION OBSERVER
// ==========================
const observerOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, observerOptions);

document.querySelectorAll('.place').forEach((el) => {
  observer.observe(el);
});

// ==========================
// 5. BARANGAY MODAL LOGIC
// ==========================
const barangayModal = document.getElementById("barangayModal");
const closeButton = document.querySelector(".modal .close-button");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalMapLink = document.getElementById("modalMapLink");

function openBarangayModal(title, imageSrc, description, mapLink) {
  modalTitle.textContent = title;
  modalImage.src = imageSrc;
  modalImage.alt = title;
  modalDescription.textContent = description;
  modalMapLink.href = mapLink;
  barangayModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeBarangayModal() {
  barangayModal.style.display = "none";
  document.body.style.overflow = "";
}

document.querySelectorAll(".open-barangay-modal").forEach(card => {
  card.addEventListener("click", function(event) {
    event.preventDefault();
    openBarangayModal(
      this.dataset.title,
      this.dataset.image,
      this.dataset.description,
      this.dataset.mapLink
    );
  });
});

if (closeButton) {
  closeButton.addEventListener("click", closeBarangayModal);
}

window.addEventListener("click", function(event) {
  if (event.target == barangayModal) {
    closeBarangayModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && barangayModal.style.display === "block") {
    closeBarangayModal();
  }
});

// ==========================
// 7. ACTIVE LINK HIGHLIGHTER
// ==========================
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add('active');
  }
});

// ==========================
// 8. PRELOADER
// ==========================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});