---
slug: '/docs/teardown'
title: 'Docs | Teardown'
---

# Teardown

Once this starter has been used to get a project going, it is time for connecting the site to your actual Drupal instance and removing any parts of the starter that were just there to get going. Here are the steps for removing the training wheels. At some point a CLI command could do a lot of this!

## Docs Plugin

The docs are hosted on Gatsby Cloud and can be safely removed from the starter without affecting the source. To remove:

- delete the `gastby-plugin-docs-demo` line from `gatsby-config`
- delete the `gatsby-transformer-remark` and its options from the bottom of `gatsby-config`
- delete the `gatsby-source-filesystem` and its options fromt the bottom of `gatsby-config`
- delete the `gatsby-plugin-docs-demo` folder from `./plugins`
- uninstall `gatsby-transformer-remark` (unless you are using Markdown in your actual site):
  - `npm uninstall gatsby-transformer-remark`

## Template Demo

The template demo is meant to give a living example of creating templated pages from a remote data source. Since your site is (probably) not going to be about dog breeds, this can be safely deleted. To remove:

- delete the `gastby-plugin-source-template-demo` line from `gatsby-config`
- delete the `gatsby-plugin-source-template-demo` folder from `./plugins`
- delete the `dog.js` template under `src/templates` and its CSS
- delete the `allDog` query in `src/pages/index.js`
- delete the list of dogs in the `ul` in `src/pages/index.js`

## Starter Files

### Foo Component

A `Foo` component exists to give an example of Jest, Storybook, etc. but can be deleted and referenced through Github whenever comfortable. To remove:

- delete `src/components/foo`

### Index Page

The Index page can be removed when you are ready to put your own data. To remove:

- delete the code inside the `IndexPage` function of `src/pages/index.js`
- delete the queries that are not used at the bottom of that file
- add your own markup to return here
- delete the `src/pages/index.module.scss` file

### Images

The starter comes with a Gatsby and Mediacurrent logo that can be deleted. To remove:

- delete `src/images/gatsby-logo.png`
- delete `src/images/mc-logo.png`

Keep the `images` folder though for future images, as it is already configured in `gatsby-config` with `gatsby-source-filesystem`.

## package.json

You can now change the `name`, `version`, `license`, `description`, etc fields in the `package.json` to suit your project.
