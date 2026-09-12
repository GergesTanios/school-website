# News articles and homepage Hero

Edit **`src/data/news.ts`**. The `newsArticles` array is the single source for the
homepage Hero, homepage news cards, `/news` and `/news/:slug`. The three supplied
articles each contain English, French and Arabic translations. The Arabic title,
excerpt and full paragraphs are preserved verbatim. No publication dates have been
invented. The existing language selector updates article content, categories, alt
text and SEO immediately without changing the URL or restarting the active slide.

```ts
{
  id: '4',
  slug: 'my-new-article', // unique; shared by all languages
  images: ['/images/news/example-1.jpg', '/images/news/example-2.jpg'],
  date: '2026-09-12', // optional confirmed publication date
  featured: true,
  translations: {
    en: {
      title: 'Article title',
      excerpt: 'Short summary',
      category: 'School Life', // optional
      imageAlt: 'Describe the photograph', // optional; defaults to title
      content: ['Paragraph one', 'Paragraph two'],
    },
    fr: {
      title: 'Titre de l’article',
      excerpt: 'Résumé court',
      category: 'Vie scolaire',
      imageAlt: 'Décrire la photographie',
      content: ['Premier paragraphe', 'Deuxième paragraphe'],
    },
    ar: {
      title: 'عنوان المقال',
      excerpt: 'ملخص قصير',
      category: 'الحياة المدرسية',
      imageAlt: 'وصف الصورة',
      content: ['الفقرة الأولى', 'الفقرة الثانية'],
    },
  },
}
```

Add only this one object; no component or route edits are needed. The type requires
all three translations for authored articles. At runtime, `getArticleTranslation`
and `resolveArticleTranslation` safely fall back from the selected language to
English, French, then Arabic if a translation is temporarily missing. The latter
also supplies the actual content language for correct fallback text direction.
If all translations are absent, they return empty content rather than crashing.
Regional language codes such as `fr-FR` and `ar-LB` are normalized. Category filters
use their English fallback labels as stable keys, so switching language preserves
the selected category. Keep category labels consistent among related articles.

Use unique IDs and slugs. Add actual files under **`public/images/news/`** and
reference them as `/images/news/...`. Supply `news-1.jpg`, `news-2.jpg` and
`news-3.jpg` for the initial articles. Missing images display a branded pending
surface instead of a broken image or unrelated photo. No image files were
invented. The first image is used for the Hero, card thumbnail and article cover;
all later images form the detail page gallery. An empty images array is safe.

Only articles with `featured: true` enter the Hero, in array order. Each receives
3 seconds after the logo intro is complete, with a scale 1 → 1.06 zoom and a 600ms
crossfade. Manual arrows/dots restart both the timer and zoom, even when selecting
the current dot. The outgoing zoom freezes at its current scale, then fades out.
Pause and hidden-tab behavior preserve the remaining slide time. Reduced motion
disables zoom but keeps the slideshow and crossfade; a pause control is available.

Zero featured articles show a simple news link; one featured article stays in
place without unnecessary controls. Unknown slugs show a translated not-found
message and a link back to News. Each article's title/excerpt supplies its SEO
metadata. Existing routes and Netlify's SPA rewrite remain unchanged; the only new
route pattern is `/news/:slug`.

`NewsArticle` is a plain serializable type. A future API can return the same shape;
no news Supabase integration has been added. Existing upcoming-event drafts remain
in their separate `events` array. Earlier draft story entries have been replaced
by the provided articles; no duplicate article copy is stored in locale files.

## Validation

Production build and ESLint pass. Browser checks cover EN/FR/AR Home, News and all
three article routes at 375, 768, 1024 and 1440px. Additional checks cover live
language switches, shared URLs/images, unchanged Arabic source paragraphs,
translation fallbacks, stable category selection, and slider timing/zoom resets.
The existing non-blocking Vite bundle-size warning remains.
