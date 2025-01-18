import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { DownloadButton } from "@/components/common/DownloadButton";
import { useNavigate } from "react-router-dom";
import MoveButton from "/src/assets/svgs/MoveButton.svg";

export const SaveHotFrame = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="pl-5 pt-8">
        <Header title="지브리st.프레임" />
      </div>
      <div>
        <div className="flex flex-col pt-36">
          <div className="flex items-center justify-center">
            <img src="src/assets/images/frame1.png" className="w-3/5" />
          </div>
          <div className="flex items-center justify-center pl-64">
            <DownloadButton onClick={() => navigate("")} label={34} />
          </div>
        </div>
        <div className="flex justify-around px-24 pt-12">
          <button
            className="Label_M flex flex-row text-syscolor-SystemGray"
            onClick={() => navigate("")}
          >
            촬영하러 가기
            <img src={MoveButton} />
          </button>
          <button
            className="Label_M flex flex-row text-syscolor-SystemGray"
            onClick={() => navigate("")}
          >
            저장하기
            <img src={MoveButton} />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
