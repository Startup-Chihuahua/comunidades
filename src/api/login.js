import { axiosInstance } from './axios.config';
export const validateLogin = async (mail, password) => {
  
  return axiosInstance
    .post(`/login`, {
      mail,
      password,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error.response.data;
    });
};
