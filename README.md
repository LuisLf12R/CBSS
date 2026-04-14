# CBSS @ NYU Website — v2 Starter (2026-Style, Accessible)

This project is an upgraded **v2** of the original CBSS static site, designed as a premium, content-ready shell with placeholder data that can be replaced as your real content is finalized.

## Files

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    └── icons/
```

## What's new in v2 (from v1)

- Modern visual system with expanded palette:
  - Primary NYU purple + vibrant accent colors
  - Improved neutral surfaces, contrast, and hierarchy
- Bolder typography using a serif/sans pair:
  - `Playfair Display` for major headings
  - `Inter` for body/UI text
- New and enhanced sections:
  - Hero redesign with animated gradient and social proof
  - **Featured Case** spotlight
  - Enhanced Case Library with search + category + year filters
  - Enhanced Events with **cards/timeline toggle** + next event countdown
  - About section with stats + pillars
  - Team filtering by role groups
  - Alumni/Member Stories carousel
  - Quick Event Signup form
  - Enhanced footer with newsletter signup
- Accessibility upgrades:
  - Skip-to-content link
  - Semantic landmark structure
  - Focus-visible states
  - Touch-friendly 44px targets
  - ARIA labels and live regions for feedback
- Improved interactivity:
  - Smooth navigation behavior
  - Scroll reveal animations
  - Form validation with clear, friendly messages
  - Progressive disclosure field in contact form

## Run locally

Open `index.html` in a browser.

No build step is required.

## Placeholder content model (easy replacement)

All primary sample data is in `script.js`:

- `CASES` array
- `EVENTS` array
- `TEAM` array
- `STORIES` array

Replace values there first to update card grids, timeline, and carousel quickly.

## Customization guide

### Colors & spacing
Edit CSS variables at the top of `style.css`:

- `--color-primary`
- `--color-accent`
- `--color-accent-2`
- `--space-*`

### Typography
Change:

- `--font-heading`
- `--font-body`

### Section order/content
Update semantic sections directly in `index.html`.

## Forms and production wiring

Current forms are **demo mode** only:

- Event signup (`#eventSignupForm`)
- Contact (`#contactForm`)
- Newsletter (`#newsletterForm`)

For production:

1. Add a backend endpoint or Formspree action.
2. Replace demo message handlers in `script.js` with real `fetch` submissions.
3. Keep validation + accessible error/success feedback.

## Suggested next v3 upgrades

- Connect CMS or JSON feed for cases/events/team updates
- Add real media assets with responsive `srcset`
- Add analytics for CTA tracking
- Add real alumni testimonials and logos
