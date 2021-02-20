/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { State } from 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
