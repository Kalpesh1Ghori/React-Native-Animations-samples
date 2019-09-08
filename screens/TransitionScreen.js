import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios/index';
import uuid from 'uuid/v1';
import GridImages from '../components/GridImages';

export default class TransitionScreen extends Component {

  state = {
    data: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const data = await this.fetchItems();
    this.setState({ isLoading: false, data });
  }

  fetchItems = async () => {
    try {
      const res = await axios.get('https://uifaces.co/api?random&limit=20', { headers: { 'X-API-KEY': '407e264ea8ab423b337832348fa807' } });
      const resWithIds = res.data.map(item => ({ photo: item.photo, id: uuid() }));
      return resWithIds;
    } catch (ex) {
      console.log(ex);
    }
  };

  navWithBottomTransition = () => {
    this.props.navigation.navigate('Search', { transition: 'bottomTransition' });
  };

  navWithSideTransition = () => {
    this.props.navigation.navigate('Settings', { transition: 'sideTransition' });
  };

  navWithFadeTransition = () => {
    this.props.navigation.navigate('Details', { transition: 'fadeTransition' });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          buttonStyle={{ margin: 10 }}
          title="Button Transition"
          onPress={this.navWithBottomTransition}
        />
        <Button
          buttonStyle={{ margin: 10 }}
          title="Side Transition"
          onPress={this.navWithSideTransition}
        />
        <Button
          buttonStyle={{ margin: 10 }}
          title="Fade Transition"
          onPress={this.navWithFadeTransition}
        />
        <View style={{ flex: 1 }}>
          <GridImages
            data={this.state.data}
          />
        </View>
      </View>
    )
  }
}

TransitionScreen.navigationOptions = {
  title: 'Transitions',
};
