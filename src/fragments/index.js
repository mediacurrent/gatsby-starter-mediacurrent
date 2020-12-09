import { graphql } from 'gatsby'

export const siteFragment = graphql`
  fragment SiteFragment on Site {
    siteMetadata {
      siteUrl
    }
  }
`
