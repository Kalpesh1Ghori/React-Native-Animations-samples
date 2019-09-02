import React from 'react';
import FadeIn from '../components/FadeIn';
import FadeOut from '../components/FadeOut';
import SpringScale from '../components/SpringScale';
import Rotate from '../components/Rotate';
import { StyleSheet, Platform, View, ScrollView } from 'react-native';
import SpringRotate from '../components/SpringRotate';
import Minimize from '../components/Minimize';
import MaximizeFadeout from '../components/MaximizeFadeout';
import MoveXY from '../components/MoveXY';

export default AnimatedAPIScreen = () => {
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

AnimatedAPIScreen.navigationOptions = {
  headerTitle: 'Animated API',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  AnimatedAPIScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
