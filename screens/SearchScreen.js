import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class SearchScreen extends Component {
  state = {
    list: [{
      title: 'John',
      icon: <EvilIcons name={'user'} size={26} />
    }, {
      title: 'Arik',
      icon: <FontAwesome name={'user'} size={26} />
    }, {
      title: 'Lee',
      icon: 'user'
    }, {
      title: 'Hanna',
      icon: 'user'
    }, {
      title: 'Elza',
      icon: 'user'
    }, {
      title: 'Pitter',
      icon: 'user'
    }, {
      title: 'Dan',
      icon: 'user',
    }, {
      title: 'Ali',
      icon: 'user',
    }, {
      title: 'Mike',
      icon:'user',
    }
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
            />
          ))
        }
      </View>
    )
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
  headerRight: (
    <Icon
      name={'search'}
    />
  )
};

export default SearchScreen;