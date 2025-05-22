// HospiMe Main Script - Refactored for clarity, maintainability, and performance

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // --- 3D Card Animation ---
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
      card.style.transition = "none";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.transition = "transform 0.3s ease";
    });
  });

  // --- VanillaTilt for .user-group cards (if VanillaTilt is loaded) ---
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(document.querySelectorAll(".user-group"), {
      max: 20,
      speed: 400,
      glare: true,
      "max-glare": 0.4,
      scale: 1.05,
    });
  }

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // --- General Form Submission (Contact Form) ---
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting HospiMe! We’ll get back to you soon.");
      contactForm.reset();
    });
  }

  // --- Appointment Form Submission ---
  const appointmentForm = document.getElementById("appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your appointment request has been submitted.");
      appointmentForm.reset();
    });
  }

  // --- Google Sheets Form Submission ---
  const gsheetForm = document.getElementById("gsheetForm");
  if (gsheetForm) {
    gsheetForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(this).entries());
      fetch("https://script.google.com/macros/s/AKfycbzeC2ip0hJVBL7RwhlQhI981C__Jfcb3J8mhTC1RE3DwMdwaqRyFJcgLsgSXP5cm3lL4A/exec", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      }).then(() => alert("Message sent!"));
    });
  }
});

// --- Modal Toggle (Login/Register) ---
function toggleModal() {
  const modal = document.getElementById("authModal");
  if (modal) {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
  }
}

// --- Mobile Menu Toggle (for inline use) ---
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.classList.toggle("show");
  }
}

