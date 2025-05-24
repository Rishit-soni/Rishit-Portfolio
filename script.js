// Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggle-theme");

if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute(
      "data-theme",
      currentTheme === "light" ? "dark" : "light"
    );
  });
}

// Scroll-triggered animations using IntersectionObserver
const animatedSections = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

animatedSections.forEach((section) => {
  observer.observe(section);
});
