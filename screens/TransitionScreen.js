import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class TransitionScreen extends Component {
  navWithBottomTransition = () => {
    this.props.navigation.navigate('Selection', { transition: 'bottomTransition' });
  };

  navWithSideTransition = () => {
    this.props.navigation.navigate('Selection', { transition: 'sideTransition' });
  };

  navWithFadeTransition = () => {
    this.props.navigation.navigate('Selection', { transition: 'fadeTransition' });
  };

  render() {
    return (
      <View>
        <Button
          title="Button Transition"
          onPress={this.navWithBottomTransition}
        />
        <Button
          title="Side Transition"
          onPress={this.navWithSideTransition}
        />
        <Button
          title="Fade Transition"
          onPress={this.navWithFadeTransition}
        />
      </View>
    )
  }
}

TransitionScreen.navigationOptions = {
  title: 'Transitions',
};
