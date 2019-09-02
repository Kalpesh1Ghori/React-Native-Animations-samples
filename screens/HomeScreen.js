import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import FadeIn from './FadeIn';
import FadeOut from './FadeOut';
import SpringScale from './SpringScale';
import Rotate from './Rotate';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { MonoText } from '../components/StyledText';

export default HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <FadeIn/>
        </View>
        <View style={{ flex: 1 }}>
          <FadeOut/>
        </View>
      </View>
      <View style={{ backgroundColor: 'green', flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'yellow', flex: 1 }}>
          <SpringScale/>
        </View>
        <View style={{ backgroundColor: 'blue', flex: 1 }}>
          <Rotate/>
        </View>
      </View>
    </View>


  );
}
/*<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'space-around' }}>
      <View style={{flex:1}}>
        <FadeIn style={{flex:1}}/>
        <FadeOut style={{flex:1}}/>
      </View>
      <View style={{flex:1}}>
        <SpringScale style={{flex:1}}/>
        <Rotate style={{flex:1}}/>
      </View>
    </View>*/
HomeScreen.navigationOptions = {
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
  homeScreenFilename: {
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
