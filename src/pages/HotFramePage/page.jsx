import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";

export const HotFramePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-[24px] pt-[70px]">
        <div className="Headline_B">핫한 프레임 🔥</div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-11 px-[50px] pt-12">
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/frame/1")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/frame/1")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/frame/1")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/frame/1")}
          label2={34}
        />
      </div>
      <Footer />
    </div>
  );
};
