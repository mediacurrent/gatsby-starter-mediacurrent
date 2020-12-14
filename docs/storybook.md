---
slug: '/docs/storybook'
title: 'Docs | Storybook'
---

# Storybook

[Storybook](https://storybook.js.org/) is an open source tool for developing UI components for React. it is great for building components in isolation (you don't have to wait on Drupal or the other data source to be ready) and for visualizing variations of components by tying their props to dynamic controls.

There are, however, some tricky things to get Storybook working with React + Gatsby. The starter should have it working out of the box, but it is worth highlighting some of the configuration under the hood making it work.

## Starting Storybook

To run Storybook locally:

```
npm run storybook
```

This will start Storybook at http://localhost:6006

## Static Queries

The start command hides some magic that helps Storybook work with Gatsby. One of the main considerations is the existence of static queries. These expect Gatsby's GraphQL server to be running but it is not. To solve this, there is a `prestorybook` npm script that runs first and runs `copy-static-queries`, which moves the static queries to the correct folder, so that they can be removed by Babel. The 'why' isn't really important, [more info can be found here](https://github.com/gatsbyjs/gatsby/issues/26099#issuecomment-686775249).

## Hooks

Another 'gotcha' with Storybook, is the use of custom React hooks with storyshots (the Jest snapshot tester that runs on top of Storybook). For these to work with Storybook, they need to be mocked inside the `storyshots.test.js` file to return mock data.

## The `.storybook` Directory

Let's look at each file in the directory to see what it does.

### snapshots directory

This directory is auto generated for snapshot testing and should not be touched.

### .babelrc

Here we tell Storybook how our incoming code should be transformed. We are allowing lazy loaded components with the `@loadable` plugin (you may not be using these but it's good to have). We are also using the babel preset for Gatsby code.

### locationDecorator.js

This file has a quick fix for wrapping all components to allow the router to work.

### main.js

Here we define the glob for sourcing stories, and tell Storybook which plugins we are using.

### manager.js

Where we set some global config options for Storybook.

### preview-head.html

This file allows you to insert scripts or stylesheets into the `<head>` of the Storybook. Useful for things like fonts.

### preview.js

Here we are setting some globals and overrides that are otherwise set by Gatsby. We are also importing global css here and attaching our decorators.

### storyshots.test.js

Where we turn on the storyshot testing and mock custom hooks if needed.

### webpack.config.js

This is where we set/override the webpack config for Storybook. In our case, this config is published and centralized as [`@mediacurrent/storybook-config-gatsby`](https://github.com/mediacurrent/storybook-config-gatsby/blob/main/index.js) so we can push out uniform updates to projects if needed.
If something project specific needs to be added here, that base config can still be overridden.

## Writing Stories

The starter comes with an example story for the `Foo` component, as well as several stories for global aspects like typography and colors. These should be a good starting point for patterns to follow.

### Container/Component Pattern

As mentioned in the [components](/docs/components) docs, using the container/component pattern is important for being able to develop a component in isolation from its data. That is especially important for a visual tool like Storybook.
