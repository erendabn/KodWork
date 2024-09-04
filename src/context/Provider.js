import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {legacy_createStore} from 'redux';
import reducers from './reducers';
import initialState from './store.js';

const UserProvider = ({children}) => {
  const store = legacy_createStore(reducers, initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
