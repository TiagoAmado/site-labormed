// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// Active nav link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Partner form submit
const partnerForm = document.getElementById('partnerForm');
if (partnerForm) {
  partnerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = partnerForm.querySelector('.form-submit');
    const original = btn.innerHTML;
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Mensagem Enviada!';
    btn.style.background = '#2dc653';
    setTimeout(() => {
      btn.innerHTML = original;
      btn.style.background = '';
      partnerForm.reset();
    }, 3500);
  });
}

// Animate numbers on scroll
function animateNumber(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statNumbers = document.querySelectorAll('.stat-number[data-target]');
if (statNumbers.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => observer.observe(el));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
