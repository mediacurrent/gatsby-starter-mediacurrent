# gatsby-starter-mediacurrent

![Mediacurrent Logo](https://www.drupal.org/files/styles/grid-3-2x/public/mc-blue-mediacurrent.png?itok=YDAOeM5m)

## Purpose

A tool for starting and maintaing a Gatsby project at Mediacurrent.
This should aid in the following:

- creating a project with Mediacurrent standards already in place

**See demo here:** https://gatsbystartermediacurrent.gtsb.io/


## Installation

To use this on a new project:

- Run the `gatsby new` command: `npx gatsby new my-new-project https://github.com/mediacurrent/gatsby-starter-mediacurrent`
- Install the git hooks: `npm install husky`

## nvm

Before running commands, you should do `nvm use` and install the version of Node.js mentioned if it's not already.

If you have switched projects or this is a new version, you may need to `nvm install x.xx.x` or `npm rebuild node-sass`.

## ENV Variables

Create a `.env` file with the following values. This is temporary and will change and have an accurate error message to avoid confusion.

```
DRUPAL='/foo'
DRUPAL_API_KEY=123
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

## How is a Starter different from a Recipe?

While very similar, a Recipe allows for continuous reading from upstream for updates to the Recipe. For example, a Starter with a Storybook configuration will work, but if the is ever an effort to do a major upgrade to Storybook and it causes breaking changes and fixes, with a Recipe that can happen once in the main Recipe and pulled down to other projects.

We still need to determine which areas are better suited to live in the Starter versus the Recipe.

## Areas of Impact

The Starter aids in the following areas of a project:

- Basic project structure
- Common JS utilities
- ESLint
- Babel
- Prettier
- Sass-lint
- SVGs
- Storybook
- ENV Variables
- Jest test running
- Plop component generator

