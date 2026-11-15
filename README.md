# Personal Portfolio

My personal portfolio: who I am, where I've worked, what I've shipped and what I'm building now.

**Live site:** [gregolive.github.io/portfolio](https://gregolive.github.io/portfolio/) 👈

## Features

- **Sections:** intro banner, bio, skills, experience, recent projects and a contact form, with a sticky header that highlights the section you're reading.
- **Light and dark mode:** follows your system setting on the first visit, then remembers your choice. Brand colors have lighter dark-mode versions, and project screenshots can have dark-mode versions that swap in with the theme.
- **Experience cards:** roles, responsibilities, skills and shipped feature highlights for each job, all in one card.
- **Projects:** screenshots, tech tags, repo and live links, plus an optional badge and "How it works" steps.
- **Screenshot carousel:** looks like a browser window, with a caption for each slide and autoplay. The progress pill shows when the next slide is due.
  - Autoplay pauses while your mouse is over the image, while you're using the keyboard inside it, and while it's off screen.
  - Swipe on touch screens; arrow keys and focus handling for keyboard users.
  - Click an image to open a full-screen lightbox.
- **Resume:** links in the header, bio and footer to a PDF in `public/`.
- **Contact form:** sends email through EmailJS, with built-in spam protection (see [Contact form](#contact-form)).
- **Accessibility:**
  - Respects reduced motion: no autoplay, and the typing animation swaps whole words.
  - Visible focus styles, labelled controls and screen reader friendly text.
- **Responsive:** works from phones to wide screens, with a mobile navigation menu.

## Tech stack

| Area | Tools |
|---|---|
| UI | [React 19](https://react.dev), [TypeScript](https://www.typescriptlang.org) (strict) |
| Styling | [styled-components 6](https://styled-components.com) with a typed light/dark theme, [Devicon](https://devicon.dev) icons |
| Build | [Vite 8](https://vite.dev) |
| Email | [EmailJS](https://www.emailjs.com) |
| Testing | [Vitest](https://vitest.dev), [Testing Library](https://testing-library.com), jsdom |
| Linting | ESLint 10 with typescript-eslint and the React Hooks plugin |
| Hosting | GitHub Pages via [gh-pages](https://github.com/tschaub/gh-pages) |

The typing animation, carousel, lightbox and section tracking are built in-house with small React hooks, with no extra libraries.

## Getting started

You'll need Node 22 or newer.

```sh
git clone git@github.com:gregolive/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173/portfolio/
```

### Environment variables

The contact form needs EmailJS keys. Create a `.env.local` file in the project root. It's gitignored.

```sh
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are in the [EmailJS dashboard](https://dashboard.emailjs.com):

- **Service ID:** Email Services
- **Template ID:** Email Templates
- **Public Key:** Account → General

Without the keys, the site still runs, but the form shows an error when you submit it.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload (`npm start` does the same) |
| `npm run build` | Type-check, then build the production site into `build/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the tests in watch mode (`npm test -- --run` runs them once) |
| `npm run lint` | Lint the project with ESLint |
| `npm run typecheck` | Type-check without building |
| `npm run deploy` | Build and publish `build/` to the `gh-pages` branch |

## Project structure

```text
src/
├── App.tsx                 Theme state and page layout
├── types.ts                Shared data types (Job, Project, Tag, CarouselImage…)
├── assets/
│   ├── helpers/            Site content: experience, projects, skills, links
│   ├── img/                Screenshots and logos, one folder per job or project
│   ├── fonts/
│   └── themes/             Light and dark theme values
├── components/
│   ├── header/             Navigation, theme switch, resume button
│   ├── home/               Page sections (banner, bio, skills, experience, projects, contact)
│   │   └── img-carousel/   Carousel and lightbox
│   ├── styled/             Shared styled-components (sections, card, code tags)
│   └── __tests__/
└── hooks/                  useTypewriter, useActiveSection, useInView, useSwipe…
public/                     Files served as-is (favicon, resume PDF)
```

Imports can use the `@/` alias for `src/`, so `@/assets/helpers/experience` instead of `../../../assets/helpers/experience`. The alias is set in `tsconfig.json`, and Vite reads it from there (`resolve.tsconfigPaths`).

## Updating content

All the content lives in typed data files in `src/assets/helpers/`, so most updates don't touch any components.

- **Experience:** add or edit a `Job` in `experience.tsx`. Fields:
  - roles, responsibilities and skill tags
  - `highlights` for shipped features, each with its own screenshots
  - `color` for the brand color, plus `darkColor` if that color is too dark to read on the dark theme
- **Projects:** add a `Project` to `recentProjects` in `projects.tsx`. Optional fields:
  - `badge`, a short label under the title
  - `pipeline`, numbered "How it works" steps
  - `darkColor`
- **Screenshots:** put them in `src/assets/img/<project>/`.
  - **Shape:** project carousels crop images to a 0.685 (portrait) aspect ratio, so capture at that ratio (for example 1096 × 1600) to avoid cropping.
  - **Dark mode:** add a `darkSrc` to show a dark version while dark mode is on.
  - **Captions:** keep them short (about 25 characters) so they fit in the carousel's title bar.
- **Skills:** add a `Tag` to `languages`, `frameworks` or `tools` in `skills.tsx`. Icons come from [Devicon](https://devicon.dev). Icons that are black need an entry in the dark-mode color rule in `skills/StyledSkills.ts` so they stay visible.
- **Resume:** save the PDF as `public/gregory-olive-resume.pdf`. To use a different file name, change `RESUME_URL` in `links.ts`. The PDF is also shareable directly at `https://gregolive.github.io/portfolio/gregory-olive-resume.pdf`.

## Contact form

The form sends email with [EmailJS](https://www.emailjs.com) and has several layers of spam protection:

1. **Hidden trap field:** a field people can't see or tab to. If a bot fills it in, it gets the normal "thanks" message, but nothing is sent.
2. **Minimum fill time:** a form submitted less than 3 seconds after the page loads is treated the same way.
3. **Rate limit:** one message per minute per browser, using EmailJS `limitRate`.
4. **Automated browsers:** browsers that identify themselves as automated are blocked, using EmailJS `blockHeadless`.

The EmailJS public key ships in the page, so for stronger protection also turn these on in the EmailJS dashboard:

- **Allowed domains:** restrict the key to `gregolive.github.io`.
- **CAPTCHA:** add one to the email template.

## Testing

Tests use Vitest with Testing Library and jsdom and cover:

- the app shell and navigation
- the experience data
- the carousel: slides, captions, dark-mode screenshots, and pausing only while the mouse is over the image
- the contact form's spam checks
- the typing animation

```sh
npm test -- --run
```

## Deployment

The site is hosted on GitHub Pages from the `gh-pages` branch.

```sh
npm run deploy
```

`npm run deploy` builds the site on your machine, so the EmailJS keys come from your local `.env.local`. Make sure it exists before deploying. Vite's `base` is set to `/portfolio/` to match the GitHub Pages URL.
