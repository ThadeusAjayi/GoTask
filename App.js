/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import App from './src';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/data/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// require('./src/types/');

export default () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <View style={{height: 200, width: "100%", backgroundColor: 'blue'}} />
    </SafeAreaProvider>
  </Provider>
);
