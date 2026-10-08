// src/data/personalProjects.js
// Mismo formato que projects.js. `status` y `urlLabel` son opcionales.

export const personalProjects = [
  {
    id: 'Auditorias A11y',
    title: 'Auditorías A11y',
    year: '2026',
    status: 'En desarrollo',
    category: 'Aplicación web',
    categoryVariant: 'purple',
    thumbImage: 'projects/auditorias-a11y.png',
    thumbWidth: 1280,
    thumbHeight: 800,
    thumbAlt: 'Captura de la pantalla de bienvenida de Auditorías A11y',
    challenge:
      'Aplicación web para auditores de accesibilidad que combina el escaneo automático con axe-core y la revisión manual en un mismo flujo: checklist WCAG 2.2 (niveles A y AA) por página, severidad y capturas vinculadas a cada hallazgo, e informe exportable a Excel o PDF. Desarrollada en Angular, funciona sin backend: toda la información se guarda en el localStorage del navegador.',
    url: 'https://auditorias-a11y.vercel.app/bienvenida',
    urlLabel: 'Ver aplicación',
    tech: ['Angular', 'TypeScript', 'localStorage', 'WCAG', 'Vercel'],
  },
  {
    id: 'Libreria Componentes Accesibles',
    title: 'Librería de Componentes Accesibles',
    year: '2026',
    status: 'En desarrollo',
    category: 'Librería de componentes',
    categoryVariant: 'green',
    thumbImage: 'projects/libreria-componentes-accesibles.png',
    thumbWidth: 1280,
    thumbHeight: 800,
    thumbAlt: 'Captura de la página de documentación del componente Accordion en la Librería de Componentes Accesibles',
    challenge:
      'Librería de componentes de UI accesibles construidos con HTML, CSS y JavaScript nativos, sin framework. Cada componente vive en su propia carpeta y es independiente: se puede copiar o importar por separado. Funciona con mejora progresiva (HTML semántico operativo sin JS) y el JavaScript añade gestión de foco y estados ARIA dinámicos.',
    url: 'https://libreria-componentes-accesibles.vercel.app/?path=/docs/componentes-accordion--docs',
    urlLabel: 'Ver componentes',
    tech: ['HTML', 'CSS', 'JavaScript', 'ARIA', 'Storybook'],
  },
  {
    id: 'Informe Auditoria Policia',
    title: 'Informe de auditoría de accesibilidad: policia.es',
    year: '2026',
    category: 'Auditoría de accesibilidad',
    categoryVariant: 'green',
    thumbImage: 'projects/informe-auditoria-policia.png',
    thumbWidth: 1280,
    thumbHeight: 800,
    thumbAlt: 'Captura de la página de inicio del portal web de la Policía Nacional (policia.es), con el menú principal, el carrusel de imagen y las tarjetas de acceso rápido',
    challenge:
      'Auditoría de accesibilidad (WCAG 2.2 AA) de la página de inicio del portal de la Policía Nacional. Lighthouse da un 100 sobre 100 y WAVE no detecta ningún error, pero la revisión manual con teclado y lectores de pantalla (VoiceOver, TalkBack y NVDA) encontró 10 incidencias: 3 críticas, 6 moderadas y 1 leve. Es un ejemplo de por qué las herramientas automáticas no bastan y siempre hace falta una auditoría manual.',
    url: `${import.meta.env.BASE_URL}informes/auditoria-policia.html`,
    urlLabel: 'Ver informe',
    tech: ['WCAG 2.2 AA', 'Lighthouse', 'axe DevTools', 'WAVE', 'NVDA', 'VoiceOver', 'TalkBack'],
  },
];
