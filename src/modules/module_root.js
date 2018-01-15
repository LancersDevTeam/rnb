// @flow
import React, { Component } from 'react'
import { Platform } from 'react-native'
import { BaseContainer, Text } from 'app/components'

type State = any
type Props = any

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class ModuleRoot extends Component<Props, State> {
  render() {
    return (
      <BaseContainer>
        <Text>{instructions}</Text>
      </BaseContainer>
    )
  }
}
