import axios from 'axios';
import { HttpClient } from './http-client.types';
import { HTTP_CLIENT_SETTINGS } from './http-client.constants';
import { responseAdapter } from './interceptors/response-adapter';

export const httpClient = axios.create({
  baseURL: HTTP_CLIENT_SETTINGS.BASE_URL,
  timeout: HTTP_CLIENT_SETTINGS.TIMEOUT,
}) as HttpClient;

httpClient.interceptors.response.use(responseAdapter);
