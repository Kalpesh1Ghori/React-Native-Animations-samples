import React, { Component } from 'react';
import { View, Text } from 'react-native';


class DetailsScreen3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <View style={{ height: '30%', width: '100%', backgroundColor: 'red' }}/>
        <View style={{ height: '70%', width: '100%', backgroundColor: 'white' }}>
          <Text>
            Avatar derives from a Sanskrit word meaning "descent," and when it first appeared in
            English in the late 18th century, it referred to the descent of a deity to the earth—typically,
            the incarnation in earthly form of Vishnu or another Hindu deity. It later came to refer to any incarnation in human form,
            and then to any embodiment (such as that of a concept or philosophy), whether or not in the form of a person.
            In the age of technology, avatar has developed another sense—it can now be used for the image that a person chooses as his or her "embodiment" in an electronic medium.
          </Text>
        </View>
      </View>
    )
  }
}

DetailsScreen3.navigationOptions = {
  title: 'Details',
};

export default DetailsScreen3;