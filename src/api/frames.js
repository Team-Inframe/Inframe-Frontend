// @ts-nocheck
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const createFrameBackground = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/frames/images/`, data, {
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 요청을 보냄
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createFrame = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/frames/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data", // 파일 업로드 시 필요한 헤더
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const viewFrame = async (frame_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/frames/${frame_id}`, {
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 요청을 보냄
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
