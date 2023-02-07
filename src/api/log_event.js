import { axiosInstance } from "./axios.config";
import { getLocalStorageItem } from "../helpers/localStorage.helpers";

export const createEvent = async (data) => {
  axiosInstance.defaults.headers.common = {
    "auth-token": getLocalStorageItem("accessToken"),
  };
  return axiosInstance.post(`/events`, data);
};
