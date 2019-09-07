import React from 'react';
import PlaygroundScreen from '../../screens/PlaygroundScreen';
import { createStackNavigator } from "react-navigation";
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';

const PlaygroundStack = createStackNavigator({
    Playground: PlaygroundScreen,
  },
  { ...StackNavConfigDefault }
);

PlaygroundStack.navigationOptions = {
  tabBarLabel: 'Playground',
  tabBarIcon: ({ focused }) => {
    <TabBarIcon
      focused={focused}
      name={'md-play'}
    />
  }
};

PlaygroundStack.path = '';

export default PlaygroundStack;