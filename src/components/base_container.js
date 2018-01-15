// @flow
import React from 'react'
import { StatusBar } from 'react-native'
import { Container } from 'app/components'
import styles from './base_container_style'

type Props = {
  barColor: string,
  children?: ?React$Element<any>
}

export const BaseContainer = ({ barColor, children }: Props) => (
  <Container style={styles.container}>
    <StatusBar
      barStyle={barColor === 'light' ? 'light-content' : 'dark-content'}
    />
    {children}
  </Container>
)

BaseContainer.defaultProps = {
  children: null
}
