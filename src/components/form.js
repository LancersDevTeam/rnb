// @flow
import React, { Component } from 'react'
import { Form as NBForm } from 'native-base'

type State = any
type Props = any

export class Form extends Component<Props, State> {
  render() {
    return <NBForm {...this.props}>{this.props.children}</NBForm>
  }
}
