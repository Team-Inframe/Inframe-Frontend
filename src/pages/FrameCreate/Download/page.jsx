import { useState, useEffect } from "react";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import ShareToggle from "@/components/pages/FrameCreate/ShareToggle";
import pencil from "@/assets/svgs/Pencil.svg";
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";
import { postCustomFrame } from "@/api";
import { useStickerStore } from "@/libraries/store/storesticker";

const FrameDownloadPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(""); // 사용자 입력 제목
  const [isShared, setIsShared] = useState(false); // 공유 여부
  const zustandStickers = useStickerStore((state) => state.stickers);
  const clearStickers = useStickerStore((state) => state.clearStickers);

  //커스텀 프레임 저장하기 위한 데이터
  const userId = localStorage.getItem("user_id");
  const frameId = localStorage.getItem("frameId");
  const customFrameUrl = localStorage.getItem("file_url");
  const stickers = zustandStickers.map((sticker) => {
    if (sticker.size == undefined) {
      sticker.size.width = 70;
      sticker.size.height = 70;
    }
    return {
      stickerId: sticker.id,
      positionx: sticker.position.x,
      positiony: sticker.position.y,
      width: sticker.size.width,
      height: sticker.size.height,
    };
  });
  // localStorage에서 데이터 로드
  useEffect(() => {}, []);

  const handleOnClick = () => {
    navigate(-1);
  };

  // 저장하기 버튼 클릭 핸들러
  const handleSaveClick = async () => {
    const response = await postCustomFrame(
      userId,
      frameId,
      title,
      customFrameUrl,
      isShared,
      stickers
    );
    navigate(RoutePath.Gallery);
    clearStickers();
    console.log(zustandStickers);
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
          {/* 이미지불러오기 */}
          <div className="h-[350px] w-[420px]">
            <img src={localStorage.getItem("file_url")}></img>
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
          <button onClick={() => handleSaveClick} className="Label_L">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameDownloadPage;
