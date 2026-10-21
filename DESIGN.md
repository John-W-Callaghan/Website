# Design system

One stylesheet (`site.css`) serves all three pages. Every colour, size and space below is a
custom property on `:root`; components use only tokens.

## Direction

A printed engineering document, not a product landing page. Left-aligned, single reading
column, hairline rules instead of boxes, one accent colour used for links and nothing else.
The page should still read correctly in black and white.

Deliberately avoided: dark navy + neon/amber, fake terminals, `//` and `01.` eyebrows,
ALL-CAPS micro-labels, pill tags, identical card grids, generated placeholder thumbnails,
count-up stats, scroll-fade on every section, gradient underlines, emoji icons.

## Colour

| Token            | Light     | Dark      | Use                              |
|------------------|-----------|-----------|----------------------------------|
| `--paper`        | `#FAFAF7` | `#111315` | Page background                  |
| `--ink`          | `#17191E` | `#ECEDEE` | Headings, names                  |
| `--ink-2`        | `#3B3F48` | `#C4C7CC` | Body copy                        |
| `--muted`        | `#676C77` | `#8C919A` | Dates, metadata, secondary text  |
| `--rule`         | `#E4E3DD` | `#26292E` | Hairlines, input borders         |
| `--accent`       | `#1E6A4E` | `#6CC79E` | Links, focus ring, active filter |
| `--accent-wash`  | `#E7F0EB` | `#17251F` | Selection, active filter fill    |

Deep green was chosen over the usual blue/amber: it reads as "verified/pass" (fitting for a
security engineer) without the neon-terminal cliché. All text pairs meet WCAG AA (muted on
paper ≥ 4.5:1 in both themes). Dark mode follows `prefers-color-scheme`.

## Type

- **Newsreader** (display): name and section headings. A text serif with optical sizing gives
  the page a written, edited voice instead of a SaaS one.
- **IBM Plex Sans** (body/UI): engineered, neutral, with heritage in technical documentation.
- **IBM Plex Mono** (data): dates, tech stacks, counts. Never used for decoration.

| Role        | Family      | Size (px)        | Weight | Tracking | Line height |
|-------------|-------------|------------------|--------|----------|-------------|
| Hero        | Newsreader  | 40 → 60 (clamp)  | 500    | -0.02em  | 1.05        |
| Heading     | Newsreader  | 26 → 30          | 500    | -0.01em  | 1.2         |
| Subheading  | Plex Sans   | 17               | 600    | 0        | 1.35        |
| Body        | Plex Sans   | 16 (17 for lead) | 400    | 0        | 1.6         |
| Small       | Plex Sans   | 14               | 400    | 0        | 1.5         |
| Data        | Plex Mono   | 13               | 400    | 0        | 1.5         |

Sentence case everywhere. No uppercase labels.

## Space, radius, shadow

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 (`--s-1` … `--s-9`).
- Radius: `--r-sm 4px` (inputs, buttons), `--r-md 6px` (photo). Nothing is pill-shaped.
- Shadows: none. Separation comes from rules and whitespace.

## Layout

- Container: max 1040px with a 20px gutter on phones, 32px from 768px up.
- Home sections are a two-column grid from 768px up: a 180px label column holding the
  section heading, and a content column capped at 680px (~70 characters).
- Below 768px everything stacks in one column.
- Lists of things (projects, roles, certificates) are rows separated by hairlines, not cards.

## Animation

Motion is functional only, with one orchestrated moment.

| Element                      | Motion                                 | Why                             |
|------------------------------|----------------------------------------|---------------------------------|
| Home intro (once, on load)   | opacity 0→1, translateY 6px→0, 420ms   | The single hero moment          |
| Link/button colour on hover  | colour/background, 150ms (CSS)         | Pointer feedback                |
| Project details toggle       | none: instant show/hide                | Content should not wait         |
| Section reveals on scroll    | none                                   | Readers scan; fades slow them   |
| Stats, tags, timeline        | none                                   | Removed                         |

Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)`. Only `opacity` and `transform` animate.
Hover rules sit inside `@media (hover: hover)` so touch devices never get stuck states.
`prefers-reduced-motion: reduce` disables the intro entirely.
