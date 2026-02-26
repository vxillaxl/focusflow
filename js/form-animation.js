// ===== ANIMACIÓN Y FEEDBACK AL ENVIAR FORMULARIO =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('.btn-primary');
    const success = document.getElementById('form-success');

    // Mostrar loader
    btn.textContent = '⏳ Enviando...';
    btn.disabled = true;

    // Simular envío
    setTimeout(() => {
      btn.textContent = '✓ Enviado';
      btn.style.background = '#00c47a';

      if (success) {
        success.style.display = 'block';
        success.classList.add('success-animate');
      }

      // Resetear formulario
      setTimeout(() => {
        contactForm.reset();
        btn.textContent = 'Enviar mensaje →';
        btn.disabled = false;
        btn.style.background = '';
        if (success) {
          success.style.display = 'none';
          success.classList.remove('success-animate');
        }
        // Limpiar clases de validación
        contactForm.querySelectorAll('input, textarea').forEach(el => {
          el.classList.remove('input-valid', 'input-error');
        });
      }, 3000);
    }, 1500);
  });
}
