import axios from "axios";

// @ts-ignore
const BASE_URL = `${import.meta.env.VITE_BASE_URL}/api/v1`;

export const createPhoto = async (userId, photoImg) => {
  try {
    // FormData 객체를 생성하여 데이터 설정
    const formData = new FormData();
    formData.append("user_id", userId); // 유저 ID
    formData.append("photo_img", photoImg); // 업로드할 사진 파일
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
