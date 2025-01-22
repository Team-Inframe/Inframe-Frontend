import Footer from "@/components/layout/Footer";
import React from "react";
import { DownloadButton } from "@/components/common/Button/DownloadButton";
import MoveButton from "/src/assets/svgs/MoveButton.svg";
import { useNavigate } from "react-router-dom";
import leftArrow from "@/assets/svgs/LeftArrow.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCustomFrame } from "@/api";

export const FrameDetailPage = () => {
  const navigate = useNavigate();
  const { customFrameId } = useParams();
  const [frameData, setFrameData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFrameData = async () => {
    try {
      setLoading(true);
      const response = await getCustomFrame(customFrameId);
      console.log(response.data);
      setFrameData(response.data);
    } catch (error) {
      console.log(error);
      setError("데이터를 불러오는데 실��했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFrameData();
  }, [customFrameId]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col">
      <div className="pt-[70px]">
        <img src={leftArrow} alt="뒤로가기" className="mb-[8px] px-[10px]" />
        <span className="Headline_B px-[24px]">
          {frameData.customFrameTitle}
        </span>
      </div>
      <div className="mt-[100px] flex flex-col">
        <div className="flex items-center justify-center">
          <img src={frameData.customFrameUrl} className="w-3/5" />
        </div>
        <div className="flex items-center justify-center pl-52">
          <DownloadButton
            onClick={() => navigate("")}
            label={frameData.bookmarks}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-[20px] px-24 pt-12">
        <div className="flex" onClick={() => navigate("")}>
          <span className="Label_M pt-[2px] text-syscolor-SystemGray">
            촬영하러 가기
          </span>
          <img src={MoveButton} />
        </div>
        <div
          className="flex"
          onClick={() => navigate("/storages/saved-frames")}
        >
          <span className="Label_M pt-[2px] text-syscolor-SystemGray">
            저장하기
          </span>
          <img src={MoveButton} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
