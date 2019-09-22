import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/Reactotron';

import Routes from './routes';
import NavigationService from './services/navigation';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
