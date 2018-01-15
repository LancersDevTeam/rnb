// @flow
import React, { Component } from 'react'
import { Content as NBContent } from 'native-base'

type State = any
type Props = any

export class Content extends Component<Props, State> {
  render() {
    return <NBContent {...this.props}>{this.props.children}</NBContent>
  }
}
