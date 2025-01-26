import { BasicFrame1 } from "@/components/common/BasicFrame";
import Header from "@/components/layout/Header";
import ShareToggle from "@/components/pages/FrameCreate/ShareToggle";
import { useNavigate } from "react-router-dom";
import pencil from "@/assets/svgs/Pencil.svg";

const FrameDownloadPage = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate("/storages/my-frames");
  };

  return (
    <div className="flex h-real-screen flex-col pb-[50px] pt-[56px]">
      <Header title="프레임 저장하기" onClick={handleConfirmClick} />

      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-1 flex-col items-center justify-center gap-[5px]">
          <div className="mt-6 self-end">
            <ShareToggle />
          </div>
          <BasicFrame1 bgsrc="BGColor3" />
        </div>

        <div className="mt-[40px] flex h-[150px] flex-col items-center gap-[40px]">
          <div className="flex">
            <input
              type="text"
              placeholder="프레임 제목을 입력해주세요"
              className="Body_reading_M placeholder:Label_L rounded-[5px] py-[5px] pl-[20px] pr-[7px] text-center focus:border-none focus:outline-none"
            />
            <img src={pencil} className="w-4" />
          </div>
          <div className="Label_L">저장하기</div>
        </div>
      </div>
    </div>
  );
};

export default FrameDownloadPage;
