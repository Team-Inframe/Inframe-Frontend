import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login/`, {
      email,
      password,
    });

    const userId = response.data.userId;

    localStorage.setItem("userId", userId);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signup = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/sign-up/`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
