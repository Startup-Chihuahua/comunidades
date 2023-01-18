import { axiosInstance } from "./axios.config";
export const sendMail = async (mail) => {
  return axiosInstance.get(`/user/recover-password/${mail}`);
};
