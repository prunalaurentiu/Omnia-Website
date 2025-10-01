# Omnia Website

This repository contains the Vite + React implementation of the "Enhance Website for Investment" design. The project has been flattened so it can be deployed or tested directly from the repository root.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at the URL printed in the terminal (for example `http://localhost:5173`).

3. Build the production bundle:
   ```bash
   npm run build
   ```

## Project structure

- `src/` – React components, styles, and other source files generated from the Figma design.
- `index.html` – The Vite entry HTML file.
- `vite.config.ts` – Vite configuration.

## Testing locally via GitHub Codespaces or locally

If you're using GitHub Codespaces, you can run `npm run dev -- --host 0.0.0.0 --port 5173` to expose the dev server, then use the forwarded port to view the site. Locally, simply run `npm run dev` and open the printed URL in your browser.

## Deployment

You can deploy the built files (from the `dist/` directory after running `npm run build`) to any static hosting provider such as GitHub Pages, Netlify, or Vercel.
