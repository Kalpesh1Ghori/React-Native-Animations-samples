import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { Button } from 'react-native-elements';


export default class FadeIn extends Component {
  state = {
    isFinished: false,
    isAnimating: false,
    fadeValue: new Animated.Value(0)
  };

  onPress = () => {
    if (this.state.isFinished) {
      this.setState({
        isFinished: false,
        fadeValue: new Animated.Value(0)
      });
      return;
    }
    this.setState({ isAnimating: true, }, () => {
      Animated.timing(this.state.fadeValue, {
        toValue: 1,
        duration: 1500
      }).start(() => this.setState({ isFinished: true, isAnimating: false }));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.isFinished ? 'Reset' : 'Fade In'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/hi.gif')}
          resizeMethod={'contain'}
          resizeMode={'contain'}
          style={{
            flex:1,
            width: '100%',
            height: '100%',
            opacity: this.state.fadeValue,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});