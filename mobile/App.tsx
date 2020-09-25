import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { FaceListScreen } from './src/screens/FaceListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <FaceListScreen />
      <StatusBar style='auto' />
    </Provider>
  );
}
