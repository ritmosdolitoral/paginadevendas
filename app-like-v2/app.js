(function initTheme() {
  const saved = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  // Sync toggle visual state on load
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    const iconUse = toggle.querySelector('use');
    if (iconUse) iconUse.setAttribute('href', theme === 'dark' ? '#icon-moon' : '#icon-sun');
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(next === 'dark'));
    const iconUse = toggle.querySelector('use');
    if (iconUse) iconUse.setAttribute('href', next === 'dark' ? '#icon-moon' : '#icon-sun');
  }
}

(function bindThemeToggle(){
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', toggleTheme);
})();

(function setYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Bottom sheet helpers
const sheet = document.getElementById('sheet');
function openSheet(){ if (sheet && typeof sheet.showModal === 'function') sheet.showModal(); }
function closeSheet(){ if (sheet) sheet.close(); }
window.openSheet = openSheet; window.closeSheet = closeSheet;

// Bottom nav active state (demo only)
(function bottomNavActive(){
  const links = document.querySelectorAll('.bottom-nav a');
  links.forEach(link => link.addEventListener('click', (e) => {
    links.forEach(l => { l.classList.remove('is-active'); l.removeAttribute('aria-current'); });
    e.currentTarget.classList.add('is-active');
    e.currentTarget.setAttribute('aria-current', 'page');
  }));
})();

// Form validation
(function formValidation(){
  const form = document.getElementById('demo-form');
  if (!form) return;
  const email = document.getElementById('email');
  const emailErr = document.getElementById('email-err');

  function validateEmail(){
    if (!email) return false;
    const bad = email.validity.typeMismatch || email.validity.valueMissing;
    email.setAttribute('aria-invalid', bad ? 'true' : 'false');
    if (emailErr) emailErr.hidden = !bad;
    return !bad;
  }

  email && email.addEventListener('input', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = validateEmail();
    if (ok) {
      alert('Enviado com sucesso!');
      form.reset();
      validateEmail();
    } else {
      email && email.focus();
    }
  });
})();

// Reduced motion respect for scroll/animations
(function reducedMotion(){
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) return; // nothing to change right now
})();