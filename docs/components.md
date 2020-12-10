---
slug: '/docs/components'
title: 'Docs | Components'
---

# Components

To use Gatsby, you will need a basic understanding of React components.

## What are components in React? <a id="6076"></a>

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties\(props\) and returns a React element that describes how a section of the UI \(User Interface\) should appear.

## Why React components? <a id="why-react-components"></a>

React’s component architecture simplifies building large websites by encouraging modularity, reusability, and clear abstractions. React has a large ecosystem of open source components, tutorials, and tooling that can be used seamlessly for building sites with Gatsby. Gatsby is built to behave almost exactly like a normal React application.

## Component Structure

Typical component structure will consist of:

```text
└── src
  └── components
     └── foo
          ├── foo.js
          ├── foo.module.scss
          ├── foo.stories.js
          └── data.js
```

### Files

- The `foo.js` file is the core component itself consisting of React code.
- The `foo.module.scss` is the [CSS module](/docs/styles) which is imported into the component.
- `foo.stories.js` is the [Storybook](/docs/storybook) file which allow us to view the component isolation.
- The `data.js` houses mock data that might be needed for the component to render (e.g. a list of options for a select), or, more often, is the data structure of the component's props represented as JSON for rendering the component in Storybook.

## Container/Component Pattern

While Gatsby handles the majority of data sourcing at build time, there are times where we may be fetching data at runtime in components. When this happens, we likely need the 'container/component' pattern. This pattern basically says to more data fetching up to a 'container' component, and then have a 'component' component that receives the results of this data fetching and renders this component.

Why would we need this? For something like Storybook! We don't want (or can't have) Storybook fetching data for each component in the Storybook. Or maybe the data fetching requires a level of auth that doesn't exist. We want to be able to view the component without worrying about all of that. To designate these two types of components, we use a naming convention for the file names:

```text
└── src
  └── components
     └── foo
          ├── foo.container.js
          ├── foo.component.js
          ├── foo.module.scss
          ├── foo.stories.js
          └── data.js
```

Now, in our Storybook file, we don't import the 'container', just the 'component' and pass it our static mock props from the `data.js` file! In our actual app though, we import the 'container'.
