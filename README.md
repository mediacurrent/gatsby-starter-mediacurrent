# gatsby-starter-mediacurrent
![Mediacurrent Logo](https://www.drupal.org/files/styles/grid-3-2x/public/mc-blue-mediacurrent.png?itok=YDAOeM5m)

## Purpose

A tool for starting and maintaing a Gatsby project at Mediacurrent.
This should aid in the following:

- creating a project with Mediacurrent standards already in place

## How is a Starter different from a Recipe?
While very similar, a Recipe allows for continuous reading from upstream for updates to the Recipe.  For example, a Starter with a Storybook configuration will work, but if the is ever an effort to do a major upgrade to Storybook and it causes breaking changes and fixes, with a Recipe that can happen once in the main Recipe and pulled down to other projects.

We still need to determine which areas are better suited to live in the Starter versus the Recipe.

## Areas of Impact

The Recipe aids in the following areas of a project:

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

## Installation

To use this on a new project run:

`npx gatsby new my-new-project https://github.com/mediacurrent/gatsby-starter-mediacurrent`

## nvm

Before running commands, you should do `nvm use` and install the version of Node.js mentioned if it's not already.

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
