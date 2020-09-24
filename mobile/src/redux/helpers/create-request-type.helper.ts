const REQUEST: string = 'REQUEST';
const SUCCESS: string = 'SUCCESS';
const FAILURE: string = 'FAILURE';

export const defaultTypes: string[] = [REQUEST, SUCCESS, FAILURE];

export type DefaultActionTypes = {
  FAILURE: string;
  SUCCESS: string;
  REQUEST: string;
};

/**
 * Creates default redux types for request call types
 * @param base
 * @param types
 */
export function createRequestTypes(
  base: string,
  types: any = defaultTypes
): DefaultActionTypes {
  const res: any = {};
  types.forEach((type: string) => (res[type] = `${base}_${type}`));
  return res;
}
