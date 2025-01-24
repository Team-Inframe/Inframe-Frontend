import Footer from "@/components/layout/Footer";
import { DownloadButton } from "@/components/common/Button/DownloadButton";
import MoveButton from "/src/assets/svgs/MoveButton.svg";
import { useNavigate, useParams } from "react-router-dom";
import frame1 from "@/assets/images/frame1.png";
import leftArrow from "@/assets/svgs/LeftArrow.svg";
export const FrameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="pt-[70px]">
        <img src={leftArrow} alt="뒤로가기" className="mb-[8px] px-[10px]" />
        <span className="Headline_B px-[24px]">지브리st.프레임</span>
      </div>
      <div className="mt-[100px] flex flex-col">
        <div className="flex items-center justify-center">
          <img src={frame1} className="w-3/5" />
        </div>
        <div className="flex items-center justify-center pl-52">
          <DownloadButton onClick={() => navigate("")} label={34} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px] px-24 pt-12">
        <div className="flex" onClick={() => navigate(`/camera/${id}`)}>
          <span className="Label_M pt-[2px] text-syscolor-SystemGray">
            촬영하러 가기
          </span>
          <img src={MoveButton} />
        </div>
        <div className="flex" onClick={() => navigate("")}>
          <span className="Label_M pt-[2px] text-syscolor-SystemGray">
            저장하기
          </span>
          <img src={MoveButton} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
