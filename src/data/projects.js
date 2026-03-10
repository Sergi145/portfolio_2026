// src/data/projects.js

export const projects = [
  {
    id: 'bizflow',
    title: 'BizFlow — Dashboard de analítica',
    year: '2025',
    category: 'Dashboard',
    categoryVariant: 'purple',
    thumbClass: 'project-card__thumb--dark',
    thumbInitials: 'BF',
    challenge:
      'Maquetar un dashboard complejo con más de 40 componentes distintos asegurando consistencia visual y conformidad WCAG AA, partiendo de un Figma poco documentado.',
    solution:
      'Construí un design system en SASS con tokens de diseño, componentes BEM documentados en Storybook y gestión de estados visuales con custom properties CSS. Cero dependencias de JavaScript para estilos.',
    tech: ['Astro', 'SASS/BEM', 'Storybook', 'WCAG AA'],
  },
  {
    id: 'lumina',
    title: 'Lumina — E-commerce de fotografía',
    year: '2024',
    category: 'E-commerce',
    categoryVariant: 'green',
    thumbClass: 'project-card__thumb--violet',
    thumbInitials: 'LM',
    challenge:
      'Tienda online con catálogo de más de 500 productos. La web existente tenía un LCP de 8 s y un Cumulative Layout Shift de 0.45. Objetivo: Lighthouse 95+.',
    solution:
      'Migración a Astro con carga parcial de JS, imágenes en WebP con dimensiones reservadas para eliminar el CLS, y refactorización completa del CSS con SASS partials. Resultado: LCP 1.4 s, Lighthouse 97.',
    tech: ['Astro', 'CSS Grid', 'Sanity CMS', 'Core Web Vitals'],
  },
  {
    id: 'ecohuella',
    title: 'EcoHuella — Portal de sostenibilidad',
    year: '2024',
    category: 'Portal web',
    categoryVariant: 'green',
    thumbClass: 'project-card__thumb--green',
    thumbInitials: 'EH',
    challenge:
      'ONG con audiencia diversa (usuarios mayores, baja visión). Necesitaban cumplir WCAG 2.1 AA como requisito legal y mejorar la tasa de completado de formularios en un 30%.',
    solution:
      'Auditoría con axe DevTools, rediseño de formularios con etiquetas visibles y errores descriptivos, foco de teclado visible en todos los interactivos y skip links para lectores de pantalla. Tasa de completado +42%.',
    tech: ['HTML semántico', 'WCAG 2.1 AA', 'WordPress', 'axe DevTools'],
  },
  {
    id: 'nomadhq',
    title: 'NomadHQ — Landing page SaaS',
    year: '2023',
    category: 'Landing · SaaS',
    categoryVariant: 'orange',
    thumbClass: 'project-card__thumb--coral',
    thumbInitials: 'NQ',
    challenge:
      'Startup necesitaba una landing page que convirtiera visitas en registros. El equipo entregó un Figma con animaciones complejas y el plazo era de solo dos semanas.',
    solution:
      'Componentes Astro reutilizables con animaciones CSS puras (sin libraries JS), CSS scroll-driven animations para los scroll reveals y estructura BEM que permitió iterar textos sin tocar el CSS. Entregado en 11 días.',
    tech: ['Astro', 'CSS Animations', 'JavaScript ES6', 'BEM'],
  },
  {
    id: 'archilab',
    title: 'ArchiLab — Portfolio de arquitectura',
    year: '2023',
    category: 'Portfolio',
    categoryVariant: 'gray',
    thumbClass: 'project-card__thumb--slate',
    thumbInitials: 'AL',
    challenge:
      'Estudio de arquitectura con galería muy visual. Necesitaban transiciones fluidas entre páginas y carga rápida de imágenes de alta resolución sin comprometer la calidad.',
    solution:
      'View Transitions API nativa de Astro para transiciones entre páginas, lazy loading con IntersectionObserver, imágenes con srcset y el componente Image de Astro. Performance Score: 98.',
    tech: ['Astro', 'View Transitions', 'SASS', 'Image Optimization'],
  },
];
