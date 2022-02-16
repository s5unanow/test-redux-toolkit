import { AxiosResponse } from 'axios';
import { UNSUCCESSFUL_RESPONSE } from '../http-client.constants';
import type { ApiResponse } from 'ts';

export const responseAdapter = <T>(response: AxiosResponse<ApiResponse<T>>) => {
  if (response.data.successful) {
    return response.data.result;
  }
  return Promise.reject(UNSUCCESSFUL_RESPONSE);
};
