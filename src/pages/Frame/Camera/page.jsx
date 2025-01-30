import { getCustomFrame, postPhoto } from "@/api";
import {
  BasicCameraFrame1,
  BasicCameraFrame2,
  BasicCameraFrame3,
  BasicCameraFrame4,
} from "@/components/common/BasicCameraFrame";
import CameraButton from "@/assets/svgs/CameraButton.svg";
import Timer from "@/assets/svgs/Timer.svg";
import Electronic from "@/assets/svgs/Electronic.svg";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import Gallery from "@/assets/svgs/Gallery.svg";

import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import RoutePath from "@/routes/routePath";

export default function FrameCameraPage() {
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [timerCount, setTimerCount] = useState("3");
  const { id: customFrameId } = useParams();
  const frameRef = useRef(null);
  const navigate = useNavigate();

  const [customFrame, setCustomFrame] = useState(null);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const getCustomFrameDetail = async () => {
      try {
        const response = await getCustomFrame(customFrameId);
        setCustomFrame(response.data);
        setStickers(response.data.stickers || []);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCustomFrameDetail();
  }, [customFrameId]);

  const startCaptureSequence = async () => {
    for (let i = 0; i < 4; i++) {
      for (let count = 3; count > 0; count--) {
        setTimerCount(count.toString());
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setTimerCount("찰칵!");
      setIsCapturing(true);
      setCurrentFrame(i);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    try {
      const frameElement = frameRef.current;

      if (frameElement) {
        const canvas = await html2canvas(frameElement, {
          scale: 2,
          backgroundColor: null,
          useCORS: true,
          allowTaint: true,
        });

        const blob = await new Promise((resolve) => {
          canvas.toBlob((blob) => resolve(blob), "image/png", 1.0);
        });

        if (!blob) throw new Error("Blob 생성 실패");

        const userId = localStorage.getItem("userId");
        const location = localStorage.getItem("location");
        const file = new File([blob], "MyPhoto.png", { type: "image/png" });

        localStorage.setItem("bgsrc", customFrame.customFrameBg);

        const response = await postPhoto(userId, file, location);
        localStorage.setItem("photoUrl", response.photo_url);

        navigate(RoutePath.FrameCameraDownload);
      }
    } catch (error) {
      console.error(error);
    }

    setIsCapturing(false);
  };

  const renderBasicFrame = () => {
    if (!customFrame || !customFrame.basicFrameId) {
      return null;
    }

    switch (customFrame.basicFrameId) {
      case 1:
        return (
          <BasicCameraFrame1
            bgsrc={customFrame.customFrameBg}
            frames={frames}
            setFrames={setFrames}
            isCapturing={isCapturing}
            currentFrame={currentFrame}
            stickers={stickers}
          />
        );
      case 2:
        return (
          <BasicCameraFrame2
            bgsrc={customFrame.customFrameBg}
            frames={frames}
            setFrames={setFrames}
            isCapturing={isCapturing}
            currentFrame={currentFrame}
            stickers={stickers}
          />
        );
      case 3:
        return (
          <BasicCameraFrame3
            bgsrc={customFrame.customFrameBg}
            frames={frames}
            setFrames={setFrames}
            isCapturing={isCapturing}
            currentFrame={currentFrame}
            stickers={stickers}
          />
        );
      case 4:
        return (
          <BasicCameraFrame4
            bgsrc={customFrame.customFrameBg}
            frames={frames}
            setFrames={setFrames}
            isCapturing={isCapturing}
            currentFrame={currentFrame}
            stickers={stickers}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-real-screen flex-col justify-between bg-white pb-[60px] pt-[40px]">
      <div className="mb-3 flex flex-col gap-[50px]">
        <div className="flex-col">
          <button onClick={() => navigate(-1)}>
            <img
              src={LeftArrow}
              alt="뒤로가기"
              className="mb-[10px] px-[10px]"
            />
          </button>
          <div className="Label_L px-[24px]">
            카메라 버튼을 누르면 차례대로 사진이 촬영돼요!
          </div>
          <div className="flex items-center gap-[5px] px-[24px]">
            <img src={Timer} />
            <span className="Label_M mt-1">타이머는 3초에요!</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="Headline_B mb-[30px]">{timerCount}</div>
          <div ref={frameRef}>{renderBasicFrame()}</div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between px-[24px]">
        <img src={Electronic} className="px-1" />
        <img
          src={CameraButton}
          onClick={startCaptureSequence}
          disabled={isCapturing}
        />
        <img src={Gallery} />
      </div>
    </div>
  );
}
