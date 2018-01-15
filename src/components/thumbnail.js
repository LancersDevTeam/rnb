// @flow
import React, { Component } from 'react'
import { Thumbnail as NBThumbnail } from 'native-base'

type State = any
type Props = any

export class Thumbnail extends Component<Props, State> {
  render() {
    return <NBThumbnail {...this.props}>{this.props.children}</NBThumbnail>
  }
}
