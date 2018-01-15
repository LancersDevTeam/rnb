// @flow
import React, { Component } from 'react'
import { Left as NBLeft } from 'native-base'

type State = any
type Props = any

export class Left extends Component<Props, State> {
  render() {
    return <NBLeft {...this.props}>{this.props.children}</NBLeft>
  }
}
