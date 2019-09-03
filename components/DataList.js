import React from 'react';
import { FlatList } from 'react-native';
import DataListItem from './DataListItem'


const DataList = (props) => {
  const renderItem = ({ item, index }) => {
    return (
      <DataListItem item={item} index={index} removeItem={props.removeItem}/>
    )
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={props.data}
      renderItem={renderItem}
      refreshing={props.isLoading}
    />
  )
};

export default DataList;