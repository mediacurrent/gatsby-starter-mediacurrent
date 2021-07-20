// const sharedConfig = require('@mediacurrent/storybook-config-gatsby')
// This can be readded when this PR is released
// https://github.com/mediacurrent/storybook-config-gatsby/pull/1

const sharedConfig = (config) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader')

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env')
  ]

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties'),
    // use @babel-plugin-remove-graphql-queries required to render in Storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
    // use @babel/plugin-proposal-optional-chaining to allow for js optional chaining in Storybook
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@loadable/babel-plugin')
  ]

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main']

  // Add SCSS Modules support.
  config.module.rules.push({
    test: /\.scss$/,
    rules: [
      { loader: require.resolve('style-loader') },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      { loader: require.resolve('sass-loader') }
    ]
  })

  // Exclude SVGs from the default config so we can use svg-react-loader.
  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  )
  fileLoaderRule.exclude = /\.svg$/

  config.module.rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: require.resolve('svg-react-loader')
  })

  return config
}
module.exports = ({ config }) => {
  const newConfig = sharedConfig(config)
  // Overrides here like:
  // newConfig.module.rules = foo

  return newConfig
}
