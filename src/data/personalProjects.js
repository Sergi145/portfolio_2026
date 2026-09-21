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
];
