module.exports = {
  ...require('./jest.common'),
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/**/*.stories.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/static/',
    '/public/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/public/',
    '/.cache/',
    '/__mocks__/',
    '/static/'
  ],
  projects: [
    '@mediacurrent/jest-config-gatsby/jest.scss.js',
    '@mediacurrent/jest-config-gatsby/jest.lint.js',
    '@mediacurrent/jest-config-gatsby/jest.client.js',
    '@mediacurrent/jest-config-gatsby/jest.storybook.js'
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  }
}
