import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import PlaygroundStack from './stacks/PlaygroundStack';
import AnimatedStack from './stacks/AnimatedStack';
import LayoutAnimStack from './stacks/LayoutAnimStack';
import TransitionStack from './stacks/TransitionStack';
import SharedTransElmStack from './stacks/SharedTransElmStack';

const tabNavigator = createBottomTabNavigator({
  // PlaygroundStack,
  AnimatedStack,
  LayoutAnimStack,
  TransitionStack,
  SharedTransElmStack,
});

tabNavigator.path = '';

export default tabNavigator;
