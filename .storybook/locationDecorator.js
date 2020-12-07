import React from 'react'
import { createHistory, LocationProvider } from '@reach/router'

// Makes Storybook work with Gatsby/Reach Router.
let history = createHistory(window)

const LocationDecorator = (Story) => (
  <LocationProvider history={history}>
    <Story />
  </LocationProvider>
)

export default LocationDecorator
