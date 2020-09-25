import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../redux-types';
import * as actions from './facelist.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('facelist actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create actions when fetching facelist', () => {
    fetchMock.getOnce('', {
      body: [{ id: '1', name: 'Name', avatar: 'avatar' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.FACELIST.REQUEST },
      {
        type: types.FACELIST.SUCCESS,
        payload: [{ id: '1', name: 'Name', avatar: 'avatar' }],
      },
    ];
    const store = mockStore({ faceList: {} });

    return store.dispatch(actions.fetchFaceList() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create actions when fetching facelist failed', () => {
    fetchMock.getOnce('', {
      status: 500,
      body: undefined,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.FACELIST.REQUEST },
      {
        type: types.FACELIST.FAILURE,
        payload: { errorMessage: 'Internal Server Error' },
      },
    ];
    const store = mockStore({ faceList: {} });

    return store.dispatch(actions.fetchFaceList() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create actions when parsing response data failed', () => {
    fetchMock.getOnce('', {
      status: 200,
      body: "{'invalidJson}",
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.FACELIST.REQUEST },
      {
        type: types.FACELIST.FAILURE,
        payload: { errorMessage: 'JSON parsing error' },
      },
    ];
    const store = mockStore({ faceList: {} });

    return store.dispatch(actions.fetchFaceList() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create actions when fetching facelist failed with unusual response status', () => {
    fetchMock.getOnce('', {
      status: 10,
      body: [],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.FACELIST.REQUEST },
      {
        type: types.FACELIST.FAILURE,
        payload: { errorMessage: 'Something went wrong' },
      },
    ];
    const store = mockStore({ faceList: {} });

    return store.dispatch(actions.fetchFaceList() as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
