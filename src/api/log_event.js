import { axiosInstance } from './axios.config';

export const createEvent = async (data) => {
  return axiosInstance.post(`/events`, data);
};
