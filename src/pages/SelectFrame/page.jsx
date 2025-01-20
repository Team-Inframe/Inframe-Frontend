import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TextButton from "@/components/common/TextButton";
import { useState } from "react";
import ColList from "@/components/pages/SelectFrame/ColList";
import RowList from "@/components/pages/SelectFrame/RowList";

const SelectFrame = () => {
  const [FramePage, setFramePage] = useState("세로프레임");
  const List = ["세로프레임", "가로프레임"];

  return (
    <div>
      <Header title="프레임 선택" />
      <div className="">
        <TextButton
          text="세로프레임"
          onClick={() => setFramePage(List[0])}
          colorsrc={FramePage == List[0]}
        />
        <TextButton
          text="가로프레임"
          onClick={() => setFramePage(List[1])}
          colorsrc={FramePage == List[1]}
        />
      </div>
      <div>{FramePage == List[0] ? <RowList /> : <ColList />}</div>

      <Footer />
    </div>
  );
};
export default SelectFrame;
