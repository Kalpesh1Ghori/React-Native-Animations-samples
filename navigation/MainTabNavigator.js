import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AnimatedAPIScreen from '../screens/AnimatedAPIScreen';
import LayoutAnimationScreen from '../screens/LayoutAnimationScreen';
import TransitionScreen from '../screens/TransitionScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: AnimatedAPIScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Animated',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-play'}
    />
  ),
};

HomeStack.path = '';

const LayoutAnimStack = createStackNavigator(
  {
    Links: LayoutAnimationScreen,
  },
  config
);

LayoutAnimStack.navigationOptions = {
  tabBarLabel: 'Layout-Animation',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-fastforward'}
    />
  ),
};

LayoutAnimStack.path = '';

const TransitionStack = createStackNavigator(
  {
    Transitions: TransitionScreen,
  },
  config
);

TransitionStack.navigationOptions = {
  tabBarLabel: 'Transitions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-barcode'} />
  ),
};

TransitionStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LayoutAnimStack,
  TransitionStack,
});

tabNavigator.path = '';

export default tabNavigator;
