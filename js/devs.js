const channels = [
  { name:'Instagram', icon:'fa-brands fa-instagram', handle:'@syntrixdevs', url:'https://www.instagram.com/syntrixdevs' },
  { name:'TikTok', icon:'fa-brands fa-tiktok', handle:'@syntrix_devs_oficial', url:'https://www.tiktok.com/@syntrix_devs_oficial' },
  { name:'YouTube', icon:'fa-brands fa-youtube', handle:'@syntrix_devs', url:'https://www.youtube.com/@syntrix_devs' },
  { name:'Facebook', icon:'fa-brands fa-facebook', handle:'SyntrixDevs', url:'https://www.facebook.com/SyntrixDevs/' },
  { name:'Threads', icon:'fa-brands fa-threads', handle:'@syntrix_devs_oficial', url:'https://www.threads.com/@syntrix_devs_oficial' },
  { name:'X', icon:'fa-brands fa-x-twitter', handle:'@SYNTRYXDEV2y', url:'https://x.com/SYNTRYXDEV2y' },
  { name:'Kick', icon:'fa-solid fa-bolt', handle:'Próximamente', url:'' },
  { name:'Telegram', icon:'fa-brands fa-telegram', handle:'Próximamente', url:'' },
  { name:'WhatsApp', icon:'fa-brands fa-whatsapp', handle:'Próximamente', url:'' }
];

const grid = document.getElementById('grid');
const activos = channels.filter(c => c.url).length;
document.getElementById('count').textContent = activos;
document.getElementById('count-soon').textContent = channels.length - activos;

channels.forEach(c => {
  const el = document.createElement(c.url ? 'a' : 'div');
  el.className = 'ch rv' + (c.url ? '' : ' soon');
  if (c.url) { el.href = c.url; el.target = '_blank'; el.rel = 'noopener'; }
  el.innerHTML = `<i class="${c.icon}"></i><div><b>${c.name}</b><small>${c.handle}</small></div>`;
  grid.appendChild(el);
});

document.getElementById('y').textContent = new Date().getFullYear();

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.rv').forEach(e => io.observe(e));