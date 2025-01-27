// @ts-nocheck

import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signup = async (email, password, username) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/sign-up`, {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
