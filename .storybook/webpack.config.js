const sharedConfig = require('@mediacurrent/storybook-config-gatsby')
module.exports = ({ config }) => {
  const newConfig = sharedConfig(config)
  // Overrides here like:
  // newConfig.module.rules = foo
  return newConfig
}
