import React from 'react';
import { Animated, Easing } from 'react-native';
import { createStackNavigator } from "react-navigation";
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';
import BottomTransition from '../transitions/BottomTransition';
import FadeTransition from '../transitions/FadeTransition';
import SideTransition from '../transitions/SideTransition';
import TransitionScreen from '../../screens/TransitionScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SearchScreen from '../../screens/SearchScreen';
import DetailsScreen from '../../screens/DetailsScreen';
import _ from 'lodash';

const TransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      timing: Animated.timing,
    },
    screenInterpolator: (screenProps) => {
      const transition = (_.get(screenProps, 'scene.route.params.transition') || 'fadeTransition');
      return {
        bottomTransition: BottomTransition(screenProps),
        sideTransition: SideTransition(screenProps),
        fadeTransition: FadeTransition(screenProps),
      }[transition]
    }
  }
};

const TransitionStack = createStackNavigator(
  {
    Transitions: TransitionScreen,
    Settings: SettingsScreen,
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    ...StackNavConfigDefault,
    transitionConfig: TransitionConfig,
    headerMode: 'screen',
    mode: 'modal',
  }
);

TransitionStack.navigationOptions = {
  tabBarLabel: 'Transitions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-barcode'}/>
  ),
};

TransitionStack.path = '';

export default TransitionStack;