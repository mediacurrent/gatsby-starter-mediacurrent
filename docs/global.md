---
slug: '/docs/global'
title: 'Docs | Global'
---

# Global

The `/src/global` folder serves two main functions:

- holding global styles
- holding global JS utilities

## Styles

The `/base`, `/utils`, and `_global.scss` are all related to styles. The styles in `/base` and `/utils` should be set up virtually the same as any Mediacurrent project. The styles are compiled to the `_global.scss` file and should be imported inside any Gatsby page or template component like:

`import '../../global/_global.scss';`

The `/stories` directory in global is for creating Storybook stories for some of the global styles.

## JS

The global folder will also hold files of JS utilities for use around the site. It starts with a `storybookHelpers.js`, `metatagsHelpers.js` and `propTypeHelpers.js` file. These contain some function for common Storybook dummy data or control knobs, some common propType shapes, and helper functions for using metatags from Drupal. Other helper files can be created in this folder.
