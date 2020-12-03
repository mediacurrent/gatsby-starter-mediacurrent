# gatsby-starter-mediacurrent

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

`npx gatsby new my-new-client-project https://github.com/mediacurrent/gatsby-starter-mediacurrent`
