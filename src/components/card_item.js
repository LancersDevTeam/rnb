// @flow
import React, { Component } from 'react'

import { CardItem as NBCardItem } from 'native-base'

type State = any
type Props = any

export class CardItem extends Component<Props, State> {
  _root: any

  setNativeProps = (nativeProps: any) => {
    this._root.setNativeProps(nativeProps)
  }

  render() {
    return (
      <NBCardItem ref={component => (this._root = component)} {...this.props}>
        {this.props.children}
      </NBCardItem>
    )
  }
}
