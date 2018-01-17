// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Left } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Left />).toJSON()
  expect(tree).toMatchSnapshot()
})
