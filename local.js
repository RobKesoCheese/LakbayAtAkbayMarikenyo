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

function changeMap(place) {
    let mapSrc = "";
    let fmapSrc = "";

    if (place === "Beanhi") {
      mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.0772792907933!2d121.09342369368531!3d14.621809703344411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b937e7e85f8d%3A0x428845390fc59fc8!2sBeanhi%20Coffee%20House!5e0!3m2!1sen!2sph!4v1757325016872!5m2!1sen!2sph";
    } else if (place === "Bread") {
      mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.9400574144815!2d121.1067260747813!3d14.659343185833995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9d3bb77ec2d%3A0xfd58898bab836a06!2sBread%20Head%20Cafe!5e0!3m2!1sen!2sph!4v1757325138491!5m2!1sen!2sph"; 
    } else if (place === "Dogud") {
      mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.12731060045!2d121.10890110587283!3d14.659990139175477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90fc50fd489%3A0x635765ebea3d6c98!2sDo%20G%C3%BCd%20Cafe!5e0!3m2!1sen!2sph!4v1757325467610!5m2!1sen!2sph";
    } else if (place === "Matcha") {
      mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b94e1350c0cd%3A0xc148cb3e0049f653!2sMatcha%20Place!5e0!3m2!1sen!2sph!4v1757325693169!5m2!1sen!2sph";
    } else if (place === "Cocol") {
      mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9666645fc5f%3A0xdd2c39d0b0e954b6!2sCocol%20Coffee%20%26%20Tea%20-%20Parang%20Branch!5e0!3m2!1sen!2sph!4v1757325757793!5m2!1sen!2sph";
    }

    document.getElementById("gmap").src = mapSrc;
    document.getElementById("fmap").src = fmapSrc;
  }

  function changeMap(place) {
  let mapSrc = "";
  let info = "";

  if (place === "Beanhi") {
    mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.0772792907933!2d121.09342369368531!3d14.621809703344411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b937e7e85f8d%3A0x428845390fc59fc8!2sBeanhi%20Coffee%20House!5e0!3m2!1sen!2sph!4v1757325016872!5m2!1sen!2sph"; // your beanhi embed link
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
      <img src="foodspot/breadhead.jpg" alt="Beanhi" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
      <p><strong>Address:</strong> 9 Lakandula, Marikina</p>
      <p><strong>Price Range:</strong> ₱95 - ₱180+</p>
    `;
  } else if (place === "Dogud") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1364.6943679433343!2d121.11075134124285!3d14.6594277430547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90fc50fd489%3A0x635765ebea3d6c98!2sDo%20G%C3%BCd%20Cafe!5e0!3m2!1sen!2sph!4v1757340327363!5m2!1sen!2sph";
  info = `
    <h2>Do Güd Cafe</h2>
    <img src="foodspot/dugud.jpg" alt="Do Güd Cafe" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
    <p><strong>Address:</strong> 9 E. Rodriguez St, Corner Lakandula, Marikina, 1708 Metro Manila</p>
    <p><strong>Price Range:</strong> ₱105 - ₱200+</p>
  `;
}
  
  else if (place === "Matcha") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b94e1350c0cd%3A0xc148cb3e0049f653!2sMatcha%20Place!5e0!3m2!1sen!2sph!4v1757325693169!5m2!1sen!2sph";
  info = `
    <h2>Matcha Place</h2>
    <img src="foodspot/matchap.jpg" alt="Matcha Place" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
    <p><strong>Address:</strong> 31 C.M. Recto St, Marikina, 1800 Metro Manila</p>
    <p><strong>Price Range:</strong> ₱49 - ₱69+</p>
  `;
}

else if (place === "Cocol") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.7848084428898!2d121.10807462955331!3d14.658852280658971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9666645fc5f%3A0xdd2c39d0b0e954b6!2sCocol%20Coffee%20%26%20Tea%20-%20Parang%20Branch!5e0!3m2!1sen!2sph!4v1757325757793!5m2!1sen!2sph";
  info = `
    <h2>Cocol Coffee & Tea</h2>
    <img src="foodspot/cocol.png" alt="Cocol Coffee & Tea" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px; margin-bottom: 20px;">
    <p><strong>Address:</strong> 18 Parnaso Street, Corner P. Paterno St, Marikina, 1809 Metro Manila</p>
    <p><strong>Price Range:</strong> ₱100 - ₱200+</p>
  `;
} else if (place === "Duplex") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.928057809585!2d121.10803907523173!3d14.66002408583343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9912199739d%3A0x8d484652af20f1ca!2sDupleXpresso!5e0!3m2!1sen!2sph!4v1757341623663!5m2!1sen!2sph";
  info = `
    <h2>DupleXpresso</h2>
    <img src="foodspot/duplex.jpg" alt="DupleXpresso" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
    <p><strong>Address:</strong> 14 E Rodriguez, Marikina, Metro Manila</p>
    <p><strong>Price Range:</strong> ₱90-200+</p>
  `;
}

else if (place === "Benito") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1048867100061!2d121.099852!3d14.6321099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9be01931167%3A0x1d819863d42ceca8!2sKape%20Benito%20Community%20Cafe!5e0!3m2!1sen!2sph!4v1757341732131!5m2!1sen!2sph";
  info = `
    <h2>Kape Benito Community Cafe</h2>
    <img src="foodspot/benito.jpg" alt="Kape Benito Community Cafe" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
    <p><strong>Address:</strong> 48 Sparrow, Marikina, Metro Manila</p>
    <p><strong>Price Range:</strong> ₱200-400+</p>
  `;
}

else if (place === "Mama") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1175749987641!2d121.09669709999999!3d14.629224400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9924d082a07%3A0xca823e743bb2789e!2sMama%20Chits%20Coffee%20House!5e0!3m2!1sen!2sph!4v1757341804767!5m2!1sen!2sph";
  info = `
    <h2>Mama Chits Coffee House</h2>
    <img src="foodspot/mama.jpg" alt="Mama Chits Coffee House" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
    <p><strong>Address:</strong> 278 J. P. Rizal St, Marikina, Metro Manila</p>
    <p><strong>Price Range:</strong> ₱100-200+</p>
  `;
}

else if (place === "1975") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.8802123015334!2d121.09684934617175!3d14.622388006060849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b90e022620cf%3A0x4f64ea72ab877188!2s1975%20Old-Fashioned%20Burgers!5e0!3m2!1sen!2sph!4v1757341702835!5m2!1sen!2sph";
  info = `
    <h2>1975 Old-Fashioned Burgers</h2>
    <img src="foodspot/1975.jpg" alt="1975 Old-Fashioned Burgers" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
    <p><strong>Address:</strong> 26, Yamson, Marikina, Metro Manila</p>
    <p><strong>Price Range:</strong> ₱200-400+</p>
  `;
}

else if (place === "Sally") {
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5604425063984!2d121.0983735!3d14.624098099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b839be28bcd1%3A0x2aa90e3b62eaccf9!2sSally&#39;s%20Gotohan!5e0!3m2!1sen!2sph!4v1757345760386!5m2!1sen!2sph";
  info = `
    <h2>Sally's Gotohan</h2>
    <img src="foodspot/sally.jpg" alt="Sally's Gotohan" style="width: 100%; height: 100%; max-height: 480px; border-radius: 10px">
    <p><strong>Address:</strong> 27 Diego Silang, Marikina, Metro Manila</p>
    <p><strong>Price Range:</strong> ₱100-200+</p>
  `;
}

  document.getElementById("gmap").src = mapSrc;
  document.getElementById("info-box").innerHTML = info;
}

let currentPage = 0;

function scrollMenu(direction) {
  const menu = document.getElementById("coffeeMenu");
  const items = menu.querySelectorAll("li").length;
  const itemsPerPage = 5;
  const maxPage = Math.ceil(items / itemsPerPage) - 1;

  currentPage += direction;

  if (currentPage < 0) currentPage = 0;
  if (currentPage > maxPage) currentPage = maxPage;

  const offset = -currentPage * 100; // shift by percentage
  menu.style.transform = `translateX(${offset}%)`;
  menu.style.transition = "transform 0.3s ease-in-out";
}
