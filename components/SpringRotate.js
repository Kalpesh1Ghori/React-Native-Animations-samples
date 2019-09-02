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
    rotateAnimatedValue: new Animated.Value(0),
    scaleAnimatedValue: new Animated.Value(0.3),
  };

  onPress = () => {
    if (this.state.isFinished) {
      this.setState({
        isFinished: false,
        rotateAnimatedValue: new Animated.Value(0),
        scaleAnimatedValue: new Animated.Value(0.3),
      });
      return;
    }
    this.setState({ isAnimating: true, }, () => {
      Animated.parallel([
        Animated.timing(this.state.rotateAnimatedValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }),
        Animated.spring(this.state.scaleAnimatedValue, {
          toValue: 1,
          friction: 1,
        })])
      .start(() => {
        this.setState({ isFinished: true, isAnimating: false });
      });
    });
  };

  render() {
    const rotate = this.state.rotateAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <Button
          title={this.state.isFinished ? 'Reset' : 'Spring & Rotate'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/dj.png')}
          resizeMode={'contain'}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            transform: [
              { scale: this.state.scaleAnimatedValue },
              { rotate: rotate }
            ],
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