// Rotación orbital continua. Cada anillo gira a su propia velocidad y
// sentido; cada nodo contra-rota para que su etiqueta se mantenga
// siempre en posición legible, sin voltearse con la órbita.

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Respeta la preferencia del sistema: sin movimiento continuo.
} else if (window.gsap) {

  gsap.to('#orbit-outer', {
    rotation: 360,
    svgOrigin: '210 210',
    duration: 34,
    ease: 'none',
    repeat: -1
  });

  gsap.to('#orbit-inner', {
    rotation: -360,
    svgOrigin: '210 210',
    duration: 22,
    ease: 'none',
    repeat: -1
  });

  document.querySelectorAll('.orbit-node--sports .orbit-node__counter-spin').forEach(el => {
    gsap.to(el, { rotation: -360, svgOrigin: '0 0', duration: 34, ease: 'none', repeat: -1 });
  });

  document.querySelectorAll('.orbit-node--devs .orbit-node__counter-spin').forEach(el => {
    gsap.to(el, { rotation: 360, svgOrigin: '0 0', duration: 22, ease: 'none', repeat: -1 });
  });

  // Pulso sutil en el núcleo — el único acento de énfasis, todo lo demás gira lineal y constante.
  gsap.to('.orbit-core', {
    attr: { r: 37 },
    filter: 'drop-shadow(0 0 10px rgba(76,224,179,.55))',
    duration: 2.2,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
}