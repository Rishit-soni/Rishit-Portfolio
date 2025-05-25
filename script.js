// Typing animation
const typingName = document.getElementById("typingName");
const name = " Rishit Rajpara";
let i = 0;

function typeWriter() {
  if (i < name.length) {
    typingName.innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      typingName.innerHTML = "";
      i = 0;
      setTimeout(typeWriter, 1000);
    }, 3000);
  }
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(typeWriter, 1000);
});

// Existing intersection observer code...
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".section").forEach((el) => observer.observe(el));
