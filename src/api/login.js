import { axiosInstance } from './axios.config';
export const validateLogin = async (mail, password) => {
  return axiosInstance
    .post(`/login`, {
      mail,
      password,
    });
};
