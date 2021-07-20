module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs'
  ],
  features: {
    postcss: false
  },
  core: { builder: 'webpack5' }
}
