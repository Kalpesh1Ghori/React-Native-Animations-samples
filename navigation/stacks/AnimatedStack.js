import React from 'react';
import { createStackNavigator } from "react-navigation";
import AnimatedAPIScreen from '../../screens/AnimatedAPIScreen';
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';

const AnimatedStack = createStackNavigator(
  {
    Home: AnimatedAPIScreen,
  },
  { ...StackNavConfigDefault }
);

AnimatedStack.navigationOptions = {
  tabBarLabel: 'Animated',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-play'}
    />
  ),
};

AnimatedStack.path = '';

export default AnimatedStack;