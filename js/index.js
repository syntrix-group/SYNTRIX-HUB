document.getElementById('year').textContent = new Date().getFullYear();

const socialChannels = [
  'instagram-devs','tiktok-devs','telegram-devs','facebook-devs',
  'youtube-devs','whatsapp-devs','x-devs','threads-devs',
  'instagram-sports','tiktok-sports','facebook-sports','x-sports',
  'threads-sports','youtube-sports','kick-sports','whatsapp-sports'
];

const divisionCount = document.querySelectorAll('.division-row').length;

const counters = [
  { el: document.getElementById('c-empresas'), target: divisionCount },
  { el: document.getElementById('c-redes'), target: socialChannels.length },
  { el: document.getElementById('c-anio'), target: 2025 }
];

function animateCounter({ el, target }) {
  const duration = 1100;
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