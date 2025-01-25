import Footer from "@/components/layout/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { HotFrame } from "@/components/pages/HotFrame";
import MoveButtom from "/src/assets/svgs/MoveButton.svg";
import frame1 from "@/assets/images/frame1.png";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto px-[24px] pt-[70px]">
      <div className="w-full flex-col justify-start text-left">
        <div className="Headline_B flex text-black">김H팀님</div>
        <div className="Headline_L text-black">프레임을 선택해보세요!</div>
      </div>
      <div className="items-center pt-8">
        <img src="/icons/bannerimage.png" />
      </div>
      <div className="flex w-full flex-col text-left">
        <div className="items-start justify-start pt-8 text-left">
          <div className="Label_L text-black">많은 사람이 이용했어요!</div>
          <div className="caption_normal_M text-black">
            지금 제일 핫한 프레임
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-[20px] px-[15px] pt-8">
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frame/25")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frame/24")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frame/23")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frame/22")}
            frameImg={frame1}
            label2={220}
          />
        </div>
        <div className="flex justify-center pt-[40px]">
          <div
            className="flex items-center justify-between gap-[9px] rounded-lg border-2 py-[6px] pl-[40px] pr-[30px]"
            onClick={() => navigate("/hot-frames")}
          >
            <span className="Label_M">핫한 프레임 더보기</span>
            <img src={MoveButtom} />
          </div>
        </div>
        <div className="h-28 w-screen max-w-[490px]"></div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
