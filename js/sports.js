const channels = [
  { name:'Instagram', icon:'fa-brands fa-instagram', handle:'@syntrixsports', url:'https://www.instagram.com/syntrixsports' },
  { name:'TikTok', icon:'fa-brands fa-tiktok', handle:'@syntrix_sports_oficial', url:'https://www.tiktok.com/@syntrix_sports_oficial' },
  { name:'YouTube', icon:'fa-brands fa-youtube', handle:'@SYNTRIXSPORTS', url:'https://www.youtube.com/@SYNTRIXSPORTS' },
  { name:'Facebook', icon:'fa-brands fa-facebook', handle:'Syntrix Sports', url:'https://www.facebook.com/profile.php?id=61593664612517' },
  { name:'Threads', icon:'fa-brands fa-threads', handle:'@syntrix_sports_oficial', url:'https://www.threads.com/@syntrix_sports_oficial' },
  { name:'X', icon:'fa-brands fa-x-twitter', handle:'@SYNTRIXSPOz6', url:'https://x.com/SYNTRIXSPOz6' },
  { name:'Kick', icon:'fa-solid fa-tv', handle:'syntrix-sports', url:'https://kick.com/syntrix-sports' },
  { name:'WhatsApp', icon:'fa-brands fa-whatsapp', handle:'Canal oficial', url:'https://whatsapp.com/channel/0029Vb90W1005MUnY1lm5J2t' },
  { name:'Telegram', icon:'fa-brands fa-telegram', handle:'Próximamente', url:'' }
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