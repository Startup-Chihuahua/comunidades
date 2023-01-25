import { axiosInstance } from "./axios.config";
export const newPassword = async (uuid, password) => {
  return axiosInstance.post(`/users/new-password`, {
    uuid,
    password,
  });
};
