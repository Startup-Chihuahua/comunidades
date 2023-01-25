import { axiosInstance } from "./axios.config";
export const sendMail = async (mail) => {
  return axiosInstance.post(`/user/recover-password`, { mail });
};
