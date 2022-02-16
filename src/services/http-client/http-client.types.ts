import { AxiosInstance } from 'axios';
import { API_URLS } from 'services/api/api.constants';
import { Value } from 'ts';

export interface HttpClient extends AxiosInstance {
  get: <T>(url: Value<API_URLS>) => Promise<T>
}