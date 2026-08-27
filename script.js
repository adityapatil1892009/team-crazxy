document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Add a portrait automatically if you later place:
  // assets/members/vaibhav.jpg, ayush.jpg, aditya.jpg, samarth.jpg, anushka.jpg, sakshi.jpg
  document.querySelectorAll(".portrait[data-name]").forEach((box) => {
    const filename = box.dataset.name.toLowerCase() + ".jpg";
    const img = new Image();
    img.onload = () => {
      box.innerHTML = "";
      img.alt = box.dataset.name;
      box.appendChild(img);
    };
    img.src = `assets/members/${filename}`;
  });

  // Small reveal effect. No animation library required.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".section-heading, .project, .principle, .mission-card, .person, .rules div").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
