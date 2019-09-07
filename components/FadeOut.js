import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Platform
} from "react-native";
import { Button } from 'react-native-elements';

export default class FadeIn extends Component {
  resizeMode = (Platform.OS === 'android') ? 'center' : 'contain';

  state = {
    isFinished: false,
    isAnimating: false,
    animatedValue: new Animated.Value(1)
  };

  onPress = () => {
    if (this.state.isFinished) {
      this.setState({
        isFinished: false,
        animatedValue: new Animated.Value(1)
      });
      return;
    }
    this.setState({ isAnimating: true, }, () => {
      Animated.timing(this.state.animatedValue, {
        toValue: 0,
        duration: 1500
      }).start(() => this.setState({ isFinished: true, isAnimating: false }));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.isFinished ? 'Reset' : 'Fade Out'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/bye.gif')}
          resizeMode={this.resizeMode}
          style={{
            width: '100%',
            height: '100%',
            opacity: this.state.animatedValue,
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