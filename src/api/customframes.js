import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const postCustomFrame = async (
  userId,
  frameId,
  title,
  customFrameUrl,
  isShared,
  stickers
) => {
  try {
    const data = {
      user_id: userId,
      frame_id: frameId,
      custom_frame_title: title,
      custom_frame_img_url: customFrameUrl,
      is_shared: isShared,
      stickers: stickers.map((sticker) => ({
        sticker_id: sticker.stickerId,
        position_x: sticker.positionX,
        position_y: sticker.positionY,
        sticker_width: sticker.stickerWidth,
        sticker_height: sticker.stickerHeight,
      })),
    };

    const response = await axios.post(`${BASE_URL}/custom-frames/`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error posting custom frame:", error);
    return error.response?.data;
  }
};

export const postCustomFrameImg = async (imgFile) => {
  try {
    const formData = new FormData();
    formData.append("file", imgFile);
    const response = await axios.post(
      `${BASE_URL}/custom-frames/images`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCustomFrame = async (customFrameId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/custom-frames/${customFrameId}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCustomFrameList = async (sort) => {
  try {
    const response = await axios.get(`${BASE_URL}/custom-frames/list`, {
      params: { sort }, // 쿼리 파라미터로 정렬 방식 전달
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getMyCustomFrames = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/custom-frames/myframes`, {
      params: { user_id: userId }, // 쿼리 파라미터로 user_id 전달
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const bookmarkCustomFrame = async (userId, customFrameId) => {
  try {
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("custom_frame_id", customFrameId);
    const response = await axios.post(
      `${BASE_URL}/custom-frames/bookmark`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // form-data 형식
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

//엔드포인트 유저아이디 파라미터로 수정하기
export const getMyBookmarkCustomFrame = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/custom-frames/users/${userId}`
    );
    //console.log(response);
    return response.data;
  } catch (error) {
    return error.response;
  }
};
