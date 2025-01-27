import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const postPhoto = async (userId, photoImg) => {
  try {
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("photo_img", photoImg);
    const response = await axios.post(`${BASE_URL}/photos/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPhotosList = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/lists`, {
      params: { user_id: userId },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getPhoto = async (photoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/photos/${photoId}`, {
      params: { photo_id: photoId },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
