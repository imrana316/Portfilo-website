// Open resume.pdf on mobile/tablet when .btn is clicked or touched
function isMobileOrTablet() {
  return window.innerWidth <= 900;
}
const resumeBtn = document.querySelector('.hero-content .btn');
if (resumeBtn) {
  function openResume(e) {
    if (isMobileOrTablet()) {
      e.preventDefault();
      window.open('resume.pdf', '_blank');
    }
  }
  resumeBtn.addEventListener('click', openResume);
  resumeBtn.addEventListener('touchstart', openResume);
}
// Animated typing/removing effect for hero h2
const heroTitle = document.getElementById('heroTitle');
const heroTexts = ["Hi, I'm Imrana Saleem", "Welcome to My Portfolio", "Front-End Developer",];
let heroIndex = 0;
let charIndex = 0;
let typing = true;

function typeHeroText() {
  if (!heroTitle) return;
  if (typing) {
    if (charIndex < heroTexts[heroIndex].length) {
      heroTitle.textContent = heroTexts[heroIndex].slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeHeroText, 80);
    } else {
      typing = false;
      setTimeout(typeHeroText, 1200);
    }
  } else {
    if (charIndex > 0) {
      heroTitle.textContent = heroTexts[heroIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeHeroText, 40);
    } else {
      typing = true;
      heroIndex = (heroIndex + 1) % heroTexts.length;
      setTimeout(typeHeroText, 600);
    }
  }
}
function adjustHeroTitleForMobile() {
  if (!heroTitle) return;
  if (window.innerWidth <= 600) {
    heroTitle.style.fontSize = '1.3rem';
    heroTitle.style.lineHeight = '1.3';
    // Add line break for mobile
    let text = heroTitle.textContent;
    if (text.length > 18 && !text.includes('\n')) {
      let mid = Math.floor(text.length / 2);
      let spaceIdx = text.indexOf(' ', mid);
      if (spaceIdx !== -1) {
        heroTitle.innerHTML = text.slice(0, spaceIdx) + '<br>' + text.slice(spaceIdx + 1);
      }
    }
  } else {
    heroTitle.style.fontSize = '';
    heroTitle.style.lineHeight = '';
    heroTitle.innerHTML = heroTitle.textContent;
  }
}

window.addEventListener('resize', adjustHeroTitleForMobile);

function typeHeroText() {
  if (!heroTitle) return;
  if (typing) {
    if (charIndex < heroTexts[heroIndex].length) {
      heroTitle.textContent = heroTexts[heroIndex].slice(0, charIndex + 1);
      charIndex++;
      setTimeout(typeHeroText, 80);
    } else {
      typing = false;
      setTimeout(typeHeroText, 1200);
    }
  } else {
    if (charIndex > 0) {
      heroTitle.textContent = heroTexts[heroIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(typeHeroText, 40);
    } else {
      typing = true;
      heroIndex = (heroIndex + 1) % heroTexts.length;
      setTimeout(typeHeroText, 600);
    }
  }
  adjustHeroTitleForMobile();
}
typeHeroText();
// Burger menu functionality
const burger = document.getElementById('burger');
const navLinksMenu = document.getElementById('navLinks');

if (burger && navLinksMenu) {
  burger.addEventListener('click', () => {
    navLinksMenu.classList.toggle('open');
  });
}
// === script.js ===

// EmailJS Initialization
(function() {
  emailjs.init("RVjBbJvhT7mzefAdq"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_4epjv67", "template_sx5ptwd", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error(error);
    });
});

// Optional: Add smooth scroll behavior
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
