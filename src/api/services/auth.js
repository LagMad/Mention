import { axiosInstance } from "../coreApi";

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email: body.email,
      password: body.password,
    });

    const { token } = response.data;
    window.localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("/auth/register", {
      name: body.userName,
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleLogin, handleRegister };
