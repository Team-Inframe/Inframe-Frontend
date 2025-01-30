import leftarrow from "/src/assets/svgs/LeftArrow.svg";
import TextButton from "@/components/common/Button/TextButton";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AiUploader from "@/components/pages/FrameCreate/AiUploader";
import PictureUploader from "@/components/pages/FrameCreate/PictureUploader";
import RoutePath from "@/routes/routePath";
import Sticker from "@/components/pages/FrameCreate/Sticker";
import { postSticker } from "@/api";
import { getStickers } from "@/api";
import EditPage from "@/components/pages/FrameCreate/EditPage";
import html2canvas from "html2canvas";
import { postCustomFrameImg } from "@/api/customframes";
import { useStickerStore } from "@/libraries/store/storesticker";

const FrameStickerPage = () => {
  const navigate = useNavigate();
  const list = ["스티커 페이지", "AI 스티커", "사진 스티커"];
  const [SelectedComp, setSelectComp] = useState(list[0]);
  const [istoggled, setIstoggled] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [stickers, setStickers] = useState([]);
  const frameRef = useRef(null);
  // const [isdeleted, setisdeleted] = useState(false);
  const removeSticker = useStickerStore((state) => state.removeSticker);
  const clearStickers = useStickerStore((state) => state.clearStickers);
  const [selectedsticker, setSelectedSticker] = useState(null);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleAISticker = async () => {
    // setIsLoading(true);
    try {
      const response = await postSticker(prompt);
      setStickers(response.data);
      setSelectComp("스티커 페이지");
    } catch (error) {
      console.error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    const getStickerlist = async () => {
      try {
        const response = await getStickers(localStorage.getItem("userId"));
        setStickers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getStickerlist();
  }, [SelectedComp]);

  // useEffect(() => {
  //   <Stickers />;
  // }, [stickers]);

  const handleTextButtonClick = (text) => {
    //아무버튼도 안눌렸을때
    if (istoggled == false) {
      setSelectComp(text);
      setIstoggled(true);
    }
    //버튼이 하나 눌려있을때
    else if (istoggled == true) {
      if (SelectedComp != text) {
        setSelectComp(text);
      } else {
        setSelectComp("스티커 페이지");
        setIstoggled(false);
      }
    }
  };

  const handleBackClick = () => {
    clearStickers();
    navigate(-1);
  };

  const handleConfirmClick = async () => {
    if (!frameRef.current) return;
    //스티커
    try {
      const frame = frameRef.current;
      //완성프레임 사진찍기
      const canvas = await html2canvas(frame, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
      });
      canvas.toBlob(async (blob) => {
        if (blob !== null) {
          //finishFrameBlob을 서버에 보내기
          const response = await postCustomFrameImg(blob);

          localStorage.setItem("file_url", response.data.file_url);
          navigate(RoutePath.FrameDownload);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleremover = () => {
    console.log("click:", selectedsticker);
    removeSticker(selectedsticker);
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[50px]">
      <header>
        <button onClick={handleBackClick}>
          <img src={leftarrow} alt="뒤로가기" className="mb-[8px] px-[14px]" />
        </button>
        <div className="flex justify-between px-[24px]">
          <span className="Headline_B">스티커 만들기</span>
          <button
            className="Label_L text-syscolor-SystemGray"
            onClick={handleConfirmClick}
          >
            완료
          </button>
        </div>
      </header>

      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-1 items-center justify-center">
          <div ref={frameRef}>
            <EditPage
              selectedsticker={selectedsticker}
              setSelectedSticker={setSelectedSticker}
              className="max-h-[450px] max-w-[350px]"
            />
          </div>
        </div>
        <button onClick={() => handleremover()}>삭제</button>
        <div className="mt-[40px] flex h-[150px] w-full flex-col gap-[30px]">
          <div className="flex w-full justify-between px-[100px]">
            <TextButton
              text={"AI 스티커"}
              onClick={() => handleTextButtonClick(list[1])}
              colorsrc={SelectedComp == "AI 스티커"}
            />
            <TextButton
              text={"사진 스티커"}
              onClick={() => handleTextButtonClick(list[2])}
              colorsrc={SelectedComp == "사진 스티커"}
            />
          </div>

          <div className="min-h-40 w-full">
            {SelectedComp == list[0] ? (
              <div className="grid h-full w-full grid-cols-4 overflow-auto bg-slate-100">
                {/* 스티커 리스트 컴포넌트 */}
                {stickers.map((group) => (
                  <Sticker
                    key={group.sticker_id}
                    stickerId={group.sticker_id}
                    imgSrc={group.sticker_url}
                  />
                ))}
              </div>
            ) : SelectedComp == list[1] ? (
              <div className="px-[60px]">
                <AiUploader
                  onClick={handleAISticker}
                  prompt={prompt}
                  onPromptChange={handlePromptChange}
                />
              </div>
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
