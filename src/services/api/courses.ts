import { httpClient } from 'services/http-client';
import { Course } from 'ts';
import { API_URLS } from './api.constants';

export const getCoursesApi = () =>
  httpClient.get<Course[]>(API_URLS.GET_COURSES);
