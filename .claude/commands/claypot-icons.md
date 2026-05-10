# Claypot Icon Skill

You are helping iterate on the inline SVG icons in `claypot.html` for ceramics.kavinlam.com.

## Icon design constraints (non-negotiable)

| Property | Value |
|---|---|
| viewBox | `0 0 48 48` |
| stroke-width | `1.75` |
| stroke | `currentColor` |
| fill | `none` |
| stroke-linecap | `round` |
| stroke-linejoin | `round` |
| Display size | `width="28" height="28"` inside a 64×64 `.cp-icon-stamp` circle |

All icons are **single-stroke outline style** — no fills, no gradients. Friendly, slightly imperfect proportions. Not Material/Feather geometric.

## Icon stamp wrapper (do not change)

```html
<div class="cp-icon-stamp">
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor"
       stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"
       width="28" height="28" aria-hidden="true">
    <!-- icon paths here -->
  </svg>
</div>
```

The stamp: 64px circle, `background: #FAFAFA`, `border: 1px solid #C97B5A` (terracotta).

## Current icons in claypot.html

### Flame (even heat benefit)
```svg
<path d="M24 42C15 42 10 35 12 27Q14 22 18 19Q17 25 21 27Q21 21 17 14Q23 10 26 16Q29 12 32 15Q35 20 33 26Q35 22 34 16Q39 22 37 29Q35 37 24 42Z"/>
```

### Droplet (moisture benefit)
```svg
<path d="M24 8C24 8 11 23 11 32C11 39 17 44 24 44C31 44 37 39 37 32C37 23 24 8 24 8Z"/>
<path d="M17 34C17 31 19 29 21 28" stroke-width="1.2" opacity="0.55"/>
```

### Leaf (mineral character benefit)
```svg
<path d="M24 41C24 41 9 30 11 17C13 7 24 7 24 7C24 7 35 7 37 17C39 30 24 41 24 41Z"/>
<line x1="24" y1="41" x2="24" y2="9"/>
<path d="M24 26C19 21 13 19 11 17"/>
<path d="M24 26C29 21 35 19 37 17"/>
```

### Hand (patina with use benefit)
```svg
<path d="M14 40V27Q14 25 16 25Q18 25 18 27V33"/>
<path d="M18 33V23Q18 21 20 21Q22 21 22 23V33"/>
<path d="M22 33V21Q22 19 24 19Q26 19 26 21V33"/>
<path d="M26 33V23Q26 21 28 21Q30 21 30 23V33"/>
<path d="M30 33V27Q30 25 32 25Q34 25 34 27V34Q34 41 24 41Q14 41 14 40"/>
```

### Bowl with rice + chopsticks (claypot rice recipe)
```svg
<path d="M9 24H39"/>
<path d="M11 24Q12 37 24 39Q36 37 37 24"/>
<ellipse cx="19" cy="17" rx="2" ry="3.5" transform="rotate(-15 19 17)"/>
<ellipse cx="24" cy="15" rx="2" ry="3.5"/>
<ellipse cx="29" cy="17" rx="2" ry="3.5" transform="rotate(15 29 17)"/>
<line x1="15" y1="9" x2="18" y2="22"/>
<line x1="20" y1="7" x2="22" y2="22"/>
```

### Pot with steam (miso hot pot recipe)
```svg
<path d="M17 15 Q14 11 17 8 Q20 5 17 2" stroke-width="1.5"/>
<path d="M31 15 Q28 11 31 8 Q34 5 31 2" stroke-width="1.5"/>
<ellipse cx="24" cy="21" rx="14" ry="4"/>
<path d="M10 21Q9 35 24 37Q39 35 38 21"/>
<path d="M10 24Q6 24 6 28Q6 32 10 32" stroke-linecap="round"/>
<path d="M38 24Q42 24 42 28Q42 32 38 32" stroke-linecap="round"/>
```

### Mushroom (kabocha recipe — swap for kabocha icon when ready)
```svg
<path d="M12 27 Q10 14 24 12 Q38 14 36 27Z"/>
<line x1="14" y1="27" x2="16" y2="33"/>
<line x1="24" y1="27" x2="24" y2="35"/>
<line x1="34" y1="27" x2="32" y2="33"/>
<path d="M20 33 Q19 41 24 43 Q29 41 28 33"/>
```

---

## Hero illustration constraints

The large hero claypot SVG uses explicit earth-tone fills (not currentColor):
- Body / lid fill: `#D9C9B5`
- Knob / foot ring / handles fill: `#C8B49A`
- Stroke: `#6B5744`, `stroke-width="1.5–1.75"`
- Steam wisps: `stroke="#C8B49A"`, wavy S-curve paths, no fill

---

## How to use this skill

When the user describes a change (e.g., "make the flame look rounder", "draw a kabocha icon", "redraw the hand as a single loop"), do the following:

1. Read `claypot.html` to get the current SVG paths for the target icon.
2. Design new SVG paths that fit the 48×48 viewBox and style rules above. Keep paths minimal — prefer 1–3 `<path>` elements per icon.
3. Show the user the new SVG snippet with a brief explanation of the visual change.
4. Apply it to `claypot.html` with the Edit tool, replacing only the inner paths of the relevant icon (keep the outer `<svg>` wrapper intact).
5. After editing, confirm which icon changed and ask if they want further tweaks.

**Kabocha icon TODO**: When the user asks to replace the mushroom on the kabocha recipe card with a proper kabocha icon, draw a rounded squash shape: a slightly flattened oval body, ribbed with 3–4 gentle vertical curves, a short stem, and a small leaf curl. Keep it within 48×48, single-stroke.

## Tips for drawing SVG paths in 48×48 space

- Center of icon is at (24, 24)
- Safe drawing area: roughly (6, 4) to (42, 44) with padding
- Use `Q` (quadratic Bézier) for gentle curves
- Use `Z` to close paths cleanly
- Avoid coordinates outside 0–48
- Test visual balance: icons should feel centered and fill about 70% of the viewBox
