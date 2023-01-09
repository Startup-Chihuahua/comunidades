import axios from "axios";

export const validateLogin = (mail, password) => {
  const HOST = process.env.REACT_APP_BASE_URL;
  return axios
    .post(`${HOST}/login`, {
      mail,
      password,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.message);
      return error.response.data;
    });
};
