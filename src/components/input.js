// @flow
import React, { Component } from 'react'
import { Input as NBInput } from 'native-base'

type State = any
type Props = any

export class Input extends Component<Props, State> {
  render() {
    return <NBInput {...this.props}>{this.props.children}</NBInput>
  }
}
