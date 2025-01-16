import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";

export const HotFramePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pl-10 pt-12">
        <div className="Headline_B">핫한 프레임 🔥</div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-11 px-16 pt-12">
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame2.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame3.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame4.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame2.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame3.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          frameimage={"/icons/frame4.png"}
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
      </div>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
