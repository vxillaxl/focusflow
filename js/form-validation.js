// ===== VALIDACIÓN AVANZADA EN TIEMPO REAL =====
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const submitBtn = document.querySelector('#contact-form .btn-primary');

function validateNombre() {
  const val = nombreInput.value.trim();
  const error = document.getElementById('error-nombre');
  if (!val) {
    error.textContent = 'El nombre es obligatorio.';
    nombreInput.classList.add('input-error');
    return false;
  } else if (val.length < 3) {
    error.textContent = 'Mínimo 3 caracteres.';
    nombreInput.classList.add('input-error');
    return false;
  }
  error.textContent = '';
  nombreInput.classList.remove('input-error');
  nombreInput.classList.add('input-valid');
  return true;
}

function validateEmail() {
  const val = emailInput.value.trim();
  const error = document.getElementById('error-email');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    error.textContent = 'El correo es obligatorio.';
    emailInput.classList.add('input-error');
    return false;
  } else if (!regex.test(val)) {
    error.textContent = 'Formato de correo inválido.';
    emailInput.classList.add('input-error');
    return false;
  }
  error.textContent = '';
  emailInput.classList.remove('input-error');
  emailInput.classList.add('input-valid');
  return true;
}

function validateMensaje() {
  const val = mensajeInput.value.trim();
  const error = document.getElementById('error-mensaje');
  if (!val) {
    error.textContent = 'El mensaje es obligatorio.';
    mensajeInput.classList.add('input-error');
    return false;
  } else if (val.length < 10) {
    error.textContent = 'Mínimo 10 caracteres.';
    mensajeInput.classList.add('input-error');
    return false;
  }
  error.textContent = '';
  mensajeInput.classList.remove('input-error');
  mensajeInput.classList.add('input-valid');
  return true;
}

function checkFormValidity() {
  const valid = nombreInput.classList.contains('input-valid') &&
                emailInput.classList.contains('input-valid') &&
                mensajeInput.classList.contains('input-valid');
  if (submitBtn) submitBtn.disabled = !valid;
}

if (nombreInput) nombreInput.addEventListener('input', () => { validateNombre(); checkFormValidity(); });
if (emailInput) emailInput.addEventListener('input', () => { validateEmail(); checkFormValidity(); });
if (mensajeInput) mensajeInput.addEventListener('input', () => { validateMensaje(); checkFormValidity(); });

if (submitBtn) submitBtn.disabled = true;
