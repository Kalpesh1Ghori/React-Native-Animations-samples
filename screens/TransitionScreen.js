import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TransitionScreen extends Component {
  render() {
    return (
      <View><Text>123</Text></View>
    )
  }
}

TransitionScreen.navigationOptions = {
  title: 'Transitions',
};
