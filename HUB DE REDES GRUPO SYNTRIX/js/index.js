document.getElementById('year').textContent = new Date().getFullYear();

// Los valores de los contadores se derivan de datos reales del sitio,
// no de números escritos a mano en el HTML.
const socialChannels = [
  'instagram-devs','tiktok-devs','telegram-devs','facebook-devs',
  'youtube-devs','kick-devs','whatsapp-devs','x-devs','atombio-devs',
  'instagram-sports','tiktok-sports','facebook-sports','x-sports',
  'threads-sports','youtube-sports','kick-sports','atombio-sports'
];

const divisionCount = document.querySelectorAll('.division-card:not(.division-card--next)').length;

const counters = [
  { el: document.getElementById('c-empresas'), target: divisionCount },
  { el: document.getElementById('c-redes'), target: socialChannels.length },
  { el: document.getElementById('c-anio'), target: 2025 }
];

function animateCounter({ el, target }) {
  const duration = 1200;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(animateCounter);
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

observer.observe(document.getElementById('counters'));
