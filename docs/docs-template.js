import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './docs-template.module.scss'
import { Helmet } from 'react-helmet'
import { gatsbyImageType } from '../src/global/propTypeHelpers'

const DocsTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  console.log(markdownRemark)
  return (
    <>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className={styles.page}>
        <div className={styles.titleWrapper}>
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            alt="mediacurrent"
          />
          <h1>{frontmatter.title}</h1>
          <Link to="/docs">Docs Home</Link>
        </div>

        <div
          className={styles.toc}
          dangerouslySetInnerHTML={{
            __html: frontmatter.slug !== '/docs/' ? tableOfContents : null
          }}
        />

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  )
}

export default DocsTemplate

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string
      }),
      html: PropTypes.string,
      tableOfContents: PropTypes.string
    }),
    logo: PropTypes.shape({
      childImageSharp: gatsbyImageType
    })
  })
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(
        pathToSlugField: "frontmatter.slug"
        heading: null
        maxDepth: 6
      )
      frontmatter {
        slug
        title
      }
    }
    logo: file(relativePath: { eq: "mc-logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 125, layout: FIXED)
      }
    }
  }
`
