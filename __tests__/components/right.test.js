// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Right } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Right />).toJSON()
  expect(tree).toMatchSnapshot()
})
