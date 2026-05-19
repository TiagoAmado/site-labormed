// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) nav.classList.remove('open');
  });
}

// Active nav link
document.querySelectorAll('nav ul li a').forEach(a => {
  if (a.href === window.location.href) a.classList.add('active');
});

// Exam accordion
document.querySelectorAll('.exame-accordion').forEach(item => {
  item.querySelector('.exame-header')?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.exame-accordion').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-enviar');
    btn.innerHTML = '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Mensagem enviada!';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      btn.innerHTML = '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg> Enviar Mensagem';
      btn.style.background = '';
      contactForm.reset();
    }, 3500);
  });
}
