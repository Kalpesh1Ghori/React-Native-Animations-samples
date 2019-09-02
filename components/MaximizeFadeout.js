import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated, Easing,
} from "react-native";
import { Button } from 'react-native-elements';

export default class SpringRotate extends Component {
  state = {
    isAnimating: false,
    sizeAnimatedValue: new Animated.Value(0),
    opacityAnimatedValue: new Animated.Value(1),
  };

  onPress = () => {
    if (this.state.isFinished) {
      this.setState({
        isFinished: false,
        sizeAnimatedValue: new Animated.Value(0),
        opacityAnimatedValue: new Animated.Value(1),
      });
      return;
    }
    this.setState({ isAnimating: true, }, () => {
      Animated.parallel([
        Animated.timing(this.state.sizeAnimatedValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.timing(this.state.opacityAnimatedValue, {
          toValue: 0,
          duration: 2000
        })])
      .start(() => {
        this.setState({ isFinished: true, isAnimating: false });
      });
    });
  };

  render() {
    const size = this.state.sizeAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['10%', '100%'],
    });
    return (
      <View style={styles.container}>
        <Button
          title={this.state.isFinished ? 'Reset' : 'Maximize & Fadeout'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/batman.png')}
          resizeMode={'contain'}
          style={{
            alignSelf:'center',
            flex: 1,
            width: size,
            height: size,
            opacity: this.state.opacityAnimatedValue,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
});