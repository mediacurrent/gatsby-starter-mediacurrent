---
slug: '/docs/styles'
title: 'Docs | Styles'
---

# Styles

## Global Styles

We try to use the same patterns used by the theme generator for things like variables, spacing, colors, etc. More info on those can be found in the [Globals](/docs/globals) section of the docs.

## CSS Modules

Gatsby works out of the box with [CSS Modules](https://github.com/css-modules/css-modules), a popular solution for writing component-scoped CSS.

### What is a CSS Module? <a id="what-is-a-css-module"></a>

Quoting from [the CSS Module homepage](https://github.com/css-modules/css-modules):

> A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default.

CSS Modules let you write styles in CSS files but consume them as JavaScript objects for additional processing and safety. CSS Modules are very popular because they automatically make class and animation names unique so you don’t have to worry about selector name collisions.

### CSS Module example <a id="css-module-example"></a>

The CSS in a CSS module is no different than normal CSS, but the extension of the file is different to mark that the file will be processed.

```css
.container {
  margin: 3rem auto;
  max-width: 600px;
}
```

```jsx
import React from 'react'
import containerStyles from './container.module.css'

export default function Container({ children }) {
  return <section className={containerStyles.container}>{children}</section>
}
```

In this example, a CSS module is imported and declared as a JavaScript object called `containerStyles`. Then, a CSS class from that object is referenced in the JSX `className`attribute with `containerStyles.container`, which renders into HTML with dynamic CSS class names like `container-module--container--3MbgH`.

### Enabling user stylesheets with a stable class name <a id="enabling-user-stylesheets-with-a-stable-class-name"></a>

Adding a persistent CSS `className` to your JSX markup along with your CSS Modules code can make it easier for users to take advantage of [User Stylesheets](https://www.viget.com/articles/inline-styles-user-style-sheets-and-accessibility/) for accessibility.

Here’s an example where the class name `container` is added to the DOM along with the module’s dynamically-created class names:

```jsx
import React from 'react'
import containerStyles from './container.module.css'

export default function Container({ children }) {
  return (
    <section className={`container ${containerStyles.container}`}>
      {children}
    </section>
  )
}
```

A site user could then write their own CSS styles matching HTML elements with a class name of `.container`, and it wouldn’t be affected if the CSS module name or path changed.

### Conditional Styles

### Dynamic Classnames

### Global Namespaces
