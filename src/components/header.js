// @flow
import React, { Component } from 'react'
import { Header as NBHeader } from 'native-base'

type State = any
type Props = any

export class Header extends Component<Props, State> {
  render() {
    return <NBHeader {...this.props}>{this.props.children}</NBHeader>
  }
}
