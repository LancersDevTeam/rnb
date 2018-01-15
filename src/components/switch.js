// @flow
import React, { Component } from 'react'
import { Switch as NBSwitch } from 'native-base'

type State = any
type Props = any

export class Switch extends Component<Props, State> {
  render() {
    return <NBSwitch {...this.props}>{this.props.children}</NBSwitch>
  }
}
