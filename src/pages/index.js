import { graphql } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'

import '../global/_global.scss'
import * as styles from './index.module.scss'
import { gatsbyImageType } from '../global/propTypeHelpers'

const IndexPage = ({ data }) => {
  const colors = ['Blue', 'Orange', 'Lavender']
  const color = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className={styles.indexPage}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            alt="mediacurrent"
          />
          <span>+</span>
          <GatsbyImage
            image={data.gatsby.childImageSharp.gatsbyImageData}
            alt="gatsby"
          />
        </div>
        <h1
          className={classnames(styles.heading, {
            [styles[`background${color}`]]: true
          })}
        >
          Mediacurrent Gatsby Starter
        </h1>
        <h2>Docs:</h2>
        <strong>
          <Link
            className={classnames(styles.docsLink, {
              [styles[`background${color}`]]: true
            })}
            to="/docs"
          >
            Click here to read the starter docs
          </Link>
        </strong>
        <h2>Templated Page Examples</h2>
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.shape({
      childImageSharp: gatsbyImageType
    }),
    gatsby: PropTypes.shape({
      childImageSharp: gatsbyImageType
    }),
    allDog: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          breed: PropTypes.string
        })
      )
    })
  })
}

export const IndexPageQuery = graphql`
  {
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
        gatsbyImageData(width: 125, layout: FIXED)
      }
    }
    gatsby: file(relativePath: { eq: "gatsby-logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 125, layout: FIXED)
      }
    }
  }
`
