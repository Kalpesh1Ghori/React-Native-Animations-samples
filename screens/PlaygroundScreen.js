import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PlaygroundScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>let's play 😀</Text>
      </View>
    )
  }
}

PlaygroundScreen.navigationOptions = {
  title: 'Playground',
};
