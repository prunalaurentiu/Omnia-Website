
  # Enhance Website for Investment

  This is a code bundle for Enhance Website for Investment. The original project is available at https://www.figma.com/design/FE00MrQqHsuErczi64sptb/Enhance-Website-for-Investment.

  ## Running the code

  Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment branch

All production deploys track the `Omnia-latest` branch. When opening a pull
request, set its base to `Omnia-latest` (or re-target the PR before merging)
so the changes ship to the live site.

## Managing insight articles

1. Open the site in edit mode with the on-page toolbar and update the insight cards. Each article now stores:
   - `slug` – the stable URL identifier used for the detail page (for example `future-of-b2b-saas`).
   - `excerpt` – the short summary surfaced on the cards and index pages.
   - `content` – the full body copy that renders on the dedicated article page. Line breaks are preserved.
2. To add a new article, use the editing toolbar to duplicate an existing insight card, update the fields above, and adjust the publication metadata (category, date, read time).
3. Editors can review long-form articles at `/insights/:slug` and browse the paginated archive at `/insights`.

The new fields are saved to local storage, so published changes persist between sessions without requiring code updates.
  