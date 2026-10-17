document.getElementById('y').textContent=new Date().getFullYear();
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function count(el){var t=+el.dataset.n;if(reduce){el.textContent=t;return}
var s=performance.now(),d=1400;(function f(n){var p=Math.min((n-s)/d,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(e.target);so.unobserve(e.target)}})},{threshold:.6});
document.querySelectorAll('[data-n]').forEach(function(e){so.observe(e)});

/* Menú: resalta la sección visible */
var links=document.querySelectorAll('.nav ul a');
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(function(e){spy.observe(e)});
var atom=document.getElementById('atom');
if(reduce&&atom&&atom.pauseAnimations)atom.pauseAnimations();
/* Carrusel: repite el contenido 4 veces para que el bucle sea continuo */
document.querySelectorAll('.mq__track').forEach(function(track){
  var set=Array.from(track.children);
  for(var i=0;i<3;i++){
    set.forEach(function(el){
      var c=el.cloneNode(true);
      c.setAttribute('aria-hidden','true');
      track.appendChild(c);
    });
  }
});