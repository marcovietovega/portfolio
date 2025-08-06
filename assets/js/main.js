// Main JavaScript for Portfolio Website

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // Clickable cards functionality (only for blog cards now)
  const clickableCards = document.querySelectorAll(".clickable-card");
  clickableCards.forEach((card) => {
    // Only make blog cards clickable, not project cards
    if (
      !card.closest(".featured-section:first-of-type") &&
      !card.closest(".projects-section")
    ) {
      card.addEventListener("click", function () {
        const href = this.dataset.href;
        if (href) {
          if (href.startsWith("http")) {
            window.open(href, "_blank");
          } else {
            window.location.href = href;
          }
        }
      });
    }
  });

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Intersection Observer for animations
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in, .section-reveal"
  );
  const animationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  animatedElements.forEach((el) => animationObserver.observe(el));

  // Enhanced hover effects for cards
  const cards = document.querySelectorAll(".card, .project-card, .blog-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 4px 32px rgba(0, 0, 0, 0.18)";
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Back to top button functionality
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Performance optimization: Debounce scroll events
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(function () {
      // Handle scroll-based animations here
    }, 16); // ~60fps
  });

  // Add keyboard navigation support
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      mobileMenu &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });

  // Preload critical images - removed to avoid Jekyll build errors
});
