exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const docsPageTemplate = require.resolve(`../../docs/docs-template.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(docs)/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: docsPageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug
      }
    })
  })
}
