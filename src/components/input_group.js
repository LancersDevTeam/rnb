// @flow
import React, { Component } from 'react'
import { InputGroup as NBInputGroup } from 'native-base'

type State = any
type Props = any

export class InputGroup extends Component<Props, State> {
  render() {
    return <NBInputGroup {...this.props}>{this.props.children}</NBInputGroup>
  }
}
