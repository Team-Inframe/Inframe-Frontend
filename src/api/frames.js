import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// ai 배경 생성 api
export const postFrameBackground = async (prompt) => {
  try {
    const data = {
      prompt: prompt,
    };
    const response = await axios.post(`${BASE_URL}/frames/images`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const postFrame = async (frameImg, cameraWidth, cameraHeight) => {
  try {
    const formData = new FormData();
    formData.append("frame_img", frameImg);
    formData.append("camera_width", cameraWidth);
    formData.append("camera_height", cameraHeight);
    const response = await axios.post(`${BASE_URL}/frames/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const viewFrame = async (frameId) => {
  try {
    const response = await axios.get(`${BASE_URL}/frames/${frameId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
