import { axiosInstance } from './axios.config';

export const CreateUser = async (data) => {
  return axiosInstance.post(`/users`, data);
};

