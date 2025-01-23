import { getCustomFrame } from "@/api";
import {
  BasicCameraFrame1,
  BasicCameraFrame2,
  BasicCameraFrame3,
  BasicCameraFrame4,
} from "@/components/common/BasicCameraFrame";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function CameraFrameApp() {
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(5);
  const [isCapturing, setIsCapturing] = useState(false);
  const { id: customFrameId } = useParams();
  const navigate = useNavigate();

  const [customFrame, setCustomFrame] = useState(null);

  useEffect(() => {
    const getCustomFrameDetail = async () => {
      try {
        const response = await getCustomFrame(25);
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
    <div className="flex min-h-screen flex-col justify-center">
      <div className="flex items-center justify-center">
        {renderBasicFrame()}
      </div>

      <button
        onClick={startCaptureSequence}
        disabled={isCapturing}
        className={`rounded-md px-4 py-2 text-white shadow-md ${
          isCapturing ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isCapturing ? "촬영 중..." : "촬영하기"}
      </button>
    </div>
  );
}
