// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
