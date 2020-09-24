import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import * as faceListReducers from './reducers/facelist.reducers';

export const reducers = combineReducers({
  ...faceListReducers,
});

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunkMiddleware)
);
