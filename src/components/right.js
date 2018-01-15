// @flow
import React, { Component } from 'react'
import { Right as NBRight } from 'native-base'

type State = any
type Props = any

export class Right extends Component<Props, State> {
  render() {
    return <NBRight {...this.props}>{this.props.children}</NBRight>
  }
}
