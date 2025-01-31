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
import deletebutton from "/src/assets/svgs/delete.svg";
//import { Promise } from "core-js";

const FrameStickerPage = () => {
  const navigate = useNavigate();
  const list = ["스티커 페이지", "AI 스티커", "사진 스티커"];
  const [SelectedComp, setSelectComp] = useState(list[0]);
  const [istoggled, setIstoggled] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  const [stickers, setStickers] = useState([]);
  const frameRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const removeSticker = useStickerStore((state) => state.removeSticker);
  const clearStickers = useStickerStore((state) => state.clearStickers);
  const [selectedsticker, setSelectedSticker] = useState(null);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handlePostSticker = async () => {
    setIsLoading(true);
    // userid 추가
    const formData = new FormData();
    formData.append("user_id", localStorage.getItem("userId"));
    if (prompt) {
      // 스티커 생성 프롬프트
      formData.append("prompt", prompt);
    }
    if (uploadedImage) {
      // 이미지 배경 제거
      formData.append("uploaded_image", uploadedImage);
    }

    try {
      const response = await postSticker(formData);
      setStickers([response.data, ...stickers]);
    } catch (error) {
      console.error(error);
    } finally {
      setPrompt("");
      //setUploadedImage("");
      setIsLoading(false);
      console.log(stickers);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setStickers([
        {
          sticker_id: 0,
          sticker_url:
            "https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif",
        },
        ...stickers,
      ]);
      console.log(stickers);
      setSelectComp("스티커 페이지");
    }
  }, [isLoading]);

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
  }, []);

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

  //   const picpromise = (image) => {
  //     return new Promise((resolve) => {
  //     setUploadedImage(image);
  //     resolve();
  //   });
  // };
  //   const handleImgUpload = (image) => {
  //     picpromise(image)
  //     .then(() => {
  //     handlePostSticker();
  //   });
  // };

  async function imgsetup(image) {
    await setUploadedImage(image);
  }

  async function startpoststicker() {
    if (uploadedImage) {
      await handlePostSticker();
    }
  }

  const handleImgUpload = async (img) => {
    await imgsetup(img);

    if (uploadedImage) {
      try {
        await startpoststicker();
      } catch (error) {
        console.error(error);
      }
    }
  };

  // useEffect(() => {
  //   if (uploadedImage) {
  //     handlePostSticker();
  //   }
  // }, [uploadedImage]);

  const handleBackClick = () => {
    clearStickers();
    navigate(-1);
  };

  const handleConfirmClick = async () => {
    if (!frameRef.current) return;

    try {
      const frame = frameRef.current;
      const isMobile = window.innerWidth < 1024;
      const scrollY = isMobile ? 0 : window.scrollY;

      const canvas = await html2canvas(frame, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
        allowTaint: true,
        logging: true,
        scrollX: 0,
        scrollY: -scrollY,
      });

      canvas.toBlob(async (blob) => {
        if (blob !== null) {
          const response = await postCustomFrameImg(blob);
          const fileUrl =
            "https://inframes3.s3.ap-northeast-2.amazonaws.com/uploads/uploaded_file_1738333007_blob";
          localStorage.setItem("file_url", fileUrl);
          console.log(response);
          // localStorage.setItem("file_url", response.data.file_url);
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
        <button className="self-center" onClick={() => handleremover()}>
          <img src={deletebutton} alt="삭제" />
        </button>
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
              // 스티커 리스트 컴포넌트
              <div className="grid h-full w-full grid-cols-4 overflow-auto bg-slate-100">
                {stickers.map((group, index) => (
                  <Sticker
                    key={index}
                    stickerId={group.sticker_id}
                    imgSrc={group.sticker_url}
                  />
                ))}
              </div>
            ) : SelectedComp == list[1] ? (
              <div className="px-[60px]">
                <AiUploader
                  onClick={handlePostSticker}
                  prompt={prompt}
                  onPromptChange={handlePromptChange}
                />
              </div>
            ) : (
              <PictureUploader uploadedImage={handleImgUpload} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameStickerPage;
