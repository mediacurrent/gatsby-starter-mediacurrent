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
          <Img fixed={data.logo.childImageSharp.fixed} />
          <span>+</span>
          <Img fixed={data.gatsby.childImageSharp.fixed} />
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
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby-logo.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
