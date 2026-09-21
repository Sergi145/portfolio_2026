# SPEC 01 — Sección "Proyectos personales"

**State:** Implemented
**Depends on:** —
**Date:** 2026-09-21

**Objetivo:** Añadir al portfolio una sección "Proyectos personales", enlazada desde la navegación, que presente la aplicación Auditorías A11y (https://auditorias-a11y.vercel.app/bienvenida) reutilizando `ProjectCard`.

---

## Alcance

### Dentro

- Nueva sección `<section id="proyectos-personales">` en `src/pages/index.astro`, situada **después** de "Experiencia y proyectos" (`#proyectos`) y **antes** de Habilidades (`<Skills />`).
- Nuevo archivo de datos `src/data/personalProjects.js` con un único proyecto: Auditorías A11y.
- Extensión de `ProjectCard.astro` con dos campos **opcionales** y retrocompatibles:
  - `status` → badge junto al año (p. ej. "En desarrollo"). Si no existe, no se pinta nada.
  - `urlLabel` → texto visible del enlace. Si no existe, se mantiene "Ver sitio web".
- Nuevo enlace "Proyectos" en `navLinks` de `Header.astro`, apuntando a `#proyectos-personales`.
- Captura de la app hecha durante la implementación y guardada en `public/projects/auditorias-a11y.png`.

### Fuera

- Enlace al repositorio de GitHub (solo se enlaza la app).
- Componente de tarjeta nuevo o diseño "destacado" distinto al de `ProjectCard`.
- Página de detalle del proyecto o ruta propia.
- Más proyectos personales (la estructura los admite, pero esta spec solo añade uno).
- Cambios en los proyectos profesionales existentes o en el texto "Experiencia" del nav.
- Iconos u otros cambios visuales en `ProjectCard` más allá del badge de estado y el texto del enlace.

---

## Modelo de datos

### `src/data/personalProjects.js` (nuevo)

Mismo formato que `projects` en `src/data/projects.js`, más los campos opcionales `status` y `urlLabel`.

```js
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
    thumbWidth: /* ancho real de la captura */,
    thumbHeight: /* alto real de la captura */,
    thumbAlt: 'Captura de la pantalla de bienvenida de Auditorías A11y',
    challenge:
      'Aplicación web para auditores de accesibilidad que facilita la realización y gestión de auditorías. Desarrollada en Angular, funciona sin backend: toda la información se guarda en el localStorage del navegador.',
    url: 'https://auditorias-a11y.vercel.app/bienvenida',
    urlLabel: 'Ver aplicación',
    tech: ['Angular', 'TypeScript', 'localStorage', 'WCAG', 'Vercel'],
  },
];
```

- `thumbWidth` / `thumbHeight`: se rellenan con las dimensiones reales de la captura generada en el paso 1.
- `challenge`: texto provisional basado en lo que indicó el usuario (público: auditores de accesibilidad; Angular; sin BD, localStorage). Si durante la captura se ven funcionalidades concretas en `/funcionalidades`, se pueden añadir **solo si aparecen literalmente en la app**, sin inventar.

### Campos nuevos en `ProjectCard` (opcionales)

| Campo      | Tipo     | Por defecto       | Uso                                     |
|------------|----------|-------------------|-----------------------------------------|
| `status`   | `string` | — (no se pinta)   | Badge `tag tag--orange` junto al año    |
| `urlLabel` | `string` | `'Ver sitio web'` | Texto visible del enlace externo        |

---

## Plan de implementación

1. **Captura de la app.** Abrir https://auditorias-a11y.vercel.app/bienvenida en el navegador, capturar la pantalla de bienvenida y guardarla en `public/projects/auditorias-a11y.png`. Anotar ancho y alto reales. *(El sitio sigue igual; solo se añade un asset.)*
2. **Datos.** Crear `src/data/personalProjects.js` con el objeto del modelo de datos, usando las dimensiones del paso 1. *(Aún no se importa en ningún sitio.)*
3. **`ProjectCard` retrocompatible.**
   - Desestructurar `status` y `urlLabel`.
   - Si `status` existe, pintar `<span class="tag tag--orange">{status}</span>` en el `header`, tras el año.
   - Cambiar el texto fijo "Ver sitio web" por `{urlLabel ?? 'Ver sitio web'}`, manteniendo el `visually-hidden` " de {title} (se abre en una pestaña nueva)".
   - *(Los tres proyectos existentes se ven exactamente igual.)*
4. **Sección en `index.astro`.** Importar `personalProjects` y añadir, entre `#proyectos` y `<Skills />`:
   ```astro
   <!-- PROYECTOS PERSONALES -->
   <section class="section section--alt" id="proyectos-personales" aria-labelledby="personal-projects-title">
     <div class="container">
       <div class="section__header">
         <h2 class="section__title" id="personal-projects-title">Proyectos personales</h2>
       </div>
       <ul class="projects-list" role="list">
         {personalProjects.map((project) => (
           <li><ProjectCard project={project} /></li>
         ))}
       </ul>
     </div>
   </section>
   ```
5. **Navegación.** En `Header.astro`, añadir `{ href: '#proyectos-personales', label: 'Proyectos' }` a `navLinks` entre "Experiencia" y "Habilidades".
6. **Verificación.** `npm run build` sin errores y revisión visual en `npm run dev` (desktop, ≤900px, ≤576px y menú móvil).

---

## Criterios de aceptación

- [ ] Existe `public/projects/auditorias-a11y.png` y sus dimensiones coinciden con `thumbWidth`/`thumbHeight` en `personalProjects.js`.
- [ ] Existe `src/data/personalProjects.js` exportando `personalProjects` con un único elemento.
- [ ] En el HTML generado, `#proyectos-personales` aparece después de `#proyectos` y antes de `#habilidades`.
- [ ] La sección tiene un `<h2>` "Proyectos personales" referenciado por `aria-labelledby`.
- [ ] La tarjeta muestra título "Auditorías A11y", año "2026", badge "En desarrollo", categoría y las 5 tecnologías.
- [ ] El enlace de la tarjeta dice "Ver aplicación", apunta a `https://auditorias-a11y.vercel.app/bienvenida`, abre en pestaña nueva con `rel="noopener noreferrer"` y su nombre accesible incluye "(se abre en una pestaña nueva)".
- [ ] Las tres tarjetas de "Experiencia y proyectos" no muestran badge de estado y su enlace sigue diciendo "Ver sitio web".
- [ ] El nav muestra "Proyectos" entre "Experiencia" y "Habilidades"; al pulsarlo se hace scroll a la sección y, en móvil, el menú se cierra.
- [ ] `npm run build` termina sin errores.
- [ ] La tarjeta se ve correctamente a >900px, ≤900px y ≤576px (sin desbordes horizontales).

---

## Decisiones tomadas y descartadas

| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| Sección tras "Experiencia y proyectos" | Antes de Experiencia / tras Habilidades | El visitante ve primero la trayectoria profesional y a continuación la iniciativa propia. |
| Reutilizar `ProjectCard` con campos opcionales | Nuevo `PersonalProjectCard.astro` | Mínimo código nuevo y coherencia visual; los campos opcionales no afectan a las tarjetas existentes. |
| Datos en `src/data/personalProjects.js` | Exportar desde `projects.js` | Separa experiencia laboral de proyectos propios. El usuario no respondió explícitamente; se aplica la opción recomendada. |
| Solo enlace a la app | App + repositorio | Decisión del usuario. |
| Badge "En desarrollo" vía `status` | No indicar el estado | Transparencia: la app está en curso. |
| `urlLabel` configurable ("Ver aplicación") | Mantener "Ver sitio web" fijo | "Sitio web" no describe bien una aplicación. |
| Captura hecha durante la implementación | Imagen aportada por el usuario / sin imagen | Decisión del usuario. |
| Badge con `tag--orange` | `tag--gray` / nuevo color | Reutiliza variantes existentes y se distingue de las etiquetas de tecnología (grises). |
| Sección con `section--alt` | Fondo plano | Separa visualmente la sección de "Experiencia y proyectos" (fondo plano), que usa la misma lista de tarjetas. |
| Nav "Proyectos" | Sin enlace en nav | Decisión del usuario. |

---

## Riesgos identificados

- **Captura de una SPA.** La app es Angular y el contenido se renderiza en cliente; la captura debe hacerse tras la carga completa. Si no se puede generar, el paso 1 queda bloqueado y se pide al usuario una imagen.
- **Texto de `challenge` provisional.** No se pudo leer el contenido de la app (SPA); el texto se basa solo en lo que indicó el usuario. Conviene que lo revise.
- **Nav más largo.** Con un item más, el nav desktop entre 641px y ~900px puede apretarse; revisar en el paso 6.
- **Contraste del badge.** `tag--orange` debe cumplir WCAG AA sobre `--color-surface`; se asume que sí porque ya se usa en las tarjetas de categoría.
