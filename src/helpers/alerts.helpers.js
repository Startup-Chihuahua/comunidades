import { toast } from "react-toastify";

const invalidData = () => {
  toast.error("Datos inválidos", {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const validData = () => {
  toast.success("Datos validos", {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export { invalidData, validData };
