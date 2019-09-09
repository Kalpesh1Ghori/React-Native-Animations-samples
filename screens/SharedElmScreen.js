import React from 'react';
import {
  View,
  ListView,
  Dimensions,
} from 'react-native';
import PHOTOS from '../assets/data';
import { processImages, buildRows, normalizeRows } from '../utils/utils';
import PhotoGallery from '../components/PhotoGallery';
import GridItem from '../components/GridItem';

const maxWidth = Dimensions.get('window').width;

export default class SharedElmScreen extends React.Component {
  componentDidMount() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(rows)
    };
  }

  renderRow = (onPhotoOpen, row) =>
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between'
      }}
    >
      {row.map(item =>
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
      )}
    </View>;

  render() {
    return (
      <PhotoGallery
        renderContent={({ onPhotoOpen }) =>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this, onPhotoOpen)}
          />}
      />
    );
  }
}

SharedElmScreen.navigationOptions = {
  title: 'Shared Element',
};