import React from 'react'
import Foo from './foo'
import { render } from '@testing-library/react'

describe('<Foo />', () => {
  it('should open and close when the user clicks on a menu item', () => {
    const { getByTestId } = render(<Foo />)

    expect(getByTestId('foo')).toHaveTextContent('https://dev.mysite.com')
  })
})
