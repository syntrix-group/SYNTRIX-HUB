const devsLinks = [
  { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/syntrixdevs' },
  { name: 'TikTok', icon: 'fa-brands fa-tiktok', url: 'https://www.tiktok.com/@syntrix_devs' },
  { name: 'Telegram', icon: 'fa-brands fa-telegram', url: 'https://t.me/syntrix_devs' },
  { name: 'Facebook', icon: 'fa-brands fa-facebook', url: 'https://www.facebook.com/SyntrixDevs/' },
  { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@syntrix_devs' },
  { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', url: 'https://whatsapp.com/channel/0029Vb33LlIIXnlr8z9LQD3t' },
  { name: 'X', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/SYNTRYXDEV2y' },
  { name: 'Threads', icon: 'fa-brands fa-threads', url: 'https://www.threads.com/@syntrixdevs' },
];

const grid = document.getElementById('links-grid');
document.getElementById('link-count').textContent = devsLinks.length;

devsLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'd-link-card';
  a.innerHTML = `<i class="${link.icon}"></i><span>${link.name}</span>`;

  a.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Ir a ${link.name}`,
      text: 'Vas a salir de Syntrix Devs.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      background: '#10141C',
      color: '#E8EBF2',
      confirmButtonColor: '#35E0C4',
      cancelButtonColor: '#232A38'
    }).then((result) => {
      if (result.isConfirmed) window.open(link.url, '_blank');
    });
  });

  grid.appendChild(a);
});
