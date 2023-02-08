import { axiosInstance } from './axios.config';

export const GetEvents = async (token) => {
  axiosInstance.defaults.headers.common = {'auth-token': token}
  return axiosInstance.get(`/events`);
};
