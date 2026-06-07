# Design System — Cabir Celik Portfolio

**Product:** Personal portfolio / career site for Cabir Celik — Lead Data
Scientist specializing in healthcare AI & clinical NLP. Built with Eleventy,
deployed via GitHub Actions to GitHub Pages at `cabir40.github.io/resume/`.

**Memorable takeaway:** "The real expert in clinical NLP — full stop." Every
page should read like a respected research-journal profile: warm, confident,
substantive — not a generic blue/teal "healthcare-tech" look, and not the
dark-mode glassmorphism "AI engineer" look that competitor sites converge on.

**Direction:** Editorial / Clinical-Journal — replaces the earlier "Academic
Credibility" system outright (locked via `/design-consultation`, approved
"lock it in"). Reads like a print research journal brought online: running
heads, pull-quotes, journal-spread detail pages, hairline rules, a single
confident accent color.

---

## Aesthetic

Warm parchment background, crisp surfaces, full-serif voice (display +
body), one deliberate garnet accent. Decoration is "page furniture" — fine
hairline rules, mono running-heads (e.g. "Project Demos · Vol. 01 ·
Healthcare NLP / LLMs"), pull-quotes in italic display type. Avoid: dark-navy
hacker-portfolio tropes, glassmorphism, purple SaaS gradients, generic
blue/teal "healthcare-tech" palettes, stock-photo vibes.

## Color (CSS custom properties — light + dark)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F6F1E7` (parchment) | `#1C1916` | page background |
| `--surface` | `#FFFFFF` | `#26221E` | cards, theme toggle |
| `--surface-soft` | `#FBF6EC` | `#2E2924` | thesis/code blocks, media placeholders |
| `--text` | `#23201C` (ink) | `#EDE6D9` | headings, body |
| `--muted` | `#6B6259` | `#A89E8F` | dates, captions, secondary copy |
| `--accent` | `#9C2B3B` (garnet — the *one* accent) | `#D9707D` | links, active nav, pull-quote rule |
| `--accent-soft` | `#F1DCDD` | `#3A2227` | badges, pull-quote background |
| `--border` | `#E4DCCC` | `#3A352F` | hairlines, card borders |

Dark mode is **redesigned, not inverted** — warmer blacks, softened garnet.
Theme persists via `localStorage` (`theme` key) + `data-theme` attribute on
`<html>`, with an inline pre-paint script to avoid flash-of-wrong-theme and a
`prefers-color-scheme` fallback for first-time visitors.

## Typography

- **Display / headings:** Fraunces — warm, editorial, carries the
  "research-journal" register (titles, pull-quotes in italic).
- **Body:** Spectral, 17px / 1.65 line-height — generous, readable serif
  prose voice.
- **Mono (running-heads, dates, citations, tags, captions, code refs):**
  JetBrains Mono — gives the "page furniture" its precision.

Full-serif display+body pairing replaces the old Source Serif Pro / Inter /
IBM Plex Mono trio — the new system has no sans-serif anywhere.

## Layout

Hybrid, by page type:

- **"Me" page** — grid-disciplined hero + sidebar: hero (avatar, name,
  title, badges, profile links, bio) followed by six `<section>` blocks
  (About / Experience / Education / Publications / Projects / Contact), each
  with a mono `running-head` label. A sticky right-hand sidebar lists
  "01 · About" through "06 · Contact" as anchor links. Collapses to a
  horizontal row above content below 880px.
- **"Project Demos" pages** — creative-editorial journal-spread: index page
  lists demo cards (volume/issue/title/subtitle); detail pages render a
  running-head, title/subtitle, garnet pull-quote with citation, prose
  write-up, captioned media gallery (image/video/placeholder), and
  footnote-style primary/secondary link pills (source code, thesis, paper,
  related publication).

Max content width ~760px for prose-heavy columns; max page width 1100px.

## Decoration

Intentional "page furniture," not ornament:
- Hairline `--border` rules under running-heads and between body sections
- Mono running-head labels (`PROJECT DEMOS · VOL. 01 · HEALTHCARE NLP / LLMS`)
- Pull-quotes: italic Fraunces, garnet left-rule, accent-soft background,
  mono citation line
- Pen-underline link hover (`background-image: linear-gradient` sweep, not a
  static `text-decoration`)
- Badge pills (mono, accent-soft background) for skill/tech tags

## Spacing

8px base unit (`--space-1` … `--space-7`, 8px → 96px). Spacious density —
generous gaps between sections (`--space-6`) and within content
(`--space-2`/`--space-3`).

## Motion

Minimal and understated: ~200ms ease fades (`--motion-fade`) on theme switch
and link-hover underline sweep. Full `prefers-reduced-motion: reduce` support
collapses all transitions/animations to near-zero. No parallax, no
auto-playing media, no scroll-triggered reveals.

## Content → Page Mapping

The site is **fully markdown-driven** — see the "Markdown-driven content
model" section in [CLAUDE.md](CLAUDE.md) for the authoring workflow. Design
tokens above are implemented in `src/css/style.css`; templates live in
`src/_layouts/` and `src/*.njk`.

1. **"Me"** (`/`) — hero (from `content/me/about.md`) + six sidebar sections:
   About, Experience (`content/me/experience/*.md`), Education
   (`content/me/education/*.md`), Publications (`content/me/publications/*.md`),
   Projects (`content/me/projects/*.md`), Contact (`content/me/contact.md`)
2. **"Project Demos"** (`/project-demos/`) — index of demo cards, each
   linking to a journal-spread detail page generated from
   `content/project-demos/*.md` (one file = one page, via Eleventy
   pagination — adding a file adds a page, no template edits)
