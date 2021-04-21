import {baseUrl} from '../constants';

export const request = <T extends any>(
  endpoint: string,
  options: RequestInit = {
    method: 'GET',
  },
): Promise<T> =>
  fetch(`${baseUrl}/${endpoint}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json();
    })
    .catch(error => console.log(error));
