// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { BaseContainer } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<BaseContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
