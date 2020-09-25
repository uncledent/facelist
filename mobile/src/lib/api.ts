import { config } from '../config/config';

const get = <T>(url: string): Promise<T> => handleRequest('GET', url);

/**
 * Function that performs fetch
 * @param method
 * @param url
 */
const handleRequest = <T>(method: 'GET', url: string): Promise<T> =>
  fetch(`${config.apiUrl}/${url}`, { method })
    .then((r) => validateResponse(r))
    .then((r) => parseResponse(r));

/**
 * Validates response by response status
 * @param response
 */
const validateResponse = async (response: Response): Promise<Response> => {
  if (!response || response.status < 200 || response.status > 299) {
    const error = {
      status: response.status,
      message: response.statusText,
    };
    throw error;
  } else {
    return response;
  }
};

/**
 * Parses response JSON
 * @param response
 */
const parseResponse = async <T>(response: Response): Promise<T> => {
  try {
    return await response.json();
  } catch (error) {
    throw { message: 'JSON parsing error' };
  }
};

export const api = { get };
