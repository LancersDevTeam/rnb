// @flow
import React, { Component } from 'react'
import { AppNavigator } from 'app/routes'

type State = any
type Props = any

export default class ModuleRoot extends Component<Props, State> {
  render() {
    return <AppNavigator />
  }
}
