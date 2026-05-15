# Tsaur Design System — Extracted from tsaur.com index.html

## Overview
Warm, editorial, paper-textured aesthetic. Think "printed index of side projects" — not SaaS, not dark-mode-tech. Uses color-per-project as a unifying thread across all pages.

## Color Tokens

### Base (Paper theme — default)
```css
--bg:        #f6f1e6;   /* warm cream/parchment */
--bg-deep:   #ede6d4;   /* slightly deeper cream for recessed areas */
--ink:       #14110d;   /* near-black, warm */
--ink-soft:  #4a463e;   /* secondary text */
--ink-mute:  #8a8579;   /* tertiary/metadata text */
--rule:      #d6cdb8;   /* borders, dividers */
--accent:    #d24317;   /* vermillion — primary accent */
```

### Dark theme variant
```css
--bg: #0e0d0b; --bg-deep: #161410; --ink: #f4ede0;
--ink-soft: #b3ad9e; --ink-mute: #6a655a; --rule: #2a2722;
```

### Project Colors (each project gets ONE color)
```css
--c-chalk:   #d24317;  /* vermillion — Chalk (pool tracker) */
--c-atlas:   #1f6feb;  /* cobalt — Atlas */
--c-field:   #0f7a4a;  /* moss — Field Notes */
--c-loop:    #e0a800;  /* mustard — Loop */
--c-ledger:  #7c3aed;  /* violet — Ledger */
--c-garden:  #c2185b;  /* fuchsia — Garden */
```

## Typography

### Font Stack
- **Display/UI**: `"Inter Tight", "Helvetica Neue", sans-serif` — weight 400–900
- **Serif accents**: `"Instrument Serif", "Times New Roman", serif` — italic lede text, decorative emphasis
- **Mono (metadata)**: `"JetBrains Mono", ui-monospace, Menlo, monospace` — section numbers, labels, tags, dates

### Type Scale
- Hero mark: `clamp(120px, 28vw, 460px)`, weight 800, letter-spacing -0.06em, line-height 0.78
- Section heading (large): `clamp(40px, 5.2vw, 88px)`, weight 700, letter-spacing -0.04em
- About lede: `clamp(36px, 5.6vw, 92px)`, weight 600, letter-spacing -0.035em
- Hero lede (serif italic): `clamp(22px, 2.2vw, 34px)`, line-height 1.15
- Body/preview: 16px, line-height 1.45
- Mono labels: 11–12px, letter-spacing 0.04–0.08em, uppercase

### Feature Settings
```css
font-feature-settings: "ss01", "cv11";
-webkit-font-smoothing: antialiased;
```

## Layout Patterns

### Grid System
- 12-column background grid lines (decorative, 7% opacity multiply blend)
- Content max-width implied by 28px side padding
- Section headers: `grid-template-columns: 80px 1fr 1fr` (number | title | count)
- Project rows: `grid-template-columns: 80px 0.9fr 2.2fr 1fr 60px` (number | host | name | tags | year)

### Spacing
- Side padding: 28px (consistent everywhere)
- Section top padding: 80px
- Project row padding: 28px vertical
- Footer padding: 80px top, 28px bottom

### Borders
- Section dividers: `1px solid var(--rule)` (cream-colored)
- Marquee strip: `1px solid var(--ink)` top and bottom (strong)
- Footer border-top: `1px solid color-mix(in oklch, var(--bg) 30%, transparent)`

## Components

### Hero
- Sticky hero (100vh) with scroll runway (200vh container)
- Large wordmark with per-letter coloring (each glyph = one project color)
- Dot accent in loop/mustard color
- Meta row: 3-column grid with mono labels
- Serif italic lede underneath
- Animated scroll cue bar (stretch keyframe, 2.4s)

### Marquee Strip
- Horizontal scrolling text band between hero and content
- Content: taglines separated by serif italic star (✶) characters
- Stars colored per-project in rotation (6n+1 through 6n+6)

### Project Row (expandable)
- Colored dot swatch (10px circle, scales 2x on hover)
- Row hover: shifts padding, adds `color-mix(in oklch, var(--c) 6%, transparent)` background
- Name turns project color on hover
- Arrow `↗` translates right + rotates -45deg on hover
- Expandable preview panel: 420ms cubic-bezier(.2,.7,.2,1) max-height transition
- Preview: 2-column grid (preview image + copy), with "VISIT" link

### Tags/Pills
- Mono 11px, uppercase, 0.04em spacing
- `padding: 4px 10px`, `border: 1px solid var(--rule)`, `border-radius: 999px`

### Status Indicators
- "● LIVE" — filled circle, project color
- "○ WIP" — outline circle

### Now/Activity Grid
- 3-column grid, no gap, bordered cells
- Colored top-bar on hover (3px, project color, scaleX transition)
- Labels in mono/uppercase/project color

### Footer
- Inverted colors (ink bg, cream text)
- Radial gradient color blobs (chalk, atlas, ledger at 50-55% opacity)
- Large display type "say hello." with gradient text on "hello"
- 4-column link grid

## Motion

### Transitions
- Row hover: `padding 320ms cubic-bezier(.2,.7,.2,1)`, `background 320ms`
- Dot scale: `280ms cubic-bezier(.2,.7,.2,1)`
- Name color: `280ms`
- Preview expand: `max-height 420ms cubic-bezier(.2,.7,.2,1)`
- Now-cell top bar: `360ms cubic-bezier(.2,.7,.2,1)`

### Animations
- Scroll cue bar: `stretch 2.4s ease-in-out infinite` (scaleX 0.2 → 1 → 0.2)
- Marquee: continuous translate
- About section: word-by-word opacity/transform on scroll

### Interaction Paradigm
- Hover = shift + color reveal (not just opacity change)
- Expand/collapse on click for project details
- `cursor: pointer` on clickable rows

## Anti-Patterns (things the design deliberately avoids)
- No dark-mode-by-default
- No glassmorphism or gradients on cards
- No emoji in UI (uses typographic symbols: ✶, ↗, ●, ○)
- No rounded card grids — uses bordered rows instead
- No hero images or illustrations — typography IS the hero
- No SaaS feature grids

## Responsive (≤880px)
- Hero meta: single column
- Project rows: `60px 1fr 50px` (hide host + tags columns)
- About meta: 2 columns
- Now grid: single column
- Footer: 2-column grid

## Applying to Sub-Pages (e.g., chalk.tsaur.com)

A project landing page should:
1. Use the SAME font stack, color tokens, and spacing system
2. Use the project's color as `--accent` (Chalk = `#d24317` vermillion)
3. Keep the paper/cream background, mono labels, editorial hierarchy
4. Include a topbar with navigation back to tsaur.com
5. Use the same hover/transition patterns
6. Feature a hero with the project name in display type
7. Use bordered rows/sections, not card grids
8. Include serif italic for descriptive lede text
9. Footer should link back to tsaur.com and use inverted colors
