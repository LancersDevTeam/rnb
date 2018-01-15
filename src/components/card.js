// @flow
import React, { Component } from 'react'
import { Card as NBCard } from 'native-base'

type State = any
type Props = any

export class Card extends Component<Props, State> {
  render() {
    return <NBCard {...this.props}>{this.props.children}</NBCard>
  }
}
