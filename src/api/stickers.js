// @ts-nocheck
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const createSticker = async (formData) => {
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
