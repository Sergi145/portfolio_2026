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
];
