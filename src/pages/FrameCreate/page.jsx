import Footer from "@/components/layout/Footer";
import TextButton from "@/components/common/Button/TextButton";
import { useState } from "react";
import { frameData } from "@/libraries/constants/FrameData";
import FoundationFrame from "@/components/pages/FrameCreate/FoundationFrame";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

const FrameCreatePage = () => {
  const navigate = useNavigate();
  const [frameType, setFrameType] = useState("세로프레임");

  const handleFrameClick = (frame) => {
    localStorage.setItem("cameraWidth", frame.cameraWidth);
    localStorage.setItem("cameraHeight", frame.cameraHeight);

    navigate(RoutePath.FrameBackground, { state: { selectedFrame: frame } });
  };

  return (
    <div className="pt-[70px]">
      <span className="Headline_B px-[24px]">프레임 선택</span>
      <div className="mb-[40px] flex gap-[24px] px-[24px] pt-[21px]">
        {Object.keys(frameData).map((type) => (
          <TextButton
            key={type}
            text={type}
            onClick={() => setFrameType(type)}
            colorsrc={frameType === type}
          />
        ))}
      </div>

      <div
        className={`flex items-center justify-center ${
          frameType === "세로프레임"
            ? "gap-[70px] px-[67px]"
            : "gap-[30px] px-[26px]"
        }`}
      >
        {frameData[frameType].map((frame) => (
          <FoundationFrame
            key={frame.id}
            src={frame.src}
            onClick={() => handleFrameClick(frame)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default FrameCreatePage;
