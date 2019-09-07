import React from 'react';
import LayoutAnimationScreen from '../../screens/LayoutAnimationScreen';
import { createStackNavigator } from "react-navigation";
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';

const LayoutAnimStack = createStackNavigator(
  {
    LayoutAnimation: LayoutAnimationScreen,
  },
  { ...StackNavConfigDefault }
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

export default LayoutAnimStack;
