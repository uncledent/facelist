import React from 'react';
import { SafeAreaView } from 'react-native';

import { FaceList } from '../components/FaceList';

export const FaceListScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <FaceList />
  </SafeAreaView>
);
