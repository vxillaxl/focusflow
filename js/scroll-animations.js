// ===== SCROLL ANIMATIONS con Intersection Observer =====
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animated');
      }, index * 100);
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(el => scrollObserver.observe(el));
