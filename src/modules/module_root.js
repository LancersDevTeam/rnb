// @flow
import React, { Component } from 'react'
import { Root } from 'native-base'
import { Provider } from 'mobx-react'
import { RootStore } from 'app/stores'
import { AppNavigator } from 'app/routes'

type State = any
type Props = any

export default class ModuleRoot extends Component<Props, State> {
  render() {
    return (
      <Root>
        <Provider rootStore={new RootStore()}>
          <AppNavigator />
        </Provider>
      </Root>
    )
  }
}
