

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Typing animation
const typingElement = document.getElementById("typing");

const roles = [
  "AI/ML Developer",
  "Python Developer",
  "Web Developer"
];

let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (deleting) {
    charIndex--;
    typingElement.textContent =
      currentRole.substring(0, Math.max(0, charIndex));

    if (charIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 350);
      return;
    }
  } else {
    const nextRole = roles[roleIndex];
    charIndex++;

    typingElement.textContent =
      nextRole.substring(0, charIndex);

    if (charIndex >= nextRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1400);
      return;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 85);
}

setTimeout(typeEffect, 1800);

// Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();
