(function () {
  const carouselEl = document.querySelector('#carouselProdutos');
  if (carouselEl) {
    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
      interval: 3000,
      ride: 'carousel'
    });
    carouselEl.setAttribute('role', 'region');
    carouselEl.setAttribute('aria-label', 'Carrossel de produtos em destaque');
  }

  const btnTop = document.getElementById('btn-top');
  function toggleBtnTop() {
    if (!btnTop) return;
    btnTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
  }
  window.addEventListener('scroll', toggleBtnTop);

  if (btnTop) {
    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

const botaoModo = document.getElementById('modo-btn');

botaoModo.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    botaoModo.textContent = '☀️'; // volta para modo claro
  } else {
    botaoModo.textContent = '🌙'; // ativa modo escuro
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const focaveis = document.querySelectorAll(
    'a, footer, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  focaveis.forEach(el => {
    el.addEventListener('focus', () => {
      el.style.outline = '3px solid #0400ff';
      el.style.outlineOffset = '2px';
    });

    el.addEventListener('blur', () => {
      el.style.outline = '';
    });
  });

  const first = focaveis[0];
  const last = focaveis[focaveis.length - 1];

  last.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      first.focus();
    }
  });

  first.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      last.focus();
    }
  });
});
