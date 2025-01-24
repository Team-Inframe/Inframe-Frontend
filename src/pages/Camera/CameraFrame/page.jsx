import { getCustomFrame } from "@/api";
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

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CameraPage() {
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(5);
  const [isCapturing, setIsCapturing] = useState(false);
  const { id: customFrameId } = useParams();
  const navigate = useNavigate();

  const [customFrame, setCustomFrame] = useState(null);

  useEffect(() => {
    const getCustomFrameDetail = async () => {
      try {
        const response = await getCustomFrame(customFrameId);
        setCustomFrame(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCustomFrameDetail();
  }, [customFrameId]);

  const startCaptureSequence = async () => {
    setIsCapturing(true);

    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          setCurrentFrame(i);
        }, 3000);
      });
    }

    setIsCapturing(false);
    navigate("/camera/download");
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
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-real-screen flex-col justify-between bg-white pb-[60px] pt-[40px]">
      <div className="mb-3 flex flex-col">
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
      </div>

      <div className="flex items-center justify-center">
        {renderBasicFrame()}
      </div>

      <div className="mt-3 flex items-center justify-between px-[24px]">
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
