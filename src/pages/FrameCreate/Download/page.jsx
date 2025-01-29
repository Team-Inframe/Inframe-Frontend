import { useState } from "react";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import ShareToggle from "@/components/pages/FrameCreate/ShareToggle";
import pencil from "@/assets/svgs/Pencil.svg";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";
import { useStickerStore } from "@/libraries/store/storesticker";
import axios from "axios";

const FrameDownloadPage = () => {
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [isShared, setIsShared] = useState(false);
  const zustandStickers = useStickerStore((state) => state.stickers);
  const clearStickers = useStickerStore((state) => state.clearStickers);

  const userId = localStorage.getItem("userId");
  const frameId = localStorage.getItem("frameId");
  const customFrameUrl = localStorage.getItem("file_url");

  const handleOnClick = () => {
    navigate(-1);
  };

  const parseSize = (size) => {
    if (typeof size === "string") {
      return parseInt(size.replace("px", ""), 10) || 70;
    }
    return size || 70;
  };

  const handleSaveClick = async () => {
    try {
      const data = {
        user_id: userId,
        frame_id: frameId,
        custom_frame_title: title,
        custom_frame_img_url: customFrameUrl,
        is_shared: isShared,
        stickers: zustandStickers.map((sticker) => ({
          sticker_id: sticker?.stickerId ?? sticker?.id,
          position_x: Math.max(0, sticker?.position?.x ?? 0),
          position_y: Math.max(0, sticker?.position?.y ?? 0),
          sticker_width: parseSize(sticker?.size?.width),
          sticker_height: parseSize(sticker?.size?.height),
        })),
      };

      console.log(JSON.stringify(data, null, 2));

      const response = await axios.post(`${BASE_URL}/custom-frames/`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);

      if (response.data.failed_stickers?.length) {
        console.warn(response.data.failed_stickers);
      }

      clearStickers();
      navigate(RoutePath.Storage);
    } catch (error) {
      console.error(error.response?.data || error);
    }
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[56px]">
      <div>
        <img
          src={LeftArrow}
          alt="Left Arrow"
          onClick={handleOnClick}
          className="mb-[8px] cursor-pointer px-[14px]"
        />
      </div>
      <div className="flex flex-col justify-center px-[24px]">
        <span className="Headline_B mb-[25px] text-black">프레임 저장하기</span>
      </div>

      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-1 flex-col items-center justify-center gap-[5px]">
          <div className="mt-6 self-end">
            <ShareToggle
              onChange={(value) => {
                setIsShared(value);
                console.log("공유 상태 변경됨:", value);
              }}
            />
          </div>
          <div className="flex max-h-[380px] max-w-[350px] items-center justify-center">
            <img
              src={customFrameUrl}
              className="max-h-[380px] max-w-[350px] object-contain shadow-md"
            />
          </div>
        </div>

        <div className="mt-[40px] flex h-[150px] flex-col items-center gap-[40px]">
          <div className="flex">
            <input
              type="text"
              placeholder="프레임 제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="Body_reading_M placeholder:Label_L w-[150px] rounded-[5px] py-[5px] text-center focus:border-none focus:outline-none"
            />
          </div>
          <button
            onClick={handleSaveClick}
            disabled={!title.trim()}
            className={`Caption_normal_L rounded-md px-10 py-2 ${
              title
                ? "cursor-pointer bg-gradient-to-r from-[#966BD6] to-[#B37DDF] text-white"
                : "cursor-not-allowed bg-gray-200 text-gray-400"
            }`}
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameDownloadPage;
