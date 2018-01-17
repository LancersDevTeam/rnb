// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Separator } from 'app/components'

it('renders correctly', () => {
  const tree = renderer.create(<Separator />).toJSON()
  expect(tree).toMatchSnapshot()
})
