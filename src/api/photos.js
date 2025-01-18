import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const createPhoto = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/photos/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 파일 업로드 시 필요한 헤더
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPhotosList = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/lists`, {
      params: { user_id: userId }, // 쿼리 파라미터로 user_id 전송
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
