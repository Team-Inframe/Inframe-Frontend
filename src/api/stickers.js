// @ts-nocheck
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const postSticker = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/stickers/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 파일 업로드 시 필요한 헤더
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getStickers = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/stickers/list`, {
      params: { user_id: userId }, // 쿼리 파라미터로 user_id 전달
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
