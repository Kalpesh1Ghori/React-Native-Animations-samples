import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { Button } from 'react-native-elements';

export default class Minimize extends Component {
  state = {
    isAnimating: false,
    animatedValue: new Animated.Value(0)
  };

  onPress = () => {
    if (this.state.isFinished) {
      this.setState({
        isFinished: false,
        animatedValue: new Animated.Value(0)
      });
      return;
    }
    this.setState({ isAnimating: true, }, () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 1500
      }).start(() => {
        this.setState({ isFinished: true, isAnimating: false });
      });
    });
  };

  render() {
    const size = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['100%', '0%'],
    });
    return (
      <View style={styles.container}>
        <Button
          title={this.state.isFinished ? 'Reset' : 'Minimize'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/cat.png')}
          resizeMode={'contain'}
          style={{
            flex: 1,
            width: size,
            height: size,
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