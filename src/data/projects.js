// src/data/projects.js
// `url` es opcional: si no existe, la tarjeta no muestra enlace.

export const projects = [
  {
    id: 'Telefónica',
    title: 'Telefónica - Copérnico',
    year: '2025',
    category: 'Plantillas',
    categoryVariant: 'purple',
    thumbImage: 'projects/telefonica.jpg',
    thumbWidth: 900,
    thumbHeight: 900,
    thumbAlt: 'Logotipo de Telefónica',
    challenge:
      'Actualización y mantenimiento de plantillas corporativas de Telefónica, con cambios en HTML para asegurar la consistencia de la maquetación, y gestión básica de la base de datos en Oracle.',
    tech: ['HTML', 'Oracle (básico)'],
  },
  {
    id: 'Generalitat',
    title: 'Generalitat de Catalunya — GECO+',
    year: '2020 - 2024',
    category: 'Open CMS',
    categoryVariant: 'green',
    thumbImage: 'projects/logo_gene.png',
    thumbWidth: 250,
    thumbHeight: 288,
    thumbAlt: 'Escudo de la Generalitat de Catalunya',
    challenge:
      'Maquetación de componentes para la plataforma OpenCms de la Generalitat de Catalunya. Informes detallados de accesibilidad web, con análisis automáticos y manuales para detectar errores mediante el Observatorio de Accesibilidad del Gobierno de España y Siteimprove.',
    url: 'https://guiaweb.gencat.cat/ca/cataleg/',
    tech: ['HTML', 'PUG', 'CSS/SASS', 'jQuery', 'Bootstrap 3', 'WCAG', 'Siteimprove', 'Observatorio de accesibilidad', 'Git'],
  },
  {
    id: 'Feina Activa',
    title: 'Generalitat de Catalunya - Feina Activa',
    year: '2018 - 2020',
    category: 'Web Page',
    categoryVariant: 'orange',
    thumbImage: 'projects/feina_activa.jpg',
    thumbWidth: 400,
    thumbHeight: 198,
    thumbAlt: 'Logotipos del Departament d’Empresa i Ocupació y del Servei d’Ocupació de Catalunya',
    challenge:
      'Maquetación de los componentes del portal Feina Activa de la Generalitat de Catalunya.',
    url: 'https://feinaactiva.gencat.cat/es/home',
    tech: ['HTML', 'CSS/SASS', 'jQuery', 'Bootstrap 4', 'Atomic Design', 'Handlebars', 'Git'],
  }
];
