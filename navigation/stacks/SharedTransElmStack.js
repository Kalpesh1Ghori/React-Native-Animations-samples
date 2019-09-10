import React from 'react';
import SharedElmScreen from '../../screens/SharedElmScreen';
import { createStackNavigator } from "react-navigation";
import TabBarIcon from '../../components/TabBarIcon';
import StackNavConfigDefault from '../StackNavConfigDefault';
import DetailsScreen3 from '../../screens/DetailsScreen3';
import { Animated } from 'react-native';
import FadeTransition from '../../navigation/transitions/FadeTransition';
import SideTransition from '../../navigation/transitions/SideTransition';
import BottomTransition from '../../navigation/transitions/BottomTransition';
import _ from 'lodash';

const TransitionConfig = () => {
  return {
    transitionSpec: {
      duration: 1000,
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

const SharedTransElmStack = createStackNavigator({
    SharedElm: SharedElmScreen,
    Details: DetailsScreen3,
  },
  {
    ...StackNavConfigDefault,
    transitionConfig: TransitionConfig,
    headerMode: 'screen',
    mode: 'modal',
    transparentCard: true,
  }
);

SharedTransElmStack.navigationOptions = {
  tabBarLabel: 'Shared Elm',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-apps'}
    />
  ),
};

SharedTransElmStack.path = '';

export default SharedTransElmStack;