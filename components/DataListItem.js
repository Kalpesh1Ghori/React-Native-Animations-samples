import React from 'react';
import { ListItem } from 'react-native-elements'
import _ from 'lodash';

const DataListItem = (
  {
    index,
    item,
    item: { name, position, photo, id },
    removeItem
  }) => {
  const enableRemoveItem = _.isFunction(removeItem);
  return (
    <ListItem
      key={id.toString()}
      leftAvatar={{ source: { uri: photo } }}
      title={name}
      subtitle={position}
      rightIcon={
        enableRemoveItem ?
          {
            name: 'cancel',
            color: 'red',
            onPress: () => removeItem({ item, index })
          }
          : null
      }
    />)
};

export default DataListItem;