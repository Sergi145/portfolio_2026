# SPEC 03 — Tercer proyecto personal: Informe de auditoría de accesibilidad de policia.es

**State:** Approved
**Depends on:** SPEC 01, SPEC 02
**Date:** 2026-10-08

**Objetivo:** Añadir a la sección "Proyectos personales" una tercera tarjeta que enlace a un informe de auditoría de accesibilidad de la home de policia.es (alojado como página estática en el propio portfolio), como ejemplo de que una puntuación Lighthouse del 100 % no sustituye a la auditoría manual.

---

## Alcance

### Dentro

- Copia del informe `C:\Users\Chech\Downloads\informe\informe-auditoria-policia.html` a `public/informes/auditoria-policia.html`, **sin modificar su contenido** (es un HTML autocontenido: CSS, JS e imágenes en base64 incluidas).
- Nuevo elemento en el array `personalProjects` de `src/data/personalProjects.js`, añadido **después** de Librería de Componentes Accesibles.
- Captura de la home de https://www.policia.es (1280×800), hecha durante la implementación y guardada en `public/projects/informe-auditoria-policia.png`.

### Fuera

- Cambios en `ProjectCard.astro`, en la estructura de la sección `#proyectos-personales` de `index.astro` o en el nav de `Header.astro`.
- Reconstruir el informe como página Astro o adaptarlo al estilo del portfolio.
- Editar el contenido del informe (hallazgos, textos, estilos) o corregir sus posibles problemas de accesibilidad/placeholders (p. ej. el título y la URL de la cabecera se rellenan por JavaScript; sin JS muestran el texto de marcador). Si se detectan, se tratan en otra spec.
- Un enlace "Volver al portfolio" dentro del informe (se abre en pestaña nueva; no se toca el archivo).
- Nuevo campo en `ProjectCard` o badge de estado.
- Cambios en las tarjetas de Auditorías A11y y Librería de Componentes Accesibles.

---

## Modelo de datos

Esta spec no introduce campos nuevos. Reutiliza el modelo de `personalProjects.js` (SPEC 01 y SPEC 02), sin usar el campo opcional `status`.

### Nuevo elemento en `src/data/personalProjects.js`

```js
{
  id: 'Informe Auditoria Policia',
  title: 'Informe de auditoría de accesibilidad: policia.es',
  year: '2026',
  category: 'Auditoría de accesibilidad',
  categoryVariant: 'green',
  thumbImage: 'projects/informe-auditoria-policia.png',
  thumbWidth: /* ancho real de la captura */,
  thumbHeight: /* alto real de la captura */,
  thumbAlt: 'Captura de la página de inicio del portal web de la Policía Nacional (policia.es), con el menú principal, el carrusel de imagen y las tarjetas de acceso rápido',
  challenge:
    'Auditoría de accesibilidad (WCAG 2.2 AA) de la página de inicio del portal de la Policía Nacional. Lighthouse da un 100 sobre 100 y WAVE no detecta ningún error, pero la revisión manual con teclado y lectores de pantalla (VoiceOver, TalkBack y NVDA) encontró 10 incidencias: 3 críticas, 6 moderadas y 1 leve. Es un ejemplo de por qué las herramientas automáticas no bastan y siempre hace falta una auditoría manual.',
  url: `${import.meta.env.BASE_URL}informes/auditoria-policia.html`,
  urlLabel: 'Ver informe',
  tech: ['WCAG 2.2 AA', 'Lighthouse', 'axe DevTools', 'WAVE', 'NVDA', 'VoiceOver', 'TalkBack'],
}
```

- `thumbWidth` / `thumbHeight`: dimensiones reales de la captura generada en el paso 2.
- `url` se construye con `import.meta.env.BASE_URL` (`/portfolio_2026/`) porque `ProjectCard` usa el valor tal cual en el `href`; así el enlace funciona en local y en producción sin modificar `ProjectCard`.
- El recuento (3 críticas / 6 moderadas / 1 leve = 10) sale del campo `AUDIT_DATA.findings` del informe; las "mejoras de usabilidad" del informe no cuentan como incidencias y no se mencionan en el `challenge`.
- El array `personalProjects` queda con tres elementos: Auditorías A11y, Librería de Componentes Accesibles e Informe de auditoría.

---

## Plan de implementación

1. **Alojar el informe.** Crear `public/informes/` y copiar el HTML a `public/informes/auditoria-policia.html` sin cambios. Comprobar con `npm run dev` que se abre en `/portfolio_2026/informes/auditoria-policia.html`, que se renderizan la puntuación, las incidencias y las imágenes. *(El sitio sigue igual; solo se añade un asset estático.)*
2. **Captura.** Abrir https://www.policia.es en el navegador, capturar la parte superior de la home y guardarla en `public/projects/informe-auditoria-policia.png` (1280×800). Anotar ancho y alto reales. *(Solo se añade un asset.)*
3. **Dato nuevo.** Añadir el objeto del modelo de datos al final del array `personalProjects` con las dimensiones del paso 2. *(La sección ya itera el array, por lo que la tarjeta aparece automáticamente.)*
4. **Verificación.** `npm run build` sin errores, comprobar que `dist/informes/auditoria-policia.html` existe y revisión visual en `npm run dev` (desktop, ≤900px, ≤576px) con las tres tarjetas una tras otra.

---

## Criterios de aceptación

- [ ] Existe `public/informes/auditoria-policia.html` y su contenido es idéntico byte a byte al archivo original.
- [ ] Tras `npm run build`, existe `dist/informes/auditoria-policia.html`.
- [ ] El `href` de la tarjeta es `/portfolio_2026/informes/auditoria-policia.html`, el informe se abre desde ese enlace (en local y, una vez publicado, en `https://sergi145.github.io/portfolio_2026/informes/auditoria-policia.html`) y muestra la puntuación 100, 3/6/1 incidencias y las imágenes.
- [ ] Existe `public/projects/informe-auditoria-policia.png` y sus dimensiones coinciden con `thumbWidth`/`thumbHeight` del nuevo elemento.
- [ ] `personalProjects` tiene 3 elementos en este orden: Auditorías A11y, Librería de Componentes Accesibles, Informe de auditoría.
- [ ] La nueva tarjeta muestra el título, el año "2026", la categoría "Auditoría de accesibilidad" (etiqueta verde), las 7 tecnologías y **no** muestra badge de estado.
- [ ] El enlace de la tarjeta dice "Ver informe", apunta a la URL del informe, abre en pestaña nueva con `rel="noopener noreferrer"` y su nombre accesible incluye "(se abre en una pestaña nueva)".
- [ ] Las tarjetas de Auditorías A11y y Librería de Componentes Accesibles no cambian respecto a SPEC 01 y SPEC 02.
- [ ] `npm run build` termina sin errores.
- [ ] La nueva tarjeta se ve correctamente a >900px, ≤900px y ≤576px (sin desbordes horizontales).

---

## Decisiones tomadas y descartadas

| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| Alojar el informe como HTML estático en `public/informes/` | Reconstruirlo como página Astro / alojarlo fuera | El informe ya es autocontenido; copiarlo tal cual evita alterarlo y no requiere infraestructura nueva. Decisión del usuario. |
| Copiar el archivo sin modificarlo | Retocarlo para integrarlo con el portfolio | Es el entregable de la auditoría; cualquier cambio queda fuera de esta spec. |
| `url` con `import.meta.env.BASE_URL` | URL absoluta con el dominio publicado (decisión inicial) / ruta fija `/informes/...` | La absoluta daba «documento no encontrado» en local y antes de publicar. `ProjectCard` no prefija `base`, y modificarlo está fuera de alcance; `BASE_URL` resuelve ambos casos. |
| Pestaña nueva con "Ver informe" | Misma pestaña | Mismo patrón que las demás tarjetas; el informe no tiene enlace de vuelta al portfolio. Decisión del usuario. |
| Sin badge de estado | "En desarrollo" / "Ejemplo" | El informe está terminado (fecha 08/10/2026). Decisión del usuario. |
| Miniatura: captura de la home de policia.es, hecha en la implementación | Captura del informe (decisión inicial) / imagen aportada por el usuario | Cambio pedido por el usuario durante la implementación: la miniatura muestra el sitio auditado. |
| `categoryVariant: 'green'` | `'purple'` | `tag--green` tiene estilo CSS definido; `purple` no (problema preexistente fuera de alcance, ver SPEC 02). |
| Posición: tercera, tras Librería de Componentes Accesibles | Antes de las otras | Se añade al final por defecto, como SPEC 02; el usuario no indicó otra. |
| `challenge` basado solo en datos literales del informe (puntuación 100, 10 incidencias 3/6/1, herramientas) | Texto genérico | Evita inventar hallazgos; refleja el mensaje que el usuario quiere transmitir. |

---

## Riesgos identificados

- **Captura de un sitio externo.** policia.es bloquea Chrome headless («Página bloqueada»); la captura se hizo con un navegador normal y puede quedar desactualizada si la home cambia.
- **Peso del informe.** ~450 KB por las imágenes en base64; se sirve como página independiente, así que no afecta a la carga del portfolio.
- **Dependencia externa del informe.** Carga IBM Plex desde Google Fonts; si falla, usa tipografías de reserva sin romper el contenido.
- **Contenido renderizado por JavaScript.** Puntuación, incidencias y priorización se pintan desde `AUDIT_DATA` con JS; sin JS el informe queda con marcadores. Es una limitación del archivo original, no se corrige aquí.
- **Mención de un organismo real.** El informe analiza el sitio de la Policía Nacional y cita fragmentos de su código público (fecha 07/10/2026). Es una auditoría con fines demostrativos; conviene que el usuario valide que está cómodo publicándola con su portfolio y que el contenido está al día, porque el sitio auditado puede cambiar.
- **Enlace en producción.** Hasta que la rama se fusione y se despliegue, el informe no existe en GitHub Pages; el enlace funciona en local y tras publicar.
