const path = require(`path`)
// Module to allow fetch inside node.  Can be uninstalled if not using.
const fetch = require('node-fetch')
// Here we are sourcing the nodes from an external source to add to GraphQL.
// Most likely you are using a source plugin (like Drupal) so don't need to do
// this step.  These can then be used in the createPages step.
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // Get data from Dog API at build time
  const result = await fetch('https://dog.ceo/api/breeds/list/all')
  const resultData = await result.json()
  // Map over the response.  The structure here with Object.keys and `message` is
  // a little atypical.  Your data will probably be an array.
  Object.keys(resultData.message).forEach((dog) => {
    // Create node for each item in the list.
    createNode({
      // Required fields for the node creation.
      id: dog,
      parent: null,
      children: [],
      internal: {
        type: `Dog`,
        contentDigest: createContentDigest(dog)
      },
      // Custom fields for the node.
      breed: dog,
      slug: `/dogs/${dog}`
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const barTemplate = path.resolve(`src/templates/dog.js`)
  // Do async work. Using fetch here, but can be GraphQL query, or data from
  // another source.
  // https://www.gatsbyjs.com/docs/node-apis/#createPages
  const dogs = await graphql(`
    query dogsQuery {
      allDog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Handle errors.
  if (dogs.errors) {
    reporter.panicOnBuild(`Error while running dog pages GraphQL query.`)
    return
  }

  dogs.data.allDog.edges.forEach(({ node }) => {
    createPage({
      // Create a path (url) for this page (required).
      path: node.slug,
      // Point to the template file you want to create the page with.
      component: barTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
        //
        // Generally a unique indentifier so the individual node
        // can be queried in the template.
        slug: node.slug
      }
    })
  })
}
