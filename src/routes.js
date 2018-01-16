import { StackNavigator } from 'react-navigation'
import { TopScreen } from 'app/modules/top'

const AppNavigatorRouteConfigs = {
  Top: {
    screen: TopScreen
  }
}

const AppNavigatorConfigs = {
  headerMode: 'screen',
  initialRouteName: 'Top'
}

export const AppNavigator = StackNavigator(
  AppNavigatorRouteConfigs,
  AppNavigatorConfigs
)
