const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const hero = document.querySelector(".hero-visual");
const frame = document.querySelector(".visual-frame");
if (hero && frame && window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame.style.transform = `rotateY(${-8 + x * 7}deg) rotateX(${3 - y * 5}deg) translateZ(8px)`;
  });
  hero.addEventListener("pointerleave", () => {
    frame.style.transform = "rotateY(-8deg) rotateX(3deg)";
  });
}
