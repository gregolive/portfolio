# Personal Portfolio

My personal portfolio outlining my journey to become a web developer.

[Check it out](https://gregolive.github.io/portfolio/) 👈

## Features

- Light and dark mode
- Responsive across devices
- Mobile friendly navigation menu
- Built in email form

## Technologies & Libraries

- React
- Vite
- TypeScript
- Styled Components
- EmailJS
- iTyped
## Development

```sh
npm install
npm run dev        # start the dev server
npm test           # run tests in watch mode (vitest)
npm run lint       # eslint
npm run build      # type-check and build to ./build
npm run deploy     # build and publish ./build to GitHub Pages
```

The contact form needs EmailJS credentials. Create a `.env.local` file (it is git-ignored) before building:

```sh
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
