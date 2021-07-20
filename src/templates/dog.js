import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import * as styles from './dog.module.scss'
// The result of the query on this page gets passed in to the default export as
// a prop called `data`.
const DogPage = ({ data }) => {
  return (
    <>
      {/* React package for dynamically setting headers, meta data, etc for SEO. */}
      <Helmet>
        <title> {data.dog.breed} page</title>
      </Helmet>
      <div className={styles.dogPage}>
        <h1 className={styles.breed}>{data.dog.breed}</h1>
      </div>
    </>
  )
}

export default DogPage

DogPage.propTypes = {
  data: PropTypes.shape({
    dog: PropTypes.shape({
      breed: PropTypes.string
    })
  })
}

// Query for the specific dog we want to create each page for.
// The `$slug: String` is the parameter passed from the `createPages`
// function in `gatsby-node.js`.
// The `slug: { eq: $slug }` is the Gatsby GraphQL way for filtering where
// a field is strictly equal to a certain value, in this case the $slug param
// from context in createPages.
export const DogPageQuery = graphql`
  query DogPageQuery($slug: String) {
    dog(slug: { eq: $slug }) {
      breed
    }
  }
`
