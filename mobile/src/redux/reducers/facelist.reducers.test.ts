import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { faceList } from './facelist.reducers';
import * as types from '../redux-types';
import { FetchableList } from '../../interfaces/fetchable-list.interface';
import { FaceItem } from '../../interfaces/faceItem.interface';

const initialState: FetchableList<FaceItem> = {
  items: {},
  fetching: false,
  errorMessage: '',
};

describe('facelist reducers', () => {
  it('should return the initial state', () => {
    expect(faceList(undefined, {})).toEqual({
      ...initialState,
    });
  });

  it('should handle request and update fetching flag', () => {
    expect(
      faceList(
        {
          ...initialState,
        },
        {
          type: types.FACELIST.REQUEST,
        }
      )
    ).toEqual({ ...initialState, fetching: true });
  });

  it('should handle request fail and update fetching flag and error message', () => {
    expect(
      faceList(
        {
          ...initialState,
        },
        {
          type: types.FACELIST.FAILURE,
          payload: { errorMessage: 'ErrorMessage' },
        }
      )
    ).toEqual({ ...initialState, errorMessage: 'ErrorMessage' });
  });

  it('should handle request success, update fetching flag and reduce items', () => {
    expect(
      faceList(
        {
          ...initialState,
        },
        {
          type: types.FACELIST.SUCCESS,
          payload: [
            {
              id: '1',
              name: '1',
              avatar: 'avatar',
            },
            {
              id: '2',
              name: '2',
              avatar: 'avatar2',
            },
          ],
        }
      )
    ).toEqual({
      ...initialState,
      items: {
        '1': { id: '1', name: '1', avatar: 'avatar' },
        '2': { id: '2', name: '2', avatar: 'avatar2' },
      },
    });
  });
});
