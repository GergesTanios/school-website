# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
# school-website

## Languages

The website uses `react-i18next`, initialized by `src/main.tsx` through
`src/i18n.ts`. English (`en`) is the default and fallback. The navbar selector
switches immediately and saves `lycee-language` in localStorage. Arabic (`ar`)
sets the document to RTL; English and French (`fr`) use LTR.

Edit `src/locales/en.json`, `src/locales/fr.json`, and `src/locales/ar.json`.
Keep matching keys in all three files. The official school name is defined once
per language at `school.name`; the editable Arabic value is `ثانوية مار الياس`.
Other translations refer to it through i18next nesting (`$t(school.name)`).
The location is at `school.location`.

For new pages, use `useTranslation()` and `t('section.key')` in the existing
component, with logical alignment/spacing utilities (`text-start`, `ps-*`,
`border-s-*`). Direction is inherited automatically. Keep email, telephone and
URL values LTR. Do not key a page or animated component by the selected language.
Arabic uses an Arabic-friendly system font stack without changing Latin fonts.

All rendered static sections are translated, including the four completed core
routes, form validation, image descriptions and navigation labels. Commented-out
legacy JSX is not rendered and may still contain English; translate it before
reactivating. URLs, email addresses, telephone numbers, logo artwork and entered
user data are deliberately unchanged. Contact delivery remains a local demo;
alumni registration retains its existing Supabase integration.

## Website audit

See [the audit and content handoff](docs/WEBSITE-AUDIT.md) for page coverage,
editable content locations, backend requirements and deployment notes.

## News-driven Hero

See [adding news articles and images](docs/NEWS-ARTICLES.md). All article content
now lives in `src/data/news.ts`; `/news/:slug` renders each article automatically.
