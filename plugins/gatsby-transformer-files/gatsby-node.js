const fs = require('fs')
const path = require('path')

// This allows us to access all pdf, doc, and docx files in the
// static directory.
exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  // Only run on pdf or docs.
  if (!(node.ext === '.pdf' || node.ext === '.doc' || node.ext === '.docx')) {
    return
  }

  // Generate the file name.
  const fileName = `${decodeURI(node.name)}-${node.internal.contentDigest}${
    node.ext
  }`

  // Generate a path.
  const publicPath = path.join(process.cwd(), 'public', 'static', fileName)

  // If the path doesn't exist, copy the file from the cache to a public path.
  if (!fs.existsSync(publicPath)) {
    fs.copyFile(node.absolutePath, publicPath, (err) => {
      if (err) {
        console.error(
          // eslint-disable-line no-console
          `error copying file from ${node.absolutePath} to ${publicPath}`,
          err
        )
      }
    })
  }

  // Add a field to the node with the public path.
  createNodeField({
    node,
    name: 'localUrl',
    value: `/static/${fileName}`
  })
}
