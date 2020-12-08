module.exports = {
  ...require('./jest.common'),
  displayName: 'storybook',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['./.storybook/storyshots.test.js']
}
