// @flow
import React, { Component } from 'react'
import { ListItem as NBListItem } from 'native-base'

type State = any
type Props = any

export class ListItem extends Component<Props, State> {
  render() {
    return <NBListItem {...this.props}>{this.props.children}</NBListItem>
  }
}
