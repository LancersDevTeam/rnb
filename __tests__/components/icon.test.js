// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Icon } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Icon />).toJSON()
  expect(tree).toMatchSnapshot()
})
