// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Card } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot()
})
