// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== SCROLL SUAVE =====
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll suave para todos los enlaces del nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== ANIMACIÓN POR SCROLL (Intersection Observer) =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ===== MODAL CTA =====
function handleCTA() {
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== VALIDACIÓN DEL FORMULARIO =====
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Limpiar errores previos
  ['nombre', 'email', 'mensaje'].forEach(field => {
    document.getElementById(field).classList.remove('error');
    document.getElementById(`error-${field}`).textContent = '';
  });

  // Validar nombre
  const nombre = document.getElementById('nombre');
  if (!nombre.value.trim()) {
    nombre.classList.add('error');
    document.getElementById('error-nombre').textContent = 'Por favor ingresa tu nombre.';
    valid = false;
  }

  // Validar email
  const email = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    email.classList.add('error');
    document.getElementById('error-email').textContent = 'Por favor ingresa tu correo.';
    valid = false;
  } else if (!emailRegex.test(email.value)) {
    email.classList.add('error');
    document.getElementById('error-email').textContent = 'El correo no tiene un formato válido.';
    valid = false;
  }

  // Validar mensaje
  const mensaje = document.getElementById('mensaje');
  if (!mensaje.value.trim()) {
    mensaje.classList.add('error');
    document.getElementById('error-mensaje').textContent = 'Por favor escribe tu mensaje.';
    valid = false;
  }

  // Si todo es válido
  if (valid) {
    form.reset();
    const success = document.getElementById('form-success');
    success.style.display = 'block';
    setTimeout(() => { success.style.display = 'none'; }, 4000);
  }
});

// ===== BOTÓN CTA CON CONTADOR ANIMADO =====
let ctaClicks = 0;
document.getElementById('btn-cta-nav').addEventListener('click', () => {
  ctaClicks++;
});
