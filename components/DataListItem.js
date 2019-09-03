import React from 'react';
import { ListItem } from 'react-native-elements'

const DataListItem = (
  {
    index,
    item,
    item: { name, position, photo, id },
    removeItem
  }) => {
  return (
    <ListItem
      key={id.toString()}
      leftAvatar={{ source: { uri: photo } }}
      title={name}
      subtitle={position}
      rightIcon={{
        name: 'cancel',
        color: 'red',
        onPress: () => removeItem({ item, index })
      }}
    />)
};

export default DataListItem;