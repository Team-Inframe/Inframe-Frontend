import Header from "@/components/layout/Header";
import TextButton from "@/components/common/TextButton";
import { useState } from "react";
import AISticker from "@/components/pages/MakeSticker/AISticker";
import PicSticker from "@/components/pages/MakeSticker/PicSticker";

const MakeSticker = () => {
  const [SelectedComp, setSelectComp] = useState("AI로 스티커 만들기");

  return (
    <div>
      <Header title="스티커 만들기" />

      <div>selecedframe</div>

      <div>
        <TextButton
          text={"AI로 스티커 만들기"}
          onClick={() => setSelectComp("AI로 스티커 만들기")}
          colorsrc={SelectedComp == "AI로 스티커 만들기"}
        />
        <TextButton
          text={"사진으로 스티커 만들기"}
          onClick={() => setSelectComp("사진으로 스티커 만들기")}
          colorsrc={SelectedComp == "사진으로 스티커 만들기"}
        />
      </div>
      <div>
        {SelectedComp == "AI로 스티커 만들기" ? <AISticker /> : <PicSticker />}
      </div>
    </div>
  );
};

export default MakeSticker;
