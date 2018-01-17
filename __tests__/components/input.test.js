// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Input />).toJSON()
  expect(tree).toMatchSnapshot()
})
