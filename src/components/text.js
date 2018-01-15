// @flow
import React, { Component } from 'react'
import { Text as NBText } from 'native-base'

type State = any
type Props = any

export class Text extends Component<Props, State> {
  render() {
    return <NBText {...this.props}>{this.props.children}</NBText>
  }
}
