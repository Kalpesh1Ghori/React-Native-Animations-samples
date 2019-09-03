import React, { Component } from 'react';
import { StyleSheet, View, Platform, UIManager, LayoutAnimation } from 'react-native';
import DataList from '../components/DataList';
import { Input, Button, Icon } from 'react-native-elements';
import axios from 'axios';
import _ from 'lodash';
import uuid from 'uuid/v1';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomLayoutLinear = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.scaleY,
  },
  update: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.scaleY
  },
  delete: {
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.scaleY
  }
};

export default class LayoutAnimationScreen extends Component {
  state = {
    name: '',
    data: [],
    isLoading: false,
    isProcessing: false,
    position: '',
  };

  componentDidMount() {
    LayoutAnimation.configureNext(CustomLayoutLinear)
  }

  async componentDidMount() {
    this.setState({ isLoading: true});
    const data = await this.fetchItems();
    this.setState({ isLoading: false, data });
  }

  fetchItems = async () => {
    try {
      const res = await axios.get('https://uifaces.co/api?limit=20', { headers: { 'X-API-KEY': '407e264ea8ab423b337832348fa807' } });
      const resWithIds = res.data.map(item => ({ ...item, id: uuid(), show: true }));
      return resWithIds;
    } catch (ex) {
      console.log(ex);
    }
  };

  fetchItem = async () => {
    try {
      const res = await axios.get('https://uifaces.co/api?random&limit=1', { headers: { 'X-API-KEY': '407e264ea8ab423b337832348fa807' } });
      return { ...res.data[0], id: uuid(), show: false };
    } catch (ex) {
      console.log(ex);
    }
  };

  addItem = async () => {
    if (!this.state.name) {
      return;
    }
    this.setState({ isProcessing: true });
    const item = await this.fetchItem();
    item['name'] = this.state.name;
    console.log(item);
    const position = _.toNumber(this.state.position);
    const arr = [...this.state.data];
    arr.splice(position, 0, item);
    LayoutAnimation.configureNext(CustomLayoutLinear);
    this.setState({ data: arr, name: '', isProcessing: false });

  };

  onChangeName = (name) => {
    this.setState({ name });
  };

  onChanePosition = (position) => {
    try {
      let number = _.toNumber(position);
      number = Math.round(number);
      if (_.isNaN(number) || number < 0) {
        number = 0;
      } else if (number > (this.state.data.length)) {
        number = (this.state.data.length)
      }
      this.setState({ position: number.toString() });
    } catch (ex) {
      console.log(ex);
      this.setState({ position: '0' });
    }
  };

  removeItem = ({ item, index }) => {
    console.log(item, index);
    const arr = [...this.state.data];
    arr.splice(index, 1);
    LayoutAnimation.configureNext(CustomLayoutLinear);
    this.setState({ data: arr });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Input
            containerStyle={{ flex: 3 }}
            value={this.state.name}
            onChangeText={this.onChangeName}
            placeholder={'add name...'}
          />
          <Button
            icon={
              <Icon
                name={'add-circle-outline'}
                color={this.state.name ? 'blue' : 'lightgray'}
                onPress={this.addItem}
              />
            }
            loading={this.state.isProcessing}
            type={'clear'}
          />
          <Input
            containerStyle={{ flex: 1 }}
            value={this.state.position}
            onChangeText={this.onChanePosition}
            placeholder={'position...'}
            keyboardType={'numeric'}
          />
        </View>
        <DataList
          data={this.state.data}
          isLoading={this.state.isLoading}
          removeItem={this.removeItem}
        />
      </View>
    );
  }
}

LayoutAnimationScreen.navigationOptions = {
  title: 'Layout Animation',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
