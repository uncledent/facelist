import React, { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FaceListHeader } from '../components/FaceListHeader';
import { colors } from '../config/style-units';
import { useShowErrorNotification } from '../hooks/use-show-error-notification.hook';
import { FaceItem } from '../interfaces/faceItem.interface';
import { fetchFaceList } from '../redux/actions/facelist.actions';
import { RootState } from '../redux/root.state';
import { FaceListItem } from './FaceListItem';

export const FaceList = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.faceList);

  const { fetching, items, errorMessage } = state;

  useShowErrorNotification(errorMessage);

  const [data, setData] = useState<FaceItem[]>([]);

  const fetchData = () => {
    dispatch(fetchFaceList());
  };

  useEffect(fetchData, []);

  const mapData = () => {
    setData(Object.values(items));
  };

  /** Data will be only mapped to an array once the new data is received, not on each render */
  useEffect(mapData, [items]);

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FaceListItem item={item} />}
      ListEmptyComponent={<Text>No data yet</Text>}
      ListHeaderComponent={<FaceListHeader />}
      refreshing={fetching}
      onRefresh={fetchData}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.background,
  },
});
