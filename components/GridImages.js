import React from 'react';
import { View, FlatList } from 'react-native';
import { Image } from 'react-native-elements';

const GridImages = (props) => {
  const renderItem = ({ index, item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <Image
          source={{ uri: item.photo }}
          resizeMode={'stretch'}
          style={{
            width: '100%',
            minHeight: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}/>
      </View>
    )
  };

  return (
    <FlatList
      numColumns={3}
      horizontal={false}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id}
    />
  )
};

export default GridImages;