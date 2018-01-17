// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Body } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Body />).toJSON()
  expect(tree).toMatchSnapshot()
})
