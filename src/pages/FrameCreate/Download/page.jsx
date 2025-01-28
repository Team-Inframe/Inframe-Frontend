import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import ShareToggle from "@/components/pages/FrameCreate/ShareToggle";
import { useNavigate } from "react-router-dom";
import pencil from "@/assets/svgs/Pencil.svg";
import axios from "axios";

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

  // localStorage에서 데이터 로드
  useEffect(() => {
    const userId = localStorage.getItem("user_id") || "0";
    const frameId = localStorage.getItem("frame_id") || "0";
    const customFrameImgUrl =
      localStorage.getItem("custom_frame_img_url") || "";
    const stickers = JSON.parse(localStorage.getItem("stickers") || "[]");

    setCustomFrameData({
      user_id: Number(userId),
      frame_id: Number(frameId),
      custom_frame_img_url: customFrameImgUrl,
      stickers: stickers,
    });
  }, []);

  // 저장하기 버튼 클릭 핸들러
  const handleSaveClick = async () => {
    // 기본값 설정 (필수 데이터 누락 방지)
    const requestData = {
      user_id: customFrameData.user_id || 0, // 기본값: 0
      frame_id: customFrameData.frame_id || 0, // 기본값: 0
      custom_frame_title: title || "Untitled Frame", // 제목이 없으면 기본 제목
      custom_frame_img_url:
        customFrameData.custom_frame_img_url ||
        "https://via.placeholder.com/300x500", // 기본 이미지 URL
      is_shared: isShared || false, // 기본값: false
      stickers: customFrameData.stickers || [], // 기본값: 빈 배열
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
        console.log("Request Data:", requestData);
        localStorage.removeItem("frame_id");
        localStorage.removeItem("custom_frame_img_url");
        localStorage.removeItem("stickers");

        navigate("/storages/my-frames"); // 저장 후 페이지 이동
      }
    } catch (error) {
      console.error("프레임 저장 중 오류 발생:", error);
      alert("프레임 저장 중 오류가 발생했습니다.");
    }
  };

  // 뒤로가기 버튼 핸들러
  const handleConfirmClick = () => {
    navigate("/storages/my-frames");
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[56px]">
      <Header title="프레임 저장하기" onClick={handleConfirmClick} />

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

          {/* 프레임 동적 렌더링 */}
          <div
            className="relative h-[500px] w-[300px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                customFrameData.custom_frame_img_url ||
                "https://via.placeholder.com/300x500"
              })`,
            }}
          >
            {customFrameData.stickers.map((sticker, index) => (
              <img
                key={index}
                src={sticker.sticker_url || "https://via.placeholder.com/50"}
                alt="sticker"
                style={{
                  position: "absolute",
                  left: `${sticker.position_x || 0}px`,
                  top: `${sticker.position_y || 0}px`,
                  width: `${sticker.sticker_width || 50}px`,
                  height: `${sticker.sticker_height || 50}px`,
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
