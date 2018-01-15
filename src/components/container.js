// @flow
import React, { Component } from 'react'
import { Container as NBContainer } from 'native-base'

type State = any
type Props = any

export class Container extends Component<Props, State> {
  render() {
    return <NBContainer {...this.props}>{this.props.children}</NBContainer>
  }
}
