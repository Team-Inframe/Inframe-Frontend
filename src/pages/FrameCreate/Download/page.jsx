import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import ShareToggle from "@/components/pages/FrameCreate/ShareToggle";
import { useNavigate } from "react-router-dom";
import pencil from "@/assets/svgs/Pencil.svg";
import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

const FrameDownloadPage = () => {
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
  const navigate = useNavigate();

  const [title, setTitle] = useState(""); // 사용자 입력 제목
  const [isShared, setIsShared] = useState(false); // 공유 여부
  const [customFrameData, setCustomFrameData] = useState({
    user_id: 0,
    frame_id: 0,
    custom_frame_img_url: "",
    stickers: [],
  });

  useEffect(() => {
    // localStorage에서 데이터 로드
    const userId = localStorage.getItem("user_id");
    const frameId = localStorage.getItem("frame_id");
    const customFrameImgUrl = localStorage.getItem("custom_frame_img_url");
    const basicFrameId = localStorage.getItem("basic_frame_id");
    const stickers = JSON.parse(localStorage.getItem("stickers") || "[]");

    setCustomFrameData({
      user_id: Number(userId),
      frame_id: Number(frameId),
      custom_frame_img_url: customFrameImgUrl,
      basic_frame_id: Number(basicFrameId),
      stickers: stickers,
    });
  }, []);

  const handleSaveClick = async () => {
    if (!title) {
      alert("프레임 제목을 입력해주세요.");
      return;
    }

    const requestData = {
      ...customFrameData,
      custom_frame_title: title,
      is_shared: isShared,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/custom-frames/`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("프레임이 성공적으로 저장되었습니다.");
        navigate("/storages/my-frames");
      }
    } catch (error) {
      console.error(error);
      alert("프레임 저장 중 오류가 발생했습니다.");
    }
  };

  const handleConfirmClick = () => {
    navigate("/storages/my-frames");
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[56px]">
      <Header title="프레임 저장하기" onClick={handleConfirmClick} />

      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-1 flex-col items-center justify-center gap-[5px]">
          <div className="mt-6 self-end">
            <ShareToggle onChange={setIsShared} />
          </div>

          {/* 프레임 동적 렌더링 */}
          <div
            className="relative h-[500px] w-[300px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${customFrameData.custom_frame_img_url})`,
            }}
          >
            {customFrameData.stickers.map((sticker, index) => (
              <img
                key={index}
                src={sticker.sticker_url}
                alt="sticker"
                style={{
                  position: "absolute",
                  left: `${sticker.position_x}px`,
                  top: `${sticker.position_y}px`,
                  width: `${sticker.sticker_width}px`,
                  height: `${sticker.sticker_height}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-[40px] flex h-[150px] flex-col items-center gap-[40px]">
          <div className="flex">
            <input
              type="text"
              placeholder="프레임 제목을 입력해주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="Body_reading_M placeholder:Label_L rounded-[5px] py-[5px] pl-[20px] pr-[7px] text-center focus:border-none focus:outline-none"
            />
            <img src={pencil} className="w-4" />
          </div>
          <button onClick={handleSaveClick} className="Label_L">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameDownloadPage;
