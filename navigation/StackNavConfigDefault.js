import { Platform } from 'react-native';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


export default config;