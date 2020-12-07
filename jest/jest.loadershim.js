// Environment variables for testing.
process.env.BRIDGE_URI = 'https://example.com';
process.env.DRUPAL = 'https://example.com';
// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn()
};

window.___navigate = jest.fn();
