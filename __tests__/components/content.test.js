// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Content } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Content />).toJSON()
  expect(tree).toMatchSnapshot()
})
