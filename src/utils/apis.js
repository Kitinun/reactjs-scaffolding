import { httpClient } from './httpClient';

export const getTripTh = async (params) => {
  return await httpClient.get(`/api/trips`, { params: params });
}

