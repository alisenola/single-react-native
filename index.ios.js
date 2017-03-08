import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import App from './app/native/index';
import configureStore from './app/store/configureStore.prod.js';

const store = configureStore();

class webnative extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('webnative', () => webnative);