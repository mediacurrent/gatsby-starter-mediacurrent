// Commonly used objects for component stories.
/* eslint-disable camelcase */
/* eslint-disable max-len */

// Quickly render a fixed Gatsby image in a story.
// Takes an options object.
// Pass a src or it gets a random image.
export const fixedGatsbyImage = (options = {}) => ({
  localFile: {
    childImageSharp: {
      fixed: {
        src: options.src || 'https://source.unsplash.com/random',
        alt: 'alt'
      }
    }
  }
})

// Quickly render a fluid Gatsby image in a story.
// Takes an options object.
// Pass a src or it gets a random image.
// Pass an aspectRatio if necessary.
export const fluidGatsbyImage = (options = {}) => ({
  localFile: {
    childImageSharp: {
      fluid: {
        aspectRatio: options.aspectRatio || 1.7857142857142858,
        src:
          options.src ||
          `https://source.unsplash.com/random${
            options.grayscale ? '/?grayscale' : ''
          }`
      }
    }
  }
})
