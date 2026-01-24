# The Nepal Discourse

This repository contains the marketing and information site for **The Nepal Discourse: Human Development, Artificial Intelligence, and the Next Generation of Leadership**.

It is a React + Vite + Tailwind-based single-page site designed to be deployed to **GitHub Pages** at:

- `https://rayraycodes.github.io/thenepaldiscourse`

## Tech stack

- **React 18** with **TypeScript**
- **Vite** for fast dev and production builds
- **Tailwind-inspired utility CSS** via the generated `index.css` and custom `globals.css`
- **Radix UI** components and **motion** for accessible, animated UI

## Local development

Prerequisites:

- Node.js 18+ (Node 22 is used in CI)
- npm

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

By default Vite will start on `http://localhost:3000` (see `vite.config.ts`).

## Building for production

To create an optimized production build:

```bash
npm run build
```

The output is written to the `dist/` directory (configured in `vite.config.ts`).

## GitHub Pages deployment

This project is configured to deploy automatically to **GitHub Pages** under the `thenepaldiscourse` sub-path.

- Vite is configured with:

```ts
// vite.config.ts
export default defineConfig({
  base: '/thenepaldiscourse/',
  // ...
});
```

- A GitHub Actions workflow at `.github/workflows/deploy.yml`:
  - Runs on pushes to the `main` branch
  - Installs dependencies
  - Runs `npm run build`
  - Uploads `dist/` as a Pages artifact
  - Deploys it using `actions/deploy-pages`

### Enabling GitHub Pages

1. Push this repository to `https://github.com/rayraycodes/thenepaldiscourse`.
2. In the GitHub UI, go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.

On the next push to `main`, the **Deploy to GitHub Pages** workflow should run and publish the site to:

- `https://rayraycodes.github.io/thenepaldiscourse`

## Accessibility (WCAG 2.1 AA)

The site includes several accessibility-focused improvements:

- Skip-to-content link and proper `main` landmark
- Strong `:focus-visible` outlines for interactive elements
- Keyboard-accessible navigation and responsive layout
- Motion sensitivity: marquee respects reduced-motion preferences

Further accessibility audits can be run with tools like Lighthouse or axe to continue refining the experience.


  # thenepaldiaspora

  This is a code bundle for thenepaldiaspora. The original project is available at https://www.figma.com/design/kPc5rHx7tIUtntY7N0ftqr/thenepaldiaspora.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  