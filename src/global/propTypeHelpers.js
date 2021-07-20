import PropTypes from 'prop-types'
/* eslint-disable camelcase */

// Quickly set common propTypes for gatsby-images.

export const gatsbyImageType = PropTypes.shape({
  gatsbyImageData: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    layout: PropTypes.string.isRequired,
    images: PropTypes.shape({
      fallback: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        sizes: PropTypes.string.isRequired
      }),
      sources: PropTypes.arrayOf(
        PropTypes.shape({
          sizes: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired
        })
      )
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
