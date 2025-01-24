import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

export const createCustomFrame = async (
  userId,
  frameId,
  customFrameTitle,
  stickers,
  customFrameImg,
  isShared
) => {
  try {
    const formData = new FormData();
    formData.append("custom_frame_img", customFrameImg);
    const data = {
      user_id: userId, // userId -> user_id
      frame_id: frameId, // frameId -> frame_id
      custom_frame_title: customFrameTitle, // customFrameTitle -> custom_frame_title
      stickers: stickers.map((sticker) => ({
        sticker_id: sticker.stickerId, // stickerId -> sticker_id
        position_x: sticker.positionX,
        position_y: sticker.positionY,
        sticker_width: sticker.stickerWidth, // stickerWidth -> sticker_width
        sticker_height: sticker.stickerHeight, // stickerHeight -> sticker_height
      })),
      is_shared: isShared, // isShared -> is_shared
    };
    console.log(data);
    formData.append("data", JSON.stringify(data));

    const response = await axios.post(`${BASE_URL}/custom-frames/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCustomFrame = async (customFrameId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/custom-frames/${customFrameId}`
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
    return response;
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
