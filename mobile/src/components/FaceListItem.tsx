import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, textSizes, units } from '../config/style-units';

import { FaceItem } from '../interfaces/faceItem.interface';
import { Avatar } from './Avatar';

interface Props {
  item: FaceItem;
}

export const FaceListItem = ({ item }: Props) => {
  return (
    <View style={styles.container}>
      <Avatar uri={item.avatar} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: units.size * 6,
    padding: units.padding * 2,
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 0.5,
  },
  name: {
    fontSize: textSizes.regularText,
    paddingLeft: units.padding * 2,
  },
});
