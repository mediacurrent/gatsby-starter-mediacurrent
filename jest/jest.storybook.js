module.exports = {
  ...require('./jest.common'),
  displayName: 'storybook',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/.storybook/storyshots.test.js']
}
