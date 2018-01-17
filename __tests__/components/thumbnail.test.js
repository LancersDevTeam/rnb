// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Thumbnail } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Thumbnail />).toJSON()
  expect(tree).toMatchSnapshot()
})
