// src/data/skills.js

// Agrupadas por área (no por nivel) para que se puedan escanear rápido.
// `variant` reutiliza los colores de .tag (sin valor = violeta por defecto).
export const skillGroups = [
  {
    title: 'Maquetación',
    items: [
      'HTML5 semántico', 'CSS3', 'SASS/SCSS', 'BEM', 'Atomic Design',
      'Bootstrap 3/4', 'Pug', 'Handlebars', 'Responsive mobile-first',
    ],
  },
  {
    title: 'JavaScript y frameworks',
    variant: 'green',
    items: ['JavaScript ES6+', 'jQuery', 'Astro'],
  },
  {
    title: 'Accesibilidad',
    variant: 'orange',
    items: [
      'WCAG 2.2 AA', 'NVDA', 'TalkBack', 'Siteimprove', 'WAVE',
      'axe DevTools', 'Lighthouse', 'Observatorio de Accesibilidad',
    ],
  },
  {
    title: 'Herramientas y CMS',
    variant: 'gray',
    items: ['Git & GitHub', 'OpenCms', 'Oracle (básico)', 'Figma / Adobe XD'],
  },
];

export const softSkills = [
  {
    icon: '🔍',
    name: 'Atención al detalle',
    description:
      'Reviso pixel a pixel que la maquetación coincida con el diseño en todos los breakpoints antes de dar por terminado un proyecto.',
  },
  {
    icon: '💬',
    name: 'Comunicación clara',
    description:
      'Explico mis decisiones técnicas en lenguaje accesible y mantengo al cliente informado en cada fase del proyecto.',
  },
  {
    icon: '🗓️',
    name: 'Gestión del tiempo',
    description:
      'Trabajo con estimaciones realistas y cumplo los plazos acordados.',
  },
  {
    icon: '🤝',
    name: 'Trabajo en equipo',
    description:
      'Colaboro fluidamente con diseñadores, desarrolladores y clientes finales, adaptando mi lenguaje al interlocutor.',
  },
  {
    icon: '📚',
    name: 'Aprendizaje continuo',
    description:
      'El frontend evoluciona rápido. Dedico tiempo semanal a leer specs del W3C, explorar nuevas APIs CSS y experimentar con herramientas emergentes.',
  },
];
