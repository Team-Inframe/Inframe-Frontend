import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/Main/HotFrame";
import { useNavigate } from "react-router-dom";

export const HotFramePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pl-10 pt-12">
        <div className="Headline_B">핫한 프레임</div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-11 px-16 pt-12">
        <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
        <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
        <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
        <HotFrame label="지브리st 프레임" onClick={() => navigate("/")} />
      </div>
      <Footer />
    </div>
  );
};
