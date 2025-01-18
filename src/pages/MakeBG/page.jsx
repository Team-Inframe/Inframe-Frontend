import Header from "@/components/layout/Header";
import TextButton from "@/components/common/TextButton";
import { useState } from "react";
import BasicBG from "@/components/pages/MakeBG/BasicBG";
import AIBG from "@/components/pages/MakeBG/AIBG";
import PicBG from "@/components/pages/MakeBG/PicBG";
import SelectedFrame from "@/components/pages/MakeBG/SelectedFrame";
import CompleteButton from "@/components/common/CompleteButton";

const MakeFrame = () => {
  const List = ["기본 색상 변경", "AI 배경 생성", "사진으로 배경 생성"];
  const [colorChanger, setColorChanger] = useState("BGColor5");
  const [MakePage, setMakePage] = useState(List[0]);

  return (
    <div>
      <Header title="프레임 만들기" />
      <div>
        <CompleteButton />
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <SelectedFrame bgsrc={colorChanger} />
        </div>
      </div>

      <div className="">
        <TextButton
          text={List[0]}
          onClick={() => setMakePage(List[0])}
          colorsrc={MakePage == List[0]}
        />
        <TextButton
          text={List[1]}
          onClick={() => setMakePage(List[1])}
          colorsrc={MakePage == List[1]}
        />
        <TextButton
          text={List[2]}
          onClick={() => setMakePage(List[2])}
          colorsrc={MakePage == List[2]}
        />
      </div>
      <div>
        {MakePage == List[0] ? (
          <BasicBG colorChanger={setColorChanger} />
        ) : MakePage == List[1] ? (
          <AIBG />
        ) : (
          <PicBG />
        )}
      </div>
    </div>
  );
};

export default MakeFrame;
