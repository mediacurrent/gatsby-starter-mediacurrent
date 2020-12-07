exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  // Silence 'conflicting order' warning for CSS modules.
  // This is only an issue with regular CSS being imported.
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }

    actions.replaceWebpackConfig(config)
  }
}
