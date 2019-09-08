import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import DataList from '../components/DataList';

const list = [{
  "name": "Leo Gill",
  "email": "leo.gill@gmail.com",
  "position": "Data Entry Clerk",
  "photo": "https://randomuser.me/api/portraits/men/32.jpg",
  "id": "890e5550-d22d-11e9-bb5b-c9ab60cc5868",
  "show": true
}, {
  "name": "Miyah Myles",
  "email": "miyah.myles@gmail.com",
  "position": "Manager",
  "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  "id": "890e7c60-d22d-11e9-bb5b-c9ab60cc5868",
  "show": true
}, {
  "name": "June Cha",
  "email": "june.cha@gmail.com",
  "position": "Software Engineer",
  "photo": "https://randomuser.me/api/portraits/women/44.jpg",
  "id": "890e7c61-d22d-11e9-bb5b-c9ab60cc5868",
  "show": true
}, {
  "name": "Iida Niskanen",
  "email": "iida.niskanen@gmail.com",
  "position": "Part Time",
  "photo": "https://randomuser.me/api/portraits/women/68.jpg",
  "id": "890e7c62-d22d-11e9-bb5b-c9ab60cc5868",
  "show": true
}, {
  "name": "Renee Sims",
  "email": "renee.sims@gmail.com",
  "position": "Project Manager",
  "photo": "https://randomuser.me/api/portraits/women/65.jpg",
  "id": "890e7c63-d22d-11e9-bb5b-c9ab60cc5868",
  "show": true
}];

class SearchScreen extends Component {
  state = {
    data: list,
  };

  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor: 'white' }}>
        <DataList data={this.state.data}/>
      </View>
    )
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
  headerRight: (<Icon name={'search'}/>)
};

export default SearchScreen;