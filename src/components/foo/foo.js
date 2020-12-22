// Third party imports
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// Component imports
// Util import
// Image imports
// Style imports
import styles from './foo.module.scss'

const Foo = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        ...SiteFragment
      }
    }
  `)
  return (
    <div data-testid="foo" className={styles.foo}>
      The site url is {site.siteMetadata.siteUrl}
    </div>
  )
}

Foo.propTypes = {}

export default Foo
