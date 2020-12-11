---
slug: '/docs/jest'
title: 'Docs | Jest'
---

# Jest

Jest is a Javascript test runner that works with multiple frameworks. In this case we have it configured to work especially with React + Gatsby + Storybook.

## Configuration

### jest.config.js

The main configuration entry point is in the root of the project at `jest.config.js`. This file sets some of the basics like which files to look for, and also imports `jest.common` which has more of the config. We are also using the `projects` option to load configuration for specific file types (e.g. SCSS vs Storybook) and keep things organized.

The remaining files are stored in the `/jest` directory to keep the root cleaner.

### jest.common.js

This file stores configuration that is shared across `projects`.

### jest.loadershim.js

A file loaded from `jest.common.js` that is used for mocking things before testing begins. Here is where globals or ENV vars may be mocked.

### jest.setup.js

A file loaded from `jest.common.js` that is used for mocking things before testing begins. In the case of Gatsby, it is important to mock custom hooks and their return data here. This file loads _after_ `jest.loadershim.js`.

### jest.preprocess.js

This file handles code transformations with Babel. It has been set up with the plugins needed to work with Gatsby.

### jest.client.js

### jest.lint.js

### jest.scss.js

### jest.storybook.js
