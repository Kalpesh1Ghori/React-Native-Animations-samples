import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

class SettingsScreen extends Component {
  state = {
    list: [{
      title: 'Appointments',
      icon: 'av-timer'
    }, {
      title: 'Trips',
      icon: 'flight-takeoff'
    }, {
      title: 'Vacation',
      icon: 'beach-access',
    }, {
      title: 'Cars',
      icon: 'drive-eta',
    }, {
      title: 'Hotels',
      icon: 'home',
    }, {
      title: 'Pictures',
      icon: 'camera',
    }, {
      title: 'Hotel',
      icon: 'hotel',
    }, {
      title: 'Bars',
      icon: 'local-bar',
    }, {
      title: 'Food',
      icon: 'local-pizza',
    }]
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
              bottomDivider
              chevron
            />
          ))
        }
      </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
  headerRight: (<Icon name={'settings'}/>)
};

export default SettingsScreen;