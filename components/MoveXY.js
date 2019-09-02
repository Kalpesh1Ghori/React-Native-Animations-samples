import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { Button } from 'react-native-elements';

export default class MoveXY extends Component {
  state = {
    isAnimating: false,
    animatedValue: new Animated.ValueXY({ x: -20, y: 0 }),
    flipValue: -20,
  };

  onPress = () => {
    this.setState({ isAnimating: true, flipValue: this.state.flipValue * (-1) }, () => {
      Animated.timing(this.state.animatedValue, {
        toValue: { x: this.state.flipValue, y: 0 },
      }).start(() => this.setState({ isAnimating: false }));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={'Move'}
          onPress={() => this.onPress()}
          loading={this.state.isAnimating}
          disabled={this.state.isAnimating}
        />
        <Animated.Image
          source={require('../assets/images/run.gif')}
          resizeMode={'contain'}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            transform: this.state.animatedValue.getTranslateTransform()
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