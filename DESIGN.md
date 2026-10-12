---
name: ClubNet San Carlos
description: Minimal, friendly community learning identity built around the original isotipo.
colors:
  navy: "#1B3457"
  navy-hover: "#274970"
  turquoise: "#19BBA8"
  orange: "#FF8446"
  yellow: "#FFE14D"
  white: "#FFFFFF"
  divider: "#c9d1db"
typography:
  display:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "clamp(34px,3.05vw,51px)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "clamp(36px,4.5vw,68px)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-.035em"
  title:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "25px"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-.035em"
  body:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "clamp(22px,2vw,30px)"
    fontWeight: 400
    lineHeight: 1.35
  button:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 900
    lineHeight: 1.3
rounded:
  button: "14px"
  hero-mobile: "10px"
  course: "24px"
  course-mobile: "18px"
spacing:
  gutter: "clamp(24px,3.7vw,64px)"
  mobile-gutter: "24px"
  section: "100px"
  section-tablet: "75px"
  section-mobile: "56px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    typography: "{typography.button}"
    padding: "13px 27px"
  button-primary-hover:
    backgroundColor: "{colors.navy-hover}"
  button-contact:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.button}"
    typography: "{typography.button}"
    padding: "13px 27px"
  button-contact-hover:
    backgroundColor: "{colors.white}"
  button-hero:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "11px 24px"
  course-excel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.course}"
    padding: "12px 32px"
  course-ingles:
    backgroundColor: "{colors.turquoise}"
    textColor: "{colors.navy}"
    rounded: "{rounded.course}"
    padding: "12px 32px"
  course-canva:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.course}"
    padding: "12px 32px"
---

# Design System: ClubNet San Carlos

## Overview

**Creative North Star: "El isotipo original da la bienvenida"**

Professional, friendly, playful and creative, with generous white space, rounded heavy lettering and solid color fields. Preserve the supplied original isotipo and the restrained visual language confirmed for proposal C.

This is a source extraction from `index.html`, `src/style.css` and `src/main.js`, including the final hero overrides, reviewed focus treatments and inline SVG arrows. `PRODUCT.md` owns product constraints; `SURFACE.md` owns the approved page composition. Runtime and visual verification belong to the main agent.

**Key Characteristics:**

- Original isotipo, unchanged in color and proportions.
- Navy reading color, white space and flat brand-color fields.
- Solid rounded controls and a single restrained entrance.

## Colors

### Primary

Navy carries reading text, headings, default actions and the dark contact field. Navy-hover is the implemented action hover treatment, not an additional brand color.

### Secondary

Turquoise carries the steps field and Inglés selection. Orange carries the course section.

### Tertiary

Yellow carries Canva selection, the contact action and text-selection background.

### Neutral

White carries the page, Excel selection and inverse text. Divider is the thin FAQ separator. Use the exact frontmatter values; the five brand colors remain those specified in PRODUCT.md.

## Typography

Use locally bundled Nunito Sans Latin at weights 400, 700 and 900; fallback is sans-serif and font synthesis is disabled. The scale is fluid and role-specific, not a fixed ratio. Headings are heavy with tight tracking; body copy stays regular, with paragraphs capped at 66ch (course note: 72ch).

The frontmatter describes desktop defaults. The final hero display becomes 3.6vw at 701–1100px and clamp(21px,6.3vw,44px) at ≤700px; its margin-bottom is zero. Mobile body is 17px; FAQ and course-detail copy are 16px. Mobile course heading is 36px. The text wordmark approximates the unavailable vector lettering: weight 900, tracking -.055em, line-height 1, size clamp(30px,3.35vw,52px); mobile 33px and footer 29px.

## Layout

Record the following as the current landing implementation, not a template imposed on other surfaces:

- Desktop header is absolute, with 26px vertical padding and the shared gutter. Hero height is 48.1vw, bounded by 620px minimum and 810px maximum. The original 2048:1893 image sits in a centered 55vw wrapper capped at 920px. Final title placement is top 51%, width 48%, horizontally centered; final CTA placement is top 71%, left 50%.
- At ≥1700px hero height is 810px and side notes sit 55px from the bottom. The later title override still wins: top 51%, not the earlier 45%.
- At 701–1100px hero height is 64vw with 560px minimum; image width is 65vw and top offset 40px. Notes sit 26px from the bottom. Section vertical padding is 75px and major column gaps are 40px. The final title remains top 51%, width 48%.
- At ≤700px header enters normal flow and navigation remains visible beneath it. Hero uses automatic height and visible overflow. The image wrapper becomes relative, viewport-wide through width calc(100% + 48px) and negative 24px side margins, with 42px bottom margin. Title remains centered at top 51%, width 48%; CTA moves to top 100% of the image wrapper. Notes flow below; location occupies the full row and community copy is capped at 32ch.
- Desktop project and steps use equal columns with 8vw gaps; FAQ uses 1fr/1.25fr with 6vw gap; contact uses 1.3fr/1fr with 8vw gap. All become blocks on mobile, with section padding 56px 24px.
- Course opening uses equal columns, a 32px gap and 220px minimum height; it becomes a block on mobile. Selection retains a four-column grid: Excel spans 1–3, Inglés 3–5 in row one, Canva 2–4 in row two. Inglés has 10px top margin; Canva overlaps by -8px, or -2px on mobile. Grid column gap is 18px, or 12px on mobile.
- Course field padding is 44px gutter 60px, becoming 35px 24px 40px. Footer wraps and uses 38px gutter, becoming 28px 24px. Anchored sections and course disclosures have 24px scroll margin.

## Elevation & Depth

The implementation has no shadows, gradients or backdrop filters. Large solid fields and thin separators establish structure; hover translation supplies limited movement without simulated elevation.

## Shapes

Use softly rounded filled actions and larger rounded course selectors, as named in the frontmatter. Sections remain rectangular. Course and step separators are 1px navy; FAQ separators use divider. Preserve the original raster at its natural aspect ratio, without recoloring, rotating or redrawing it.

## Components

### Actions and links

Primary actions are anchors with a 50px minimum height, 14px icon gap and heavy labels. The hero action uses a 44px minimum height and 16px label; tablet label/padding are 14px and 11px 18px. On mobile its label/padding are 15px and 12px 22px, with the hero-mobile radius. Other mobile buttons use 17px labels.

Focus is a 3px outline offset by 6px: navy for buttons, white for contact-section buttons, currentColor for other links and summaries. Default buttons lift 3px on hover; the centered hero action preserves translateX(-50%) and lifts 2px. The base active rule resets translateY to zero; no separate hero active rule exists, and the later hero hover transform wins while hovered.

Course-detail links are inline-flex, centered, with an 8px gap and 20×20px inline SVG arrows. General text links use a 12px gap and SVG width 20px with inherited height 26px. SVGs use currentColor strokes, width 1.8, rounded caps/joins and no fill.

### Course selectors

These are large anchors, not form chips: desktop minimum height 86px, fluid label clamp(28px,3.4vw,50px), weight 900 and tracking -.035em. Tablet uses 30px labels and 12px 22px padding. Mobile uses 65px minimum height, 29px labels, 12px 20px padding and course-mobile radius. Arrow sizes are 32px desktop and 24px mobile. Hover lifts 5px; keyboard focus uses the shared currentColor outline.

### Navigation and disclosures

Header navigation uses weight 700, size clamp(15px,1.25vw,20px), 10px vertical link padding and hover underlines. Mobile uses 14px labels, 12px gap and space-between; there is no collapsed menu.

Native details/summary controls provide course and FAQ disclosure. Summary minimum height is 72px with 18px vertical padding. Course labels use 30px/900 (26px mobile); mobile notes wrap below them and the plus remains positioned at right. The 22px plus contains two 18×2px strokes; opening rotates the vertical stroke to zero. Detail bodies have 26px bottom padding and 760px maximum width. FAQ summaries underline on hover. Footer sources use a smaller 44px summary.

Course links open their matching details on click and valid initial/hashchange navigation; malformed encoded hashes are ignored. Native anchors and disclosures remain usable without the enhancement. No input, form or generic card component is implemented.

### Motion

Button transforms run for .25s with cubic-bezier(.16,1,.3,1); background changes run for .2s with default CSS ease. Course hover runs for .3s with the same custom curve. Plus rotation runs for .2s with default ease.

Anime.js handles the short first-load reveal for the isotipo and hero copy. CSS owns the one-time fade/translate reveals for sections entering the viewport, the gallery crossfade, and pointer-only icon feedback so no two animation systems write the same `transform` or `opacity` at once. Motion stays on compositor-friendly properties, with short ease-out timings and no perpetual loop.

Reduced motion disables CSS transitions and animations, restores automatic scrolling, and skips the Anime.js entrance and scroll reveals. Hover transforms are also skipped by the pointer-motion guard.

## Do's and Don'ts

- Do preserve the original isotipo, exact brand palette and locally bundled rounded type.
- Do keep focus visible and native links and disclosures operable.
- Do preserve reduced-motion handling and the single restrained entrance.
- Don't introduce shadows, gradients or invented components into this documented system.
- Don't treat superseded hero declarations as the final responsive values.
- Don't turn this landing's approved composition into a universal layout requirement.

