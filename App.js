/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import App from './src';
import {Provider} from 'react-redux';
import store from './src/data/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import axiosInit from './src/types';

axiosInit();

export default () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </Provider>
);
