import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import { useState, useEffect } from "react";
import { getCustomFrameList } from "@/api";

export const HotFramePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div className="">
          <Header title="핫한 프레임 🔥" />
        </div>
        <div></div>
        <div className="Body_reading_M pl-12 pt-1">
          많은 사람들이 저장한 프레임이에요!
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-11 px-9 pt-12">
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
        <HotFrame
          label1="지브리st 프레임"
          onClick={() => navigate("/savehotframe")}
          label2={34}
        />
      </div>
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
