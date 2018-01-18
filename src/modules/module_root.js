// @flow
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { MainStore } from 'app/stores'
import { AppNavigator } from 'app/routes'

type State = any
type Props = any

export default class ModuleRoot extends Component<Props, State> {
  render() {
    return (
      <Provider mainStore={new MainStore()}>
        <AppNavigator />
      </Provider>
    )
  }
}
