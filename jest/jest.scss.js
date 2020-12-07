const { rootDir } = require('./jest.common')

module.exports = {
  rootDir,
  displayName: 'lint:scss',
  preset: 'jest-runner-stylelint'
}
