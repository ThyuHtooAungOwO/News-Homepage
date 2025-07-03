const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const overlay = document.querySelector(".mobile-nav-overlay");
const body = document.body;

function openMobileMenu() {
  mobileNav.classList.add("open");
  overlay.classList.add("active");
  body.classList.add("no-scroll");
  hamburgerMenu.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  mobileNav.classList.remove("open");
  overlay.classList.remove("active");
  body.classList.remove("no-scroll");
  hamburgerMenu.setAttribute("aria-expanded", "false");
}

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", openMobileMenu);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeMobileMenu);
}

if (overlay) {
  overlay.addEventListener("click", closeMobileMenu);
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    if (mobileNav.classList.contains("open")) {
      closeMobileMenu();
    }
  }
});
