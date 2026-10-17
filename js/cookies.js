(function () {
  'use strict';

  var script = document.currentScript;
  var GA_ID = script ? script.getAttribute('data-ga-id') : null;
  var PRIVACY_URL = script ? script.getAttribute('data-privacy') : null;
  var STORAGE_KEY = 'syntrix_cookie_consent'; // valores: "accepted" | "rejected"

  /* ---------- Almacenamiento de la decisión ---------- */
  function getChoice() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function saveChoice(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* sin almacenamiento */ }
  }

  /* ---------- Google Analytics ---------- */
  function loadAnalytics() {
    if (!GA_ID || window.__syntrixGaLoaded) return;
    window.__syntrixGaLoaded = true;
    window['ga-disable-' + GA_ID] = false;

    var tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    document.head.appendChild(tag);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function disableAnalytics() {
    if (GA_ID) window['ga-disable-' + GA_ID] = true;
    clearAnalyticsCookies();
  }

  // Borra las cookies _ga* que haya dejado una aceptación anterior
  function clearAnalyticsCookies() {
    var host = location.hostname;
    var domains = [host, '.' + host];
    document.cookie.split(';').forEach(function (cookie) {
      var name = cookie.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        domains.forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + d;
        });
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      }
    });
  }

  /* ---------- Estilos (se inyectan desde aquí para subir un solo archivo) ---------- */
  function injectStyles() {
    if (document.getElementById('syntrix-cookie-styles')) return;
    var css = [
      '.sx-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;',
      'max-width:560px;margin:0 auto;padding:18px 20px;border-radius:12px;',
      'background:var(--sx-cookie-bg,#10151f);color:var(--sx-cookie-text,#e8edf5);',
      'border:1px solid var(--sx-cookie-border,rgba(255,255,255,.14));',
      'box-shadow:0 12px 40px rgba(0,0,0,.45);font:15px/1.5 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;',
      'transform:translateY(24px);opacity:0;transition:transform .35s ease,opacity .35s ease}',
      '.sx-cookie.sx-show{transform:none;opacity:1}',
      '.sx-cookie h2{margin:0 0 6px;font-size:16px;font-weight:600}',
      '.sx-cookie p{margin:0 0 14px;color:var(--sx-cookie-muted,#aab4c4)}',
      '.sx-cookie a{color:var(--sx-cookie-accent,#00d4ff);text-decoration:underline}',
      '.sx-cookie-actions{display:flex;gap:10px;flex-wrap:wrap}',
      '.sx-cookie button{flex:1 1 140px;padding:10px 16px;border-radius:8px;font:inherit;font-weight:600;cursor:pointer;',
      'border:1px solid var(--sx-cookie-border,rgba(255,255,255,.14));background:transparent;color:inherit}',
      '.sx-cookie button.sx-accept{background:var(--sx-cookie-accent,#00d4ff);border-color:transparent;color:#04121a}',
      '.sx-cookie button:hover{filter:brightness(1.1)}',
      '.sx-cookie button:focus-visible,.sx-cookie a:focus-visible{outline:2px solid var(--sx-cookie-accent,#00d4ff);outline-offset:2px}',
      '@media (prefers-reduced-motion:reduce){.sx-cookie{transition:none}}'
    ].join('');
    var style = document.createElement('style');
    style.id = 'syntrix-cookie-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ---------- Banner ---------- */
  var banner = null;

  function closeBanner() {
    if (!banner) return;
    banner.classList.remove('sx-show');
    var el = banner;
    banner = null;
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 350);
  }

  function choose(value) {
    saveChoice(value);
    if (value === 'accepted') loadAnalytics(); else disableAnalytics();
    closeBanner();
  }

  function showBanner() {
    if (banner) return;
    injectStyles();

    banner = document.createElement('div');
    banner.className = 'sx-cookie';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferencias de cookies');

    var title = document.createElement('h2');
    title.textContent = 'Cookies de analítica';

    var text = document.createElement('p');
    text.textContent = 'Usamos Google Analytics para saber cuántas personas visitan el sitio y qué secciones les interesan. Solo se activa si lo aceptas. ';
    if (PRIVACY_URL) {
      var link = document.createElement('a');
      link.href = PRIVACY_URL;
      link.textContent = 'Política de privacidad';
      text.appendChild(link);
    }

    var actions = document.createElement('div');
    actions.className = 'sx-cookie-actions';

    var reject = document.createElement('button');
    reject.type = 'button';
    reject.textContent = 'Rechazar';
    reject.addEventListener('click', function () { choose('rejected'); });

    var accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'sx-accept';
    accept.textContent = 'Aceptar';
    accept.addEventListener('click', function () { choose('accepted'); });

    actions.appendChild(reject);
    actions.appendChild(accept);
    banner.appendChild(title);
    banner.appendChild(text);
    banner.appendChild(actions);
    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { if (banner) banner.classList.add('sx-show'); });
    });
  }

  /* ---------- Inicio ---------- */
  function init() {
    var choice = getChoice();
    if (choice === 'accepted') loadAnalytics();
    else if (choice === 'rejected') disableAnalytics();
    else showBanner();

    // Enlaces "Configurar cookies" para volver a decidir
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest ? e.target.closest('[data-cookie-settings]') : null;
      if (trigger) {
        e.preventDefault();
        showBanner();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();