import { graphql } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
import Foo from '../components/foo/foo'

const IndexPage = ({ data }) => {
  return (
    <>
      <Foo />
      <ul>
        {data.allDog.nodes.map((dog) => (
          <li key={dog.breed}>
            <Link to={`dogs/${dog.breed}`}>{dog.breed}</Link>
          </li>
        ))}
      </ul>
    </>
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
  }
`
