// Environment variables for testing.
process.env.DRUPAL = 'https://example.com'
// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn()
}

// window.___navigate = jest.fn()
