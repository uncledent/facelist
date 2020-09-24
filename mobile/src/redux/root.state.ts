import { DefaultRootState } from 'react-redux';
import { FaceListState } from './reducers/facelist.reducers';

export interface RootState extends DefaultRootState {
  faceList: FaceListState;
}
