// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Label } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Label />).toJSON()
  expect(tree).toMatchSnapshot()
})
