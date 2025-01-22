import Header from "@/components/layout/Header";
import TextButton from "@/components/common/Button/TextButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BasicFrame1 } from "@/components/common/BasicFrame";
import AiUploader from "@/components/pages/FrameCreate/AiUploader";
import PictureUploader from "@/components/pages/FrameCreate/PictureUploader";
import RoutePath from "@/routes/routePath";

const FrameStickerPage = () => {
  const navigate = useNavigate();
  const [SelectedComp, setSelectComp] = useState("AI 스티커");
  // const [stickers, setStickers] = useState([]);

  const handleConfirmClick = () => {
    navigate(RoutePath.FrameDownload);
  };

  // const addSticker = (newSticker) => {
  //   setStickers((prevStickers) => [...prevStickers, newSticker]);
  // };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[50px]">
      <Header title="스티커 만들기" onClick={handleConfirmClick} />

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-1 items-center justify-center">
          <BasicFrame1 bgsrc="BGColor2" />
        </div>

        <div className="mt-[40px] flex h-[150px] w-full flex-col gap-[30px]">
          <div className="flex w-full justify-between px-[100px]">
            <TextButton
              text={"AI 스티커"}
              onClick={() => setSelectComp("AI 스티커")}
              colorsrc={SelectedComp == "AI 스티커"}
            />
            <TextButton
              text={"사진 스티커"}
              onClick={() => setSelectComp("사진 스티커")}
              colorsrc={SelectedComp == "사진 스티커"}
            />
          </div>
          <div className="h-full w-full px-[60px]">
            {SelectedComp == "AI 스티커" ? (
              <AiUploader />
            ) : (
              <PictureUploader uploadedImage={""} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameStickerPage;
