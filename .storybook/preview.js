import { action } from '@storybook/addon-actions'
import LocationDecorator from './locationDecorator'

// Import global styles.
import 'focus-visible'
import '../src/global/_global.scss'

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
global.___loader = { enqueue: () => {}, hovering: () => {} }

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
global.__BASE_PATH__ = ''

// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

export const decorators = [LocationDecorator]
