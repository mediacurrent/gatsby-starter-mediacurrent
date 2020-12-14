import PropTypes from 'prop-types'
/* eslint-disable camelcase */

// Quickly set common propTypes for gatsby-images.
export const fixedGatsbyImageType = PropTypes.shape({
  localFile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fixed: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
})

export const fluidGatsbyImageType = PropTypes.shape({
  localFile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
})

export const requiredChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]).isRequired

export const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
])

export const metaTagsType = PropTypes.arrayOf(
  PropTypes.shape({
    tag: PropTypes.string,
    attributes: PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string
    })
  })
)

export const pathType = PropTypes.shape({
  alias: PropTypes.string
})
