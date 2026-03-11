// src/data/projects.js




export const projects = [
  {
    id: 'Telefónica',
    title: 'Telefónica - Copérnico',
    year: '2025',
    category: 'Plantillas',
    categoryVariant: 'purple',
    thumbClass: 'project-card__thumb--dark',
    thumbImage: 'projects/telefonica.jpg',
    thumbAlt: 'Telefonica',
    challenge:
      'Actualización y mantenimiento de plantillas corporativas de Telefónica con implementación de cambios en HTML para asegurar consistencia en la maquetación y gestión básica de la base de datos realizada en Oracle.',

    tech: ['HTML', 'ORACLE'],
  },
  {
    id: 'Generalitat',
    title: 'Generalitat de Catalunya — GECO+',
    year: '2020 - 2024',
    category: 'Open CMS',
    categoryVariant: 'green',
    thumbClass: 'project-card__thumb--violet',
    thumbImage: 'projects/logo_gene.png',
    thumbAlt: 'Generalitar de Catalunya',
    challenge:
      'Contribución en la realización a nivel de maquetación de diferentes componentes para la plataforma OpenCms para la Generalitat de Catalunya y realización de informes detallados sobre accesibilidad web, incluyendo análisis automáticos y manuales para la detección de errores mediante herramientas como el Observatorio de Accesibilidad del Gobierno de España y Siteimprove.',
    solution:
      'https://guiaweb.gencat.cat/ca/cataleg/',
    tech: ['HTML','PUG', 'CSS/SASS', 'Jquery', 'Bootstrap 3','WCAG','Siteimprove','Observatorio de accesibilidad','GIT'],
  },
  {
    id: 'Feina Activa',
    title: 'Generalitat de Catalunya - Feina Activa',
    year: '2018 - 2020',
    category: 'Web Page',
    categoryVariant: 'orange',
    thumbClass: 'project-card__thumb--coral',
    thumbImage: 'projects/feina_activa.jpg',
    thumbAlt: 'Feina Activa',
    challenge:
      'Contribución en la realización de los diversos componentes para el proyecto de ‘Feina Activa’ para la Generalitat de Catalunya.',
    solution:
      'https://feinaactiva.gencat.cat/es/home',
    tech: ['HTML', 'CSS/SASS', 'Jquery', 'Bootstrap 4','Atomic Desing','Handlebars','GIT'],
  }
];
