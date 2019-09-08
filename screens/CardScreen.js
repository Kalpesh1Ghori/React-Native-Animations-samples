import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'


class CardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Card
          title='Albert Einstein'
          image={require('../assets/images/einstein.png')}>
          <Text style={{ marginBottom: 10 }}>
            He is best known to the general public for his mass–energy equivalence formula E=mc^2 E = mc^2, which has
            been dubbed "the world's most famous equation"
          </Text>
          <Button
            icon={<Icon name='remove-red-eye' color='#ffffff'/>}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          />
        </Card>
      </View>
    )
  }
}

CardScreen.navigationOptions = {
  title: 'Card',
};

export default CardScreen;