import { FaceItem } from '../../interfaces/faceItem.interface';
import { api } from '../../lib/api';
import { FACELIST } from '../redux-types';

export function fetchFaceList() {
  return (dispatch: Function) => {
    dispatch({ type: FACELIST.REQUEST });
    api
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
          payload: getErrorMessage(error),
        });
      });
  };
}

function getErrorMessage(error: any) {
  if (typeof error === 'string') {
    return error;
  }
  if (error && error.statusCode) {
    switch (error.statusCode) {
      case 400:
        return 'Bad request';
      case 403:
        return 'Not allowed';
      default:
        return 'Something went wrong';
    }
  }
  return 'Something went wrong';
}
