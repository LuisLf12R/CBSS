# CBSS @ NYU Starter Website (Placeholder Version)

This is a complete starter website for the **Case-Based Study Society (CBSS)** at NYU.

It is intentionally built with **placeholder content** ("empty buckets") so you can showcase layout, design quality, and interactions before final copy/assets are ready.

## Project structure

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

## How to run locally

1. Download or clone the project.
2. Open `index.html` in your browser.

No build tools or dependencies are required.

## What is included

- Sticky, responsive navigation with mobile hamburger menu
- Hero section with CTA buttons
- Case library section with filter chips
- Upcoming events cards
- Team grid cards
- About / Mission section
- Contact form with client-side validation and demo success behavior
- Footer with quick links

## How to replace placeholder content

### Cases
Edit the `cases` array in `script.js`:

- `title`
- `category`
- `summary`
- `date`

### Events
Edit the `events` array in `script.js`.

### Team
Edit the `team` array in `script.js`.

### Contact details
Update placeholder email/social text in `index.html` (`#contact` section).

## Formspree integration notes

Currently, form submission is in **demo mode** and does not send data.

To connect Formspree:

1. Create a Formspree form and get your endpoint URL.
2. Replace the JavaScript demo submit behavior with a real `fetch` POST to Formspree OR set the form `action` and `method="POST"` in HTML.
3. Keep client-side validation for better UX.

## Customization tips

- Colors are defined as CSS variables in `:root` in `style.css`.
- Update typography and spacing globally there.
- Section layouts use CSS Grid/Flexbox and are mobile-first.

## Deployment (optional)

This project can be deployed as a static site on:
- GitHub Pages
- Netlify
- Vercel (static)

