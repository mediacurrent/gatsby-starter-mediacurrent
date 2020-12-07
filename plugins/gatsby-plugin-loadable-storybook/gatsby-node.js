const LoadablePlugin = require('@loadable/webpack-plugin')

exports.onCreateWebpackConfig = ({ actions }) => {
  if (process.env.NODE_ENV !== 'production') {
    // Exclude *.stories.js files while processing dev bundles.
    // Allow lazy loading components.
    actions.setWebpackConfig({
      plugins: [new LoadablePlugin()],
      module: {
        noParse: /\.stories.js$/
      }
    })
  }
}
