# SPEC 02 — Segundo proyecto personal: Librería de Componentes Accesibles

**State:** Implemented
**Depends on:** SPEC 01
**Date:** 2026-10-02

**Objetivo:** Añadir a la sección "Proyectos personales" una segunda tarjeta para la Librería de Componentes Accesibles (https://libreria-componentes-accesibles.vercel.app/?path=/docs/componentes-accordion--docs), reutilizando la infraestructura creada en SPEC 01.

---

## Alcance

### Dentro

- Nuevo elemento en el array `personalProjects` de `src/data/personalProjects.js`, añadido **después** del elemento existente de Auditorías A11y.
- Captura de la página de documentación del componente Accordion, hecha durante la implementación y guardada en `public/projects/libreria-componentes-accesibles.png`.

### Fuera

- Cambios en `ProjectCard.astro`, en la estructura de la sección `#proyectos-personales` de `index.astro` o en el nav de `Header.astro` (ya quedaron resueltos en SPEC 01 y no requieren tocarse).
- Enlace al repositorio de GitHub de la librería (solo se enlaza la página de Storybook).
- Enlazar a otros componentes de la librería distintos del Accordion, o a la portada del Storybook.
- Corregir que `categoryVariant: 'purple'` (usado en Auditorías A11y y en `projects.js`) no tenga estilo CSS definido — es un problema preexistente ajeno a esta spec.
- Cambios en la tarjeta de Auditorías A11y.

---

## Modelo de datos

Esta spec no introduce campos nuevos. Reutiliza el modelo de `personalProjects.js` definido en SPEC 01 (incluidos los campos opcionales `status` y `urlLabel` de `ProjectCard`).

### Nuevo elemento en `src/data/personalProjects.js`

```js
{
  id: 'Libreria Componentes Accesibles',
  title: 'Librería de Componentes Accesibles',
  year: '2026',
  status: 'En desarrollo',
  category: 'Librería de componentes',
  categoryVariant: 'green',
  thumbImage: 'projects/libreria-componentes-accesibles.png',
  thumbWidth: /* ancho real de la captura */,
  thumbHeight: /* alto real de la captura */,
  thumbAlt: 'Captura de la página de documentación del componente Accordion en la Librería de Componentes Accesibles',
  challenge:
    'Librería de componentes de UI accesibles construidos con HTML, CSS y JavaScript nativos, sin framework. Cada componente vive en su propia carpeta y es independiente: se puede copiar o importar por separado. Funciona con mejora progresiva (HTML semántico operativo sin JS) y el JavaScript añade gestión de foco y estados ARIA dinámicos.',
  url: 'https://libreria-componentes-accesibles.vercel.app/?path=/docs/componentes-accordion--docs',
  urlLabel: 'Ver componentes',
  tech: ['HTML', 'CSS', 'JavaScript', 'ARIA', 'Storybook'],
}
```

- `thumbWidth` / `thumbHeight`: se rellenan con las dimensiones reales de la captura generada en el paso 1.
- El array `personalProjects` queda con dos elementos: Auditorías A11y (primero) y Librería de Componentes Accesibles (segundo).

---

## Plan de implementación

1. **Captura de la app.** Abrir https://libreria-componentes-accesibles.vercel.app/?path=/docs/componentes-accordion--docs en el navegador, esperar a que cargue el contenido del Storybook (SPA), capturar la pantalla y guardarla en `public/projects/libreria-componentes-accesibles.png`. Anotar ancho y alto reales. *(El sitio sigue igual; solo se añade un asset.)*
2. **Dato nuevo.** Añadir el objeto del modelo de datos al final del array `personalProjects` en `src/data/personalProjects.js`, usando las dimensiones del paso 1. *(La sección ya itera el array, por lo que la tarjeta aparece automáticamente.)*
3. **Verificación.** `npm run build` sin errores y revisión visual en `npm run dev` (desktop, ≤900px, ≤576px), comprobando que ambas tarjetas se muestran correctamente una tras otra.

---

## Criterios de aceptación

- [ ] Existe `public/projects/libreria-componentes-accesibles.png` y sus dimensiones coinciden con `thumbWidth`/`thumbHeight` del nuevo elemento.
- [ ] `personalProjects` en `src/data/personalProjects.js` tiene 2 elementos: Auditorías A11y primero, Librería de Componentes Accesibles segundo.
- [ ] La nueva tarjeta muestra título "Librería de Componentes Accesibles", año "2026", badge "En desarrollo", categoría "Librería de componentes" (etiqueta verde) y las tecnologías HTML, CSS, JavaScript, ARIA, Storybook.
- [ ] El enlace de la nueva tarjeta dice "Ver componentes", apunta a `https://libreria-componentes-accesibles.vercel.app/?path=/docs/componentes-accordion--docs`, abre en pestaña nueva con `rel="noopener noreferrer"` y su nombre accesible incluye "(se abre en una pestaña nueva)".
- [ ] La tarjeta de Auditorías A11y no cambia respecto a SPEC 01 (mismos datos, sigue siendo la primera).
- [ ] `npm run build` termina sin errores.
- [ ] La nueva tarjeta se ve correctamente a >900px, ≤900px y ≤576px (sin desbordes horizontales).

---

## Decisiones tomadas y descartadas

| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| Añadir el proyecto como segundo elemento en `personalProjects.js` | Archivo de datos nuevo | SPEC 01 ya dejó el array preparado para varios proyectos; no hace falta estructura adicional. |
| Enlace directo a la página de docs del Accordion | Enlace a la portada del Storybook | Decisión del usuario: muestra un componente funcionando en vez de una portada vacía. |
| `urlLabel`: "Ver componentes" | "Ver documentación" | Decisión del usuario: describe mejor que se trata de una librería de componentes. |
| `categoryVariant: 'green'` | `'purple'` (como Auditorías A11y) | `tag--green` sí tiene estilo CSS definido en `BaseLayout.astro`; además diferencia visualmente las dos tarjetas. |
| Badge "En desarrollo" vía `status` | Sin badge de estado | Decisión del usuario: igual criterio de transparencia que en Auditorías A11y. |
| Posición: después de Auditorías A11y | Antes de Auditorías A11y | Decisión del usuario. |
| Texto de `challenge` basado en la descripción del stack dada por el usuario | Texto genérico | El usuario detalló el enfoque (sin framework, mejora progresiva, ARIA dinámica); se usa tal cual para no inventar funcionalidades no confirmadas. |
| Captura hecha durante la implementación | Imagen aportada por el usuario | Decisión del usuario, igual que en SPEC 01. |

---

## Riesgos identificados

- **Captura de una SPA.** Storybook renderiza el contenido en cliente; igual que en SPEC 01, la captura debe hacerse tras la carga completa de la página de docs del Accordion.
- **Enlace a una ruta con query string.** La URL incluye `?path=/docs/componentes-accordion--docs`; si Storybook cambia de versión o de estructura de rutas en el futuro, el enlace podría quedar roto (fuera del control de este repositorio).
