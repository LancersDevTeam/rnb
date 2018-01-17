// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Item } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Item />).toJSON()
  expect(tree).toMatchSnapshot()
})
