// Third party
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import PropTypes from 'prop-types'
// Components
// Utils
// Images
// Styles
import styles from './foo.module.scss'

console.log(styles)

const Foo = (props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return (
    <div className={styles.foo}>
      The site url is {site.siteMetadata.siteUrl}
    </div>
  )
}

Foo.propTypes = {}

export default Foo
