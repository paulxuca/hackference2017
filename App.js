import React from 'react';
import {Provider} from 'react-redux';
import App from './src/components/app';
import createStore from './src/lib/create-store';

const store = createStore();

export default () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
