// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Form } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Form />).toJSON()
  expect(tree).toMatchSnapshot()
})
