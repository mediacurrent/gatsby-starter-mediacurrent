---
slug: '/docs/plop'
title: 'Docs | Plop'
---

# Plop

Plop is a [command line tool](https://plopjs.com/) for easily creating new files based on a template system. In this case, there are three starting templates:

- components
- templates
- pages

These should help you consistently create these in the project, without having to copy and paste or worry about forgetting something.

The templates are stored in the `/plop-templates` directory and consist of Handlebars templates.

## Example

To create a component you would run:

`npm run component ComponentName`

This will create the correct files in the project, and template the `ComponentName` inside the files.

The commands are made available in the `package.json`.

## Creating or modifying a command

The `plopfile.js` file on the root holds the commands and their config if you want to modify or create a new one.
