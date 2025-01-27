import Footer from "@/components/layout/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { HotFrame } from "@/components/pages/HotFrame";
import MoveButtom from "/src/assets/svgs/MoveButton.svg";
import frame1 from "@/assets/images/frame1.png";
import RoutePath from "@/routes/routePath";

export const MainPage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto pt-[70px]">
      <div className="w-full flex-col justify-start px-[24px] text-left">
        <div className="Headline_B bg-gradient-to-r from-[#8761D2] to-[#ff00d9] bg-clip-text pb-7 text-transparent">
          INFRAME
        </div>
        <div className="Body_normal_M mb-1 flex text-black">{username}님</div>
        <div className="Label_L text-black">프레임을 선택해보세요!</div>
      </div>
      <div className="w-real-screen items-center pt-8">
        <img src="/icons/bannerimage.png" />
      </div>
      <div className="mt-10 flex w-full flex-col px-[24px] text-left">
        <div className="items-start justify-start pt-2 text-left">
          <div className="Label_L text-black">많은 사람이 이용했어요!</div>
          <div className="caption_normal_M text-black">
            지금 제일 핫한 프레임
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-[20px] px-[15px] pt-8">
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frames/25")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frames/24")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frames/23")}
            frameImg={frame1}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/frames/22")}
            frameImg={frame1}
            label2={220}
          />
        </div>
        <div className="flex justify-center pt-[40px]">
          <div
            className="flex items-center justify-between gap-[9px] rounded-lg border-2 py-[6px] pl-[40px] pr-[30px]"
            onClick={() => navigate(RoutePath.FrameHot)}
          >
            <span className="Label_M">핫한 프레임 더보기</span>
            <img src={MoveButtom} />
          </div>
        </div>
        <div className="h-28 max-w-[450px]"></div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
