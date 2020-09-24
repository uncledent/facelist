import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { units } from '../config/style-units';

const DEFAULT_SIZE = 4;

interface Props {
  uri: string;
}

export const Avatar = ({ uri }: Props) => {
  return <Image source={{ uri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: units.size * DEFAULT_SIZE,
    height: units.size * DEFAULT_SIZE,
    borderRadius: (units.size * DEFAULT_SIZE) / 2,
  },
});
