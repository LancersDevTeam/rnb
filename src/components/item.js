// @flow
import React, { Component } from 'react'
import { Item as NBItem } from 'native-base'

type State = any
type Props = any

export class Item extends Component<Props, State> {
  render() {
    return <NBItem {...this.props}>{this.props.children}</NBItem>
  }
}
