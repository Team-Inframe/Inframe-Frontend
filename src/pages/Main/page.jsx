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
      <div className="items-center pt-8">
        <img src="/icons/bannerimage.png" />
      </div>
      <div className="flex w-full flex-col text-left">
        <div className="items-start justify-start pl-9 pt-8 text-left">
          <div className="Label_L text-black">많은 사람이 이용했어요!</div>
          <div className="caption_normal_M text-black">
            지금 제일 핫한 프레임
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-11 px-16 pt-8">
          <HotFrame
            label1="지브리st 프레임"
            frameimage={"/icons/frame.png"}
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            frameimage={"/icons/frame2.png"}
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            frameimage={"/icons/frame3.png"}
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
          <HotFrame
            label1="지브리st 프레임"
            frameimage={"/icons/frame4.png"}
            onClick={() => navigate("/hotframe")}
            label2={220}
          />
        </div>
        <div className="flex justify-center p-10">
          <button
            className="Label_M h-10 w-96 flex-row space-x-2 rounded-lg border-2 text-center"
            onClick={() => navigate("/hotframe")}
          >
            핫한 프레임 더보기{" "}
            <img
              src="/icons/MoveButton.png"
              style={{
                display: "inline-block",
                marginLeft: "8px",
                verticalAlign: "middle",
              }}
            />
          </button>
        </div>
        <div className="h-28 w-screen max-w-[490px]"></div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
