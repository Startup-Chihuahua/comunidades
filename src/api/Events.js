import { axiosInstance } from './axios.config';

export const GetEvents = async () => {
  return axiosInstance.get(`/events`);
};
