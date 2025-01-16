import Footer from "@/components/layout/Footer";
import "/icons/frame.png";
import Header2 from "@/components/layout/Header2";
import { DownloadButton } from "@/components/common/DownloudButton";
import { useNavigate } from "react-router-dom";

export const SaveHotFrame = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="">
        <Header2 title="지브리st.프레임" />
      </div>
      <div>
        <div className="flex flex-col pt-12">
          <div className="flex items-center justify-center">
            <img src="/icons/frame.png" className="w-3/5" />
          </div>
          <div className="flex items-center justify-center pl-52">
            <DownloadButton onClick={() => navigate("")} label={34} />
          </div>
        </div>
        <div className="flex justify-around px-24 pt-12">
          <button
            className="Label_M flex flex-row text-syscolor-SystemGray"
            onClick={() => navigate("")}
          >
            촬영하러 가기
            <img src="/icons/MoveButton.png" />
          </button>
          <button
            className="Label_M flex flex-row text-syscolor-SystemGray"
            onClick={() => navigate("")}
          >
            저장하기
            <img src="/icons/MoveButton.png" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
