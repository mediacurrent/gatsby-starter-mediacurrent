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

We often want to toggle whether a className is applied based on some logic. To do that with CSS Modules, the syntax looks like this:

```jsx
<button
  className={classnames(styles.button, {
    [styles.disabled]: disabled
  })}
>
  Click Me!
</button>
```

The object passed as the second argument can conditionally set a class by wrapping it in `[]` and setting its value to the boolean you want to determine whether it should be applied.

### Dynamic Classnames

Other times, which className that is selected may be totally dynamic. In this case, we sometimes want the `square` class and sometimes the `rectangle` class.

```jsx
const imgShape = foo // your logic here, square or rectangle

<div className={classnames(styles.image, styles[imgShape])}>
  <Img fluid={img} alt={`Potrait of an amazing dev`} />
</div>

```

The `imgShape` var dynamically selects the correct class from the CSS Module.

### Lots of ClassNames

Sometimes, a component may have several classes that are conditionally or dynamically applied. This can cause the markup to be more difficult to read. Creating one object before the `return` of the `render` can make it easier to read.

```jsx
const classes = classnames(styles.button, {
  [styles.arrowButton]: arrow,
  [styles[color]]: !disabled,
  [styles.disabled]: disabled,
  [styles[textStyle]]: textStyle,
  [styles.textLink]: textLink
})

<button className={classes}>
  Click Me!
</button>
```

### Passing a className Directly

You may have built a generic component for reuse, but you want it to be able to accept a `className` as a prop so styles can sometimes be overridden. Remember, CSS Module classNames are hashed so you can't expect to select it directly. To create a `className` prop and apply it, follow this pattern:

```jsx
const MyButton = ({ className }) => {
  return (
    <button
      className={classnames(styles.button, {
        [className]: className
      })}
    >
      Click Me!
    </button>
  )
}
```

This is similar to the conditional setting, just using the `className` name as the convention.

### Global Namespaces

There are times you may be using a third-party library or have a hardcoded `className` for another reason. In order to access these in CSS Modules and override where needed, you need the `global` keyword. Here is an example of styling a class from Wistia:

```css
/* This is one of our CSS Module classes. */
.reactPlayer {
  position: relative;

  /* Using the :global keyword to select the .wistia_embed div and style it. */
  :global(.wistia_embed) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```
