// @flow
import React, { Component } from 'react'
import { Body as NBBody } from 'native-base'

type State = any
type Props = any

export class Body extends Component<Props, State> {
  render() {
    return <NBBody {...this.props}>{this.props.children}</NBBody>
  }
}
