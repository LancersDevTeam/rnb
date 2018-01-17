// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { InputGroup } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<InputGroup />).toJSON()
  expect(tree).toMatchSnapshot()
})
