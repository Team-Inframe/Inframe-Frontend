import React from "react";
import Footer from "@/componets/layout/Footer/index.jsx";

export const MainPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute top-8 flex justify-start flex-col text-left">
        <div className="flex text-2xl font-bold">김H팀님</div>
        <div className="text-m">프레임을 선택해보세요!</div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
      <Footer />
    </div>
  );
};
