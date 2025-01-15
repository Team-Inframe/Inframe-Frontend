import Footer from "@/components/layout/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { RecommendCard } from "@/components/pages/Main/RecommendCard";
import { HotFrame } from "@/components/pages/Main/HotFrame";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex h-full w-screen max-w-[490px] flex-col items-center justify-center scroll-auto">
      <div className="absolute top-12 w-full flex-col justify-start pl-9 text-left">
        <div className="Headline_B flex text-black">김H팀님</div>
        <div className="Headline_L text-black">프레임을 선택해보세요!</div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
      <div className="absolute w-full flex-col items-center justify-start pl-9 pt-10 text-left">
        <div className="Label_L text-black">많은 사람이 이용했어요!</div>
        <div className="caption_normal_M text-black">지금 제일 핫한 프레임</div>
        <div className="grid grid-cols-2 gap-4">
          <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
          <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
          <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
          <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
