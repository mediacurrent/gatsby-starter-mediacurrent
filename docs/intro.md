---
slug: '/docs/intro'
title: 'Docs | Intro'
---

## Installation

To use this on a new project run:

`npx gatsby new my-new-project https://github.com/mediacurrent/gatsby-starter-mediacurrent`

## nvm

Before running commands, you should do `nvm use` and install the version of Node.js mentioned if it's not already.

## ENV Variables

Create a `.env` file with the following values. This is temporary and will change and have an accurate error message to avoid confusion.

```
DRUPAL = '/foo'
DRUPAL_API_KEY = 123
```

## Usage

To start the project run:

`npm run start`

This should generate the site locally at `http://localhost:8000`, with the GraphiQL Explorer page at `http://localhost:8000/__graphql`.

## Storybook

To run Storybook, run:

`npm run storybook`

## Build

To build the site to static files, including Storybook, run:

`npm run build`

## Serve

To serve the static site locally, run:

`npm run serve`

## Live Demo

https://gatsbystartermediacurrent.gtsb.io/
