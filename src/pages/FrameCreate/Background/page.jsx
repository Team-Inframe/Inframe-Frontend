import Header from "@/components/layout/Header";
import TextButton from "@/components/common/Button/TextButton";
import { useRef, useState } from "react";
import BasicBG from "@/components/pages/FrameCreate/BasicBG";
import {
  BasicFrame1,
  BasicFrame2,
  BasicFrame3,
  BasicFrame4,
} from "@/components/common/BasicFrame";
import { useLocation, useNavigate } from "react-router-dom";
import PictureUploader from "@/components/pages/FrameCreate/PictureUploader";
import AiUploadeder from "@/components/pages/FrameCreate/AiUploader";
import html2canvas from "html2canvas";
import { postFrame, postFrameBackground } from "@/api/frames";
import RoutePath from "@/routes/routePath";

const FrameBackgroundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedFrame = location.state?.selectedFrame;

  const frameRef = useRef(null);

  const List = ["기본 색상", "AI 배경", "사진 배경"];
  const [prompt, setPrompt] = useState("");
  const [bgsrc, setBgsrc] = useState("#DADADA");
  const [SelectedComp, setSelectComp] = useState(List[0]);
  // const [isLoading, setIsLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleAIBackgroundImage = async () => {
    // setIsLoading(true);
    try {
      const response = await postFrameBackground(prompt);
      const aiFrameUrl = response.data.frame_ai_url;
      setBgsrc(aiFrameUrl);
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const handleConfirmClick = async () => {
    if (!frameRef.current) return;

    try {
      const frame = frameRef.current;
      const canvas = await html2canvas(frame, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
      });

      canvas.toBlob(async (blob) => {
        if (blob !== null) {
          const cameraWidth = localStorage.getItem("cameraWidth");
          const cameraHeight = localStorage.getItem("cameraHeight");

          const response = await postFrame(blob, cameraWidth, cameraHeight);
          console.log("API Response:", response);
          const frameUrl = response.data.frame_url;

          localStorage.removeItem("cameraWidth");
          localStorage.removeItem("cameraHeight");

          localStorage.setItem("frameUrl", frameUrl);

          navigate(RoutePath.FrameSticker);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleColorChange = (newColor) => {
    setBgsrc(newColor);
  };

  const handleImageUpload = (imageURL) => {
    setBgsrc(imageURL);
  };

  const renderFrame = () => {
    switch (selectedFrame?.id) {
      case 1:
        return <BasicFrame1 bgsrc={bgsrc} />;
      case 2:
        return <BasicFrame2 bgsrc={bgsrc} />;
      case 3:
        return <BasicFrame3 bgsrc={bgsrc} />;
      case 4:
        return <BasicFrame4 bgsrc={bgsrc} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[50px]">
      <Header title="프레임 만들기" onClick={handleConfirmClick} />

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-1 items-center justify-center">
          <div ref={frameRef}>{renderFrame()}</div>
        </div>

        <div className="mt-[40px] flex h-[150px] w-full flex-col gap-[30px]">
          <div className="flex w-full justify-between px-[60px]">
            <TextButton
              text={List[0]}
              onClick={() => setSelectComp(List[0])}
              colorsrc={SelectedComp == List[0]}
            />
            <TextButton
              text={List[1]}
              onClick={() => setSelectComp(List[1])}
              colorsrc={SelectedComp == List[1]}
            />
            <TextButton
              text={List[2]}
              onClick={() => setSelectComp(List[2])}
              colorsrc={SelectedComp == List[2]}
            />
          </div>
          <div className="h-full w-full px-[60px]">
            {SelectedComp == List[0] ? (
              <BasicBG colorChanger={handleColorChange} />
            ) : SelectedComp == List[1] ? (
              <AiUploadeder
                onClick={handleAIBackgroundImage}
                prompt={prompt}
                onPromptChange={handlePromptChange}
              />
            ) : (
              <PictureUploader uploadedImage={handleImageUpload} />
            )}
          </div>
        </div>
        {/* {loading && (
          <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 z-50">
            <img src={frame1} alt="Loading..." />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FrameBackgroundPage;
