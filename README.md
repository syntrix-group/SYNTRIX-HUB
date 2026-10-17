# Syntrix Group

Sitio oficial del **Grupo Syntrix**. Presenta al grupo, sus empresas y la tecnología con la que trabajan, y lleva a las páginas de cada división, donde están sus canales oficiales.

## Divisiones

- **Syntrix Devs** — Desarrollo de software, tecnología e innovación. Publica a diario contenido sobre novedades tecnológicas, sistemas operativos, vehículos autónomos y más.
- **Syntrix Sports** — Análisis de partidos del fútbol internacional, noticias deportivas, comentarios post partido y todo lo referente al mundo del deporte.

## Qué incluye

- Página principal con secciones: inicio, el grupo, empresas, enfoque, recorrido, tecnologías y contacto.
- Átomo animado en el hero, hecho en SVG con animaciones nativas.
- Carrusel infinito y automático de tecnologías, en dos filas con sentidos opuestos.
- Una página por división (`devs.html` y `sports.html`) con su contenido y sus canales.
- Canales activos y "próximamente" con contadores automáticos: basta con editar la lista en `devs.js` o `sports.js`.
- Barra de scroll personalizada y botón para volver arriba.
- Respeta la preferencia de movimiento reducido del sistema.
- Diseño responsive para celular, tablet y computador.

## Stack

- HTML5, CSS3 y JavaScript (vanilla)
- [Font Awesome](https://fontawesome.com/) — íconos de redes y tecnologías
- [Google Fonts](https://fonts.google.com/) — Sora y Manrope

Proyecto 100% frontend, sin backend ni base de datos. No depende de Bootstrap, SweetAlert ni GSAP: las animaciones son CSS y SVG propios.

## Estructura

```text
SYNTRIX-HUB/
├── html/
│   ├── devs.html
│   └── sports.html
├── css/
│   ├── tokens.css
│   ├── index.css
│   ├── devs.css
│   ├── sports.css
│   └── extras.css
├── js/
│   ├── index.js
│   ├── devs.js
│   ├── sports.js
│   └── extras.js
├── logos/
│   ├── syntrix-devs.png
│   └── syntrix-sports.png
├── index.html
└── README.md
```

## Personalización

- **Colores y tipografías:** se definen en `css/tokens.css`. Violeta para Devs, azul para Sports y menta para el grupo.
- **Canales:** en `js/devs.js` y `js/sports.js`, cada canal tiene `name`, `icon`, `handle` y `url`. Con `url` vacío aparece como "próximamente"; al agregarla, se activa y los contadores se actualizan solos.
- **Tecnologías:** el carrusel se edita directamente en la sección `#tecnologias` de `index.html`.
- **Extras:** `css/extras.css` y `js/extras.js` agregan la barra de scroll y el botón de subir, y se enlazan en cada página.

## Analytics

Cada división tiene su propia propiedad de Google Analytics (GA4), conectada de forma independiente en `devs.html` y `sports.html`.

## Demo

🔗 [Demo](https://syntrixgroupcuentaprincipal-crypto.github.io/SYNTRIX-HUB/)

## Historial de versiones

- **v3** — El hub pasa a ser un sitio completo: nuevo diseño, átomo animado, carrusel de tecnologías, páginas de división rediseñadas, barra de scroll y botón de subir.
- **v2 y anteriores** — Hub de enlaces con órbita animada (GSAP) y páginas de canales.

## Licencia

© Grupo Syntrix. Todos los derechos reservados. No se permite el uso, copia, modificación ni distribución de este código sin autorización previa.
