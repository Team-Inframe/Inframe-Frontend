import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TextButton from "@/components/common/Button/TextButton";
import { useState } from "react";
import { frameData } from "@/libraries/constants/FrameData";
import FoundationFrame from "@/components/pages/SelectFrame/FoundationFrame";
import { useNavigate } from "react-router-dom";
import RoutePath from "@/routes/routePath";

const FrameSelectPage = () => {
  const navigate = useNavigate();
  const [frameType, setFrameType] = useState("세로프레임");

  const handleFrameClick = (frame) => {
    navigate(RoutePath.FrameBackground, { state: { selectedFrame: frame } });
  };

  return (
    <div className="pt-[45px]">
      <Header title="프레임 선택" isCompletedPage={false} />
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
        className={`flex items-center justify-between ${
          frameType === "세로프레임" ? "px-[67px]" : "px-[26px]"
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
export default FrameSelectPage;
