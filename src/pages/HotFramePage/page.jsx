import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCustomFrameList } from "@/api";
import { bookmarkCustomFrame } from "@/api";

export const HotFramePage = () => {
  const navigate = useNavigate();
  const [frames, setFrames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFrames = async () => {
    try {
      setLoading(true);
      const response = await getCustomFrameList("bookmarks");
      const sortedFrames = response.data.customFrames.map((frame) => ({
        ...frame,
        isBookmarked: false,
      }));
      setFrames(sortedFrames);
    } catch (error) {
      console.error(error);
      setError("데이터를 불러오는데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBookmark = async (frameId) => {
    try {
      const userId = 1;
      const response = await bookmarkCustomFrame(userId, frameId);

      setFrames((prevFrames) =>
        prevFrames.map(
          (frame) =>
            frame.customFrameId === frameId
              ? {
                  ...frame,
                  isBookmarked: response.status === 201,
                  // API 응답 상태가 201(저장 성공)일 경우 true, 아니면 false.
                }
              : frame,
          console.log(response.status)
        )
      );
    } catch (error) {
      console.error(error); // 에러 로그 출력.
      alert("북마크 저장/취소에 실패했습니다."); // 사용자에게 에러 알림.
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
              key={frame.customFrameId} // 각 프레임의 고유 ID.
              label1={frame.customFrameTitle} // 프레임 제목 전달.
              onClick={() => navigate(`/frame/${frame.customFrameId}`)} // 클릭 시 특정 프레임 상세 페이지로 이동.
              frameImg={frame.customFrameUrl} // 프레임 이미지 URL 전달.
              label2={frame.bookmarks} // 북마크 수 전달.
              isBookmarked={frame.isBookmarked} // 북마크 상태 전달.
              onBookmarkClick={() => handleSaveBookmark(frame.customFrameId)}
            />
          ))}
        </div>
      )}
      <div className="h-28 w-screen max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
