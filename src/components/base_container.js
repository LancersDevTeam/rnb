// @flow
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container as NBContainer } from 'native-base'
import styles from './base_container_style'

type State = any
type Props = any

export class BaseContainer extends Component<Props, State> {
  render() {
    return (
      <NBContainer {...this.props} style={styles.container}>
        <StatusBar />
        {this.props.children}
      </NBContainer>
    )
  }
}
