import Footer from "@/components/layout/Footer/index.jsx";
import { useNavigate } from "react-router-dom";
import { RecommendCard } from "@/components/pages/Main/RecommendCard";
import { HotFrame } from "@/components/pages/Main/HotFrame";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute flex flex-col items-center h-full w-screen max-w-[490px] justify-center scroll-auto">
      <div className="absolute top-12 w-full pl-9 justify-start flex-col text-left">
        <div className="flex text-2xl font-bold">김H팀님</div>
        <div className="text-xl">프레임을 선택해보세요!</div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
      <div className="absolute items-center w-full pl-9 pt-10 justify-start flex-col text-left">
        <div className="flex text-s font-thin">많은 사람이 이용했어요!</div>
        <div className="text-l font-semibold ">지금 제일 핫한 프레임</div>
        <div className=" grid grid-cols-2 gap-4">
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
