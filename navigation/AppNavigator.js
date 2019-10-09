import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Splash from '../components/Splash'
import LoginScreen from '../screens/LoginScreen';
import IndicatorScreen from '../screens/IndicatorScreen';

//const LoadingStack = createStackNavigator({Loading: Splash});
//const QuestionStack = createStackNavigator({ Question: QuestionScreen });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Loading: Splash,
    Indicator: IndicatorScreen,
    Login: LoginScreen,
    Main: MainTabNavigator,
  }, 
  {
    initialRouteName: 'Loading'
  })
);
