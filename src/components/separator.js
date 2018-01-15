// @flow
import React, { Component } from 'react'
import { Separator as NBSeparator } from 'native-base'

type State = any
type Props = any

export class Separator extends Component<Props, State> {
  render() {
    return <NBSeparator {...this.props}>{this.props.children}</NBSeparator>
  }
}
