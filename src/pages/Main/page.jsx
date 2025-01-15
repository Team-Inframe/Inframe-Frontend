import Footer from "@/components/layout/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { RecommendCard } from "@/components/pages/Main/RecommendCard";
import { HotFrame } from "@/components/pages/HotFrame";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full w-screen max-w-[490px] flex-col items-center justify-center overflow-y-auto">
      <div className="top-12 w-full flex-col justify-start pl-9 pt-10 text-left">
        <div className="Headline_B flex text-black">김H팀님</div>
        <div className="Headline_L text-black">프레임을 선택해보세요!</div>
      </div>
      <div className="pt-13 h-80 w-80 items-center rounded-2xl border-black shadow-lg">
        <div className=""></div>
      </div>
      <div className="flex w-full flex-col text-left">
        <div className="items-start justify-start pl-9 pt-6 text-left">
          <div className="Label_L text-black">많은 사람이 이용했어요!</div>
          <div className="caption_normal_M text-black">
            지금 제일 핫한 프레임
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-11 px-16 pt-6">
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
        </div>
        <div className="h-28 w-screen max-w-[490px]"></div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
