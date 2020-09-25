import React from 'react';
import { render as rtlRender } from 'react-native-testing-library';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from '../redux/store';

function render(
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(
      reducers,
      initialState,
      applyMiddleware(thunkMiddleware)
    ),
    ...renderOptions
  }: { initialState?: any; store?: any } = {}
) {
  function Wrapper({
    children,
  }: {
    children: React.ReactChildren;
  }): React.ReactNode {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper as any, ...renderOptions });
}

// re-export everything
export * from 'react-native-testing-library';
// override render method
export { render };
