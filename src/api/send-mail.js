import { axiosInstance } from "./axios.config";
export const sendMail = async (mail) => {
  return axiosInstance.get(`/mail/sendMail/${mail}`);
};
