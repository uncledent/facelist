type handlerFn<T> = (
  state: T,
  action?: { type?: string; [id: string]: any } | any
) => T;
/**
 * Abstract function that allows us to avoid creating multiple switch functions
 * @param initialState
 * @param handlers
 */
export function createReducer<T>(
  initialState: T,
  handlers: {
    [key: string]: handlerFn<T>;
  }
) {
  return function reducer(
    state: T = initialState,
    action: { type?: string; payload?: any }
  ) {
    if (handlers.hasOwnProperty(action!.type!)) {
      return handlers[action!.type!](state, action);
    } else {
      return state;
    }
  };
}
