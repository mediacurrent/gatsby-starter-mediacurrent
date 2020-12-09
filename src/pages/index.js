import { graphql } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import Img from 'gatsby-image'

import '../global/_global.scss'
import styles from './index.module.scss'

const IndexPage = ({ data }) => {
  const colors = ['Blue', 'Orange', 'Lavender']
  const color = colors[Math.floor(Math.random() * colors.length)]
  return (
    <div className={styles.indexPage}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Img fluid={data.logo.childImageSharp.fluid} />
          <span>+</span>
          <Img fluid={data.gatsby.childImageSharp.fluid} />
        </div>
        <h1
          className={classnames(styles.heading, {
            [styles[`background${color}`]]: true
          })}
        >
          Mediacurrent Gatsby Starter
        </h1>
        <p>
          Click a link below to see a templated page created from a remote data
          source.
        </p>
        <ul>
          {data.allDog.nodes.map((dog) => (
            <li key={dog.breed}>
              <Link to={`dogs/${dog.breed}`}>{dog.breed}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query {
    site {
      ...SiteFragment
    }
    allDog {
      nodes {
        breed
      }
    }
    logo: file(relativePath: { eq: "mc-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
