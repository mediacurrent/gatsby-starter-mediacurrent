---
slug: '/docs/plugins'
title: 'Docs | Plugins'
---

# Plugins

Plugins come in two forms and are great ways to either easily extend functionality to your site, or keep your site logic organized.

## Extending Functionality

This is the primary purpose of Gatsby plugins. Gatsby plugins are like Drupal modules. They help you extend your website's functionality. Plugins are typically NPM packages you can easily install and configure. Whether you need SEO functionality, or responsive images, or social media integration, chances are there is a plugin for that.
Gatsby's library of plugins continues to grow and the community behind it does a really great job at ensuring a quality list of plugins.

The three main types of plugins are source, transformer, or general plugins.

### Source Plugins

Source plugins source data from another place, e.g. Drupal. Almost every Gatsby site uses a source plugin, even if it is just for Markdown or JSON.

### Transformer Plugins

Transformer plugins may be required for some source plugins to make them something you can use for your site. For example, the filesystem source plugin may load in Markdown files, but you need that transformed to HTML. That's what transformer-remark does.

### General Plugins

General plugins help with functionality that would be tedious or difficult to write yourself. Gatsby Image, for example, performs a lot of things under the hood to give you lazy loaded, responsive images.

Check out the [many plugins available for Gatsby](https://www.gatsbyjs.org/plugins/).

## Organizing Your Code

Plugins are also a great way to keep your site's code organized. You may find over time that your `gatsby-node.js` file is becoming large and unwieldy. It may be doing multiple processes that aren't necessary related, but are happening in the same lifecycle. You can seperate out unique actions to their own plugins. These docs themselves were written as a plugin!

### Creating Your Own

To create your own organzational plugin:

1. Create a `/plugins` directory at the root of your project.
2. Create a folder with the name of the plugin you want to create it needs to be created with the prefix `gatsby-*`, e.g. `gatsby-plugin-docs-demo`.
3. In that folder, create the following three files:

- `index.js`
- `package.json`
- `gatsby-node.js` (or whatever other Gatsby lifecycle file you might need, e.g. `gatsby-browser.js`)

4. In the `index.js`, write:
   `// noop`.
5. In the `package.json` write:
   `{}`
6. In the `gatsby-*.js` lifecycle file, write the logic that you want to use, that is normally in the root lifecycle file.
7. To install the plugin, add it to you `gatsby-config.js` file at the root, just as you would any other plugin:

```javascript
module.exports = {
  plugins: [`gatsby-plugin-docs-demo`]
}
```

8. That's it, Gatsby does the rest!
9. For more advanced plugins, you can pass in `options` and even look at publishing the plugin to npm.
