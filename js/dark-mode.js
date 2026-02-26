// ===== DARK MODE TOGGLE =====
const themeToggle = document.getElementById('theme-toggle-btn');
const body = document.body;

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateToggleText(savedTheme);

function toggleDarkMode() {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleText(next);
}

function updateToggleText(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', toggleDarkMode);
}
