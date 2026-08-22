const sportsLinks = [
  { name: 'Instagram', icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/syntrixsports' },
  { name: 'TikTok', icon: 'fa-brands fa-tiktok', url: 'https://www.tiktok.com/@syntrixsports' },
  { name: 'Facebook', icon: 'fa-brands fa-facebook', url: 'https://www.facebook.com/profile.php?id=61593664612517' },
  { name: 'X', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/SYNTRIXSPOz6' },
  { name: 'Threads', icon: 'fa-brands fa-threads', url: 'https://www.threads.com/@syntrixsports' },
  { name: 'YouTube', icon: 'fa-brands fa-youtube', url: 'https://www.youtube.com/@SYNTRIXSPORTS' },
  { name: 'Kick', icon: 'fa-solid fa-tv', url: 'https://kick.com/syntrix-sports' },
  { name: 'whatsapp', icon: 'fa-brands fa-whatsapp', url: 'https://whatsapp.com/channel/0029Vb90W1005MUnY1lm5J2t' },
];

const grid = document.getElementById('links-grid');
document.getElementById('link-count').textContent = sportsLinks.length;

sportsLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 's-link-card';
  a.innerHTML = `<i class="${link.icon}"></i><span>${link.name}</span>`;

  a.addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
      title: `Ir a ${link.name}`,
      text: 'Vas a salir de Syntrix Sports.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      background: '#10141C',
      color: '#E8EBF2',
      confirmButtonColor: '#7C8CFF',
      cancelButtonColor: '#232A38'
    }).then((result) => {
      if (result.isConfirmed) window.open(link.url, '_blank');
    });
  });

  grid.appendChild(a);
});
