import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, textSizes, units } from '../config/style-units';

export const FaceListHeader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Facelist:</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: units.padding * 4,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignContent: 'stretch',
  },
  text: {
    fontWeight: 'bold',
    fontSize: textSizes.header1,
  },
});
