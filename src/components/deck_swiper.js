// @flow
// TODO: https://github.com/LancersDevTeam/misk_mobile/issues/15
import React, { Component } from 'react'
import { DeckSwiper as NBDeckSwiper } from 'native-base'

type State = any
type Props = any

export class DeckSwiper extends Component<Props, State> {
  render() {
    return <NBDeckSwiper {...this.props}>{this.props.children}</NBDeckSwiper>
  }
}
