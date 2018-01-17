// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { ListItem } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<ListItem />).toJSON()
  expect(tree).toMatchSnapshot()
})
