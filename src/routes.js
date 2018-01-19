import { StackNavigator } from 'react-navigation'
import { HomeScreen } from 'app/modules/home'

const AppNavigatorRouteConfigs = {
  Home: {
    screen: HomeScreen
  }
}

const AppNavigatorConfigs = {
  headerMode: 'screen',
  initialRouteName: 'Home'
}

export const AppNavigator = StackNavigator(
  AppNavigatorRouteConfigs,
  AppNavigatorConfigs
)
