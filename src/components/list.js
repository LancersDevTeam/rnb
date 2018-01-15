// @flow
import React, { Component } from 'react'
import { List as NBList } from 'native-base'

type State = any
type Props = any

export class List extends Component<Props, State> {
  render() {
    return <NBList {...this.props}>{this.props.children}</NBList>
  }
}
