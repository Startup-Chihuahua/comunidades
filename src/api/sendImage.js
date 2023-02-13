import { axiosInstance } from "./axios.config";
export const sendImage = async (data) => {
  return axiosInstance.post(`/test`, {
    data,
  });
};
