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
        duration: 2000
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
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/hi.gif')}
          resizeMode={'contain'}
          style={{
            flex:1,
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
    flex:1,
    margin:10,
    padding:5,
    borderWidth:1,
    borderColor: 'gray',
  },
});