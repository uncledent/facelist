import { DefaultRootState } from 'react-redux';
import { FaceListState } from '../redux/reducers/facelist.reducers';

export interface RootState extends DefaultRootState {
  faceList: FaceListState;
}
