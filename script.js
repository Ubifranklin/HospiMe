// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Toggle mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Add 3D animation to service cards on hover
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const xAxis = (card.offsetWidth / 2 - e.offsetX) / 15;
      const yAxis = (card.offsetHeight / 2 - e.offsetY) / 15;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    card.addEventListener("mouseenter", () => {
      card.style.transition = "none";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.3s ease";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    });
  });

  

  // (Optional) Handle form submission (example only)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting HospiMe! We’ll get back to you soon.");
      form.reset();
    });
  }
});

// Toggle login/register modal
function toggleModal() {
  const modal = document.getElementById("authModal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Appointment form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your appointment request has been submitted.");
      form.reset();
    });
  }
});

// Toggle menu for mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Toggle login/register modal
function toggleModal() {
  const modal = document.getElementById("authModal");
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

// Appointment form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your appointment request has been submitted.");
      form.reset();
    });
  }
});
// Toggle nav menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Toggle login/register modal
function toggleModal() {
  const modal = document.getElementById("authModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

// Animate 3D hover cards (already added to .feature-3d via CSS)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your appointment request has been submitted.");
      form.reset();
    });
  }
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (centerY - y) / 10;
      const rotateY = (x - centerX) / 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });



  // Optional: Smooth scroll for links
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
document.getElementById("gsheetForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());

  fetch("https://script.google.com/macros/s/AKfycbzeC2ip0hJVBL7RwhlQhI981C__Jfcb3J8mhTC1RE3DwMdwaqRyFJcgLsgSXP5cm3lL4A/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(() => alert("Message sent!"));
});

  // 🌀 Apply tilt to all user-group cards
  VanillaTilt.init(document.querySelectorAll(".user-group"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.4,
    scale: 1.05,
  });



   document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
      });
    });
  });

