
  # Enhance Website for Investment

  This is a code bundle for Enhance Website for Investment. The original project is available at https://www.figma.com/design/FE00MrQqHsuErczi64sptb/Enhance-Website-for-Investment.

  ## Running the code

  Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Managing insights content

Insight cards and article pages are powered by the editable content in `TextContentProvider`. To publish a new article without touching the components:

1. Open `src/components/TextContentProvider.tsx` and locate the `insights.articles` array.
2. Duplicate one of the existing entries and update the fields:
   - `slug`: a URL-safe identifier used in the route (e.g., `"future-of-b2b-saas"`).
   - `title`: the article headline shown on cards and the detail page.
   - `excerpt`: the short summary displayed on the insights grid.
   - `content`: the full body copy for the article. Separate paragraphs with blank lines to preserve spacing.
   - `date`, `readTime`, and `category`: metadata displayed on both the card and article header.
3. Save the file. When editors toggle edit mode in the CMS toolbar, they can fine-tune all of the copy directly on the site; changes persist in local storage.

Adding a new object to this array automatically creates a new `/insights/<slug>` route that renders the long-form article.
  