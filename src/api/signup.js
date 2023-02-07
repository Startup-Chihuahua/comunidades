import { axiosInstance } from './axios.config';

export const CreateUser = async (data) => {
  return axiosInstance.post(`/users`, data);
};

export const GetUserId = async (id,token) => {
  axiosInstance.defaults.headers.common = {'auth-token': token}
  return axiosInstance.get(`/users/`+ id);

};
export const UpdateUser = async (id,token,data) => {
 
  axiosInstance.defaults.headers.common = {'auth-token': token}
  return axiosInstance.put(`/users/`+ id, data);

};
