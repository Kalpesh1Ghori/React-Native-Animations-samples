import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Button } from 'react-native-elements';

export default class Rotate extends Component {
  state = {
    isAnimating: false,
    animatedValue: new Animated.Value(0)
  };

  onPress = () => {
    this.setState({ isAnimating: true, }, () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }).start(() => {
        this.setState({animatedValue: new Animated.Value(0), isAnimating: false });
      });
    });
  };

  render() {
    const rotate = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <Button
          title={'Rotate'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/einstein.png')}
          resizeMode={'contain'}
          style={{
            flex:1,
            width: '100%',
            height: '100%',
            transform: [{ rotate: rotate }],
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:10,
    padding:5,
    borderWidth:1,
    borderColor: 'gray',
  },
});