// @flow
import React, { Component } from 'react'
import { Icon as NBIcon } from 'native-base'

type State = any
type Props = any

export class Icon extends Component<Props, State> {
  render() {
    return <NBIcon {...this.props}>{this.props.children}</NBIcon>
  }
}
