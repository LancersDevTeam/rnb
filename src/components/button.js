// @flow
import React, { Component } from 'react'

import { Button as NBButton } from 'native-base'

type State = any
type Props = any

export class Button extends Component<Props, State> {
  render() {
    return (
      <NBButton rounded block {...this.props}>
        {this.props.children}
      </NBButton>
    )
  }
}
