---
slug: '/docs/images'
title: 'Docs | Images'
---

# Images

## Gatsby Images

Gatsby provides several plugins to handle responsive images. These plugins make it possible for gatsby to proess and optimize images to achieve fast and performant image loading.

One of these plugins is the [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) plugin. Some of the features on this plugin include creating an elastic container to allow to hold the image size and avoid content jumping while the actual image loads. Also provides the ability to generate multiple size images to be used as part of the image's `srcset`. And finally, it provides a series of effects to use when images load.

Underneath the hood, it is using [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/) to provide advanced image loading techniques, which itself uses the Node.js library `sharp`.

### Pros

The pros of `gatsby-image` primarily are for the end user of the site. They get a very fast and pleasant to load page. The images lazy-load with placeholders that prevent page jump, fade in from a blur when they are loaded.

Building this functionality would be a chore to get right across browsers and devices without this library.

There are also benefits to the business, in that the page has better load speeds and, in turn, better user experience.

### Cons

The primary con of `gatsby-image` is the time it adds to the build process. Image processing (resizing, copying, etc) is expensive computation and there is no great way around it. If you are having build time problems, removing `gatsby-image` is a sure-fire way to improve them. Another con is styling. The component uses a wrapper div to provide the good loading experience, but that means it is not a drop in replacement for an `img` tag. This means that styling may be tricky in some cases.

### When to Use Fluid or Static

The `gatsby-image` API includes the ability to either make multiple _sizes_ of an image or multiple _resolutions_ of an image.

When an image is meant to scale with its parent, you want to create different _sizes_ so it can be _fluid_ with its container. This is the more common of the choices.

When an image is the same size across designs and viewports (such as a logo), you only need different _resolutions_ because the size is _fixed_.

## Remote Image Hosting

On some projects, we have skipped using `gatsby-image` because we knew the site would scale too large and have build issues. For these, the images can be hosted with AWS, Cloudinary, or other provider. This will improve build times, but at the cost of page load speed.

## Note on API Updates

Gatsby has luckily been improving the API for `gatsby-image` and that process is being tracked here: https://github.com/gatsbyjs/gatsby/discussions/27950.
