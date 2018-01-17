// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Switch } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Switch />).toJSON()
  expect(tree).toMatchSnapshot()
})
