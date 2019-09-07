import React, { Component } from 'react';
import FadeIn from '../components/FadeIn';
import FadeOut from '../components/FadeOut';
import SpringScale from '../components/SpringScale';
import Rotate from '../components/Rotate';
import { View, ScrollView } from 'react-native';
import SpringRotate from '../components/SpringRotate';
import Minimize from '../components/Minimize';
import MaximizeFadeout from '../components/MaximizeFadeout';
import MoveXY from '../components/MoveXY';

export default class AnimatedAPIScreen extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
          <View style={{ flex: 1 }}>
            <FadeIn/>
          </View>
          <View style={{ flex: 1 }}>
            <FadeOut/>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
          <View style={{ flex: 1 }}>
            <SpringScale/>
          </View>
          <View style={{ flex: 1 }}>
            <Rotate/>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
          <View style={{ flex: 1 }}>
            <SpringRotate/>
          </View>
          <View style={{ flex: 1 }}>
            <Minimize/>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
          <View style={{ flex: 1 }}>
            <MaximizeFadeout/>
          </View>
          <View style={{ flex: 1 }}>
            <MoveXY/>
          </View>
        </View>
      </ScrollView>


    );
  }
};

AnimatedAPIScreen.navigationOptions = {
  headerTitle: 'Animated API',
};