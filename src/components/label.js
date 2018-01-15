// @flow
import React, { Component } from 'react'
import { Label as NBLabel } from 'native-base'

type State = any
type Props = any

export class Label extends Component<Props, State> {
  render() {
    return <NBLabel {...this.props}>{this.props.children}</NBLabel>
  }
}
