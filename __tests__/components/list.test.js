// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { List } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<List />).toJSON()
  expect(tree).toMatchSnapshot()
})
