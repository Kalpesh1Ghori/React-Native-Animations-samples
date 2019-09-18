import React from 'react';
import {
  View,
  ListView,
  Dimensions,
  Switch
} from 'react-native';
import PHOTOS from '../assets/data';
import { processImages, buildRows, normalizeRows } from '../utils/utils';
import PhotoGallery from '../components/PhotoGallery';
import GridItem from '../components/GridItem';

const maxWidth = Dimensions.get('window').width;

export default class SharedElmScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isChaos: false,
    };
    this.interval = null;
  }

  componentWillMount() {
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState({ dataSource: ds.cloneWithRows(rows) });
  }

  componentDidMount() {
    this.props.navigation.setParams({ isChaos: this.state.isChaos });
    this.props.navigation.setParams({ toggleChaos: this.toggleChaos });
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
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen}/>
      )}
    </View>;

  toggleChaos = () => {
    this.setState({ isChaos: !this.state.isChaos }, () => {
      this.props.navigation.setParams({ isChaos: this.state.isChaos });
      if (this.state.isChaos) {
        console.log('chaos on');
        this.interval = setInterval(() => {
          console.log('inside interval');
          for (let i = 0; i < 500; i++) {
            console.log(i);
          }
        }, 1000);
      } else {
        console.log('chaos off');
        clearInterval(this.interval);
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PhotoGallery
          useNativeDriver={!this.state.isChaos}
          renderContent={({ onPhotoOpen }) =>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this, onPhotoOpen)}
            />}
        />
      </View>
    );
  }
}

SharedElmScreen.navigationOptions = ({ navigation }) => ({
  title: 'Shared Element',
  headerRight: (
    <Switch
      value={navigation.getParam('isChaos')}
      onChange={navigation.getParam('toggleChaos')}
    />
  ),
});