import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements'

class SelectionScreen extends Component {
  state = {
    list: [{
      title: 'Appointments',
      icon: 'av-timer'
    }, {
      title: 'Trips',
      icon: 'flight-takeoff'
    },
    ]
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

SelectionScreen.navigationOptions = {
  title: 'Select',
};

export default SelectionScreen;