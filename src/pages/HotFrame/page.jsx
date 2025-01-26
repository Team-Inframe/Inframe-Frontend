import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCustomFrameList } from "@/api";

export const HotFramePage = () => {
  const navigate = useNavigate();
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFrames = async () => {
    try {
      setLoading(true);
      const response = await getCustomFrameList("bookmarks");
      const sortedFrames = response.data.customFrames;
      setFrames(sortedFrames);
    } catch (error) {
      console.error(error);
      setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFrames();
  }, []);

  return (
    <div>
      <div className="px-[24px] pt-[70px]">
        <div className="Headline_B">핫한 프레임 🔥</div>
      </div>
      {loading ? (
        <div className="text-center">로딩 중...</div> // 로딩 중 메시지
      ) : error ? (
        <div className="text-center text-red-500">{error}</div> // 에러 메시지
      ) : (
        <div className="grid grid-cols-2 items-center justify-center gap-11 px-[50px] pt-12">
          {frames.map((frame) => (
            <HotFrame
              key={frame.customFrameId}
              label1={frame.customFrameTitle}
              onClick={() => navigate("/frames/${frame.customFrameId}")}
              frameImg={frame.customFrameUrl}
              label2={frame.bookmarks}
            />
          ))}
        </div>
      )}
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
