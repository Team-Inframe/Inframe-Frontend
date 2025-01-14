import React from "react";
import Footer from "@/componets/layout/Footer/index.jsx";

export const MainPage = () => {
  return (
    <div className="relative flex items-center w-screen max-w-[490px] justify-center scroll-auto">
      <div className="absolute top-12 w-full pl-9 justify-start flex-col text-left">
        <div className="flex text-2xl font-bold">김H팀님</div>
        <div className="text-xl">프레임을 선택해보세요!</div>
      </div>
      <div className="">
        <div className=""></div>
      </div>
      <Footer />
    </div>
  );
};
