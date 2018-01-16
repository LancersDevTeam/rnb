// @flow
import React, { Component } from 'react'
import { Platform } from 'react-native'
import { BaseContainer, Text } from 'app/components'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type State = any
type Props = any

export class TopScreen extends Component<Props, State> {
  render() {
    return (
      <BaseContainer>
        <Text>{instructions}</Text>
      </BaseContainer>
    )
  }
}
