import { FaceItem } from '../../interfaces/faceItem.interface';
import { api } from '../../lib/api';
import { FACELIST } from '../redux-types';

export function fetchFaceList() {
  return (dispatch: Function) => {
    dispatch({ type: FACELIST.REQUEST });
    return api
      .get<FaceItem[]>('')
      .then((res: FaceItem[]) => {
        dispatch({
          type: FACELIST.SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        dispatch({
          type: FACELIST.FAILURE,
          payload: { errorMessage: getErrorMessage(error) },
        });
      });
  };
}

function getErrorMessage(error: any) {
  if (typeof error?.message === 'string') {
    return error.message;
  }
  // as this is a test task, I wont write the whole error handler
  return 'Something went wrong';
}
