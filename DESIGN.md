# Design System — Cabir Celik Portfolio

**Product:** Personal portfolio / career site for Cabir Celik — Lead Data
Scientist specializing in healthcare AI & clinical NLP. Hosted on GitHub Pages
at `cabir40.github.io/resume/`.

**Memorable takeaway:** "Healthcare AI specialist, full stop." Every section
should reinforce the clinical-NLP/healthcare-AI niche specifically — not a
generic "ML engineer" or "full-stack" framing.

**Direction:** Academic Credibility — warm, approachable researcher register
that foregrounds publications, the MSc thesis, and clinical-AI depth, while
still giving the production-engineering experience (6+ years shipping NLP
systems at John Snow Labs) enough visual weight to read as "ships to
production," not just "writes papers."

---

## Aesthetic

Calm, credible, academic-but-current. Soft pale-blue page background with
crisp white content cards, gentle shadows, rounded corners. Avoid: dark-navy
hacker-portfolio tropes, purple SaaS gradients, centered-everything layouts,
stock-photo vibes, bubble-radius-everything.

## Color

| Role | Value | Use |
|---|---|---|
| Page background | `#EAF1F8` (pale blue-gray) | body background |
| Card surface | `#FFFFFF` | section cards |
| Primary accent | `#3B6EA5` (slate blue) | links, nav active state, section labels |
| Secondary accent | `#2BA89A` (clinical teal) | tags, badges, hover states |
| Text — primary | `#1A2B3C` (deep navy) | headings, body |
| Text — muted | `#5B6B7B` | dates, secondary copy |
| Borders / dividers | `#D7E2EE` | card borders, hairlines |

## Typography

- **Display / headings:** Source Serif Pro — warm, academic, sets the
  "researcher" register without feeling stuffy.
- **Body:** Inter — clean, highly legible at small sizes.
- **Mono (tags, dates, skill badges, code references):** IBM Plex Mono —
  gives technical precision without going full "dark-mode terminal."

Scale: 16px base / 1.25 modular ratio. Headings tighten line-height (1.15);
body copy stays generous (1.6).

## Layout

- Single-page scroll, sectioned into rounded white cards (12px radius, soft
  `0 2px 12px rgba(26,43,60,0.08)` shadow) laid on the pale-blue page
  background — directly echoes the Hila Chefer reference's card rhythm.
- Simple top nav, sticky: **About · Experience · Publications · Projects ·
  Contact**.
- Hero: circular profile-photo placeholder + name/title/one-line positioning
  + a row of skill-badge pills (`Healthcare NLP`, `LLMs & RAG`, `Clinical
  De-identification`, `MLOps`) so the niche is visible before any prose loads.
- Generous whitespace; max content width ~880px, centered.

## Decoration

Minimal. No background motifs or illustrations. Visual interest comes from
card elevation, the slate/teal accent pairing, and mono-font badge pills —
not from imagery. Badge-pill rows (mirroring John Snow Labs' credibility-row
pattern) are the one recurring decorative device, used for skills, tech
stacks per project, and publication venues.

## Spacing

8px base unit. Section padding 48px (24px on mobile). Card internal padding
32px. Gap between stacked cards: 32px.

## Motion

Subtle only: 150ms ease-out fade/slide-up on scroll-into-view for cards;
hover states on links/badges shift to the teal accent with a 120ms color
transition. No parallax, no auto-playing animation.

## Content → Section Mapping

(See `resume.md` for canonical copy; translate, don't rewrite.)

1. **Hero/About** — name, title, one-line "healthcare AI specialist" framing,
   skill badges, profile links (LinkedIn/GitHub/Medium)
2. **Experience** — reverse-chronological cards (5 roles), John Snow Labs
   entry given the most visual space
3. **Education** — 3 degrees; MSc thesis gets a pull-quote-style abstract
4. **Publications & Writing** — thesis, "Beyond Negation Detection," SMM4H'22
   paper, John Snow Labs blog post, Medium — each links out
5. **Projects** — grid of project cards (12 from resume.md), tagged with
   tech-stack badge pills; `hls-llm-doc-qa` links to GitHub
6. **Certificates** — compact named list with issuers (links out, no PDFs)
7. **Contact / Profiles** — LinkedIn, GitHub, Medium, location, email
