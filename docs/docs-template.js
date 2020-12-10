import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './docs-template.module.scss'

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark
  console.log(frontmatter)
  return (
    <div className={styles.page}>
      <div className={styles.titleWrapper}>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <h1 className={styles.title}> {frontmatter.title}</h1>
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
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
      frontmatter {
        slug
        title
      }
    }

    logo: file(relativePath: { eq: "mc-logo.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`