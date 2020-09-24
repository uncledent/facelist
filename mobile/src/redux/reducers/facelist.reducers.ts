import { FaceItem } from '../../interfaces/faceItem.interface';
import { FetchableList } from '../../interfaces/fetchable-list.interface';
import { createReducer } from '../helpers/create-reducer.helper';
import { FACELIST } from '../redux-types';

export type FaceListState = FetchableList<FaceItem>;

const initialState: FetchableList<FaceItem> = {
  items: {},
  fetching: false,
  errorMessage: '',
};

export const faceList = createReducer(initialState, {
  [FACELIST.REQUEST](
    state: FaceListState,
    action: { permissionType: string; grant: string }
  ): FaceListState {
    return {
      ...state,
      fetching: true,
    };
  },
  [FACELIST.FAILURE](
    state: FaceListState,
    action: { payload: { errorMessage: string } }
  ): FaceListState {
    return {
      ...state,
      fetching: false,
      errorMessage: action.payload.errorMessage,
    };
  },
  [FACELIST.SUCCESS](
    state: FaceListState,
    action: { payload: FaceItem[] }
  ): FaceListState {
    const { payload } = action;
    return {
      ...state,
      fetching: false,
      items: payload.reduce((map, next: FaceItem) => {
        map[next.id] = next;
        return map;
      }, {} as { [id: string]: FaceItem }),
    };
  },
});
