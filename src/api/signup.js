import { axiosInstance } from './axios.config';
export const validateSignUp = async (mail,password,name,lastname,curp,birth_date,gender,state,town,neighborhood,program,tags,emprendedor,aliado) => {
  return axiosInstance.post(`/users`, {
    mail,
    password,
    name,
    lastname,
    curp,
    birth_date,
    gender,
    state,
    town,
    neighborhood,
    program,
    tags,
    emprendedor,
    aliado
  });
};

