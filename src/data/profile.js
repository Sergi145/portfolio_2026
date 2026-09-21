// src/data/profile.js
// Fuente única de datos personales: hero, sobre mí, CTA, footer, SEO y JSON-LD.

const START_YEAR = 2018;

export const profile = {
  name: 'Sergi Picazo',
  role: 'Maquetador Front-end',
  specialty: 'especialista en accesibilidad web',
  email: 'sergipicazo14@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sergi-picazo-cami-a21766105/',
  github: 'https://github.com/Sergi145',
  availability: 'Abierto a nuevas oportunidades',
  // Ciudad y modalidad (p. ej. 'Barcelona · Híbrido o remoto'). Si está vacío, no se muestra.
  location: '',
};

// Años de experiencia calculados en cada build, para que hero, sobre mí y SEO coincidan.
export const yearsExperience = new Date().getFullYear() - START_YEAR;
