import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCustomFrameList, bookmarkCustomFrame } from "@/api";
import RoutePath from "@/routes/routePath";

export const MainPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 프레임 데이터 가져오기
  const {
    data: frames,
    isLoading,
    isError,
  } = useQuery(
    "frames",
    () =>
      getCustomFrameList("bookmarks").then((res) =>
        res.data.customFrames.map((frame) => ({
          ...frame,
          isBookmarked: frame.isBookmarked || false, // 서버 데이터에 따라 초기화
        }))
      ),
    {
      staleTime: 300000, // 5분 동안 데이터 재요청 방지
    }
  );

  // 북마크 저장/취소 Mutation
  const mutation = useMutation(
    async (frameId) => {
      const userId = localStorage.getItem("user_id");
      const response = await bookmarkCustomFrame(userId, frameId);
      return { frameId, isBookmarked: response.data.is_bookmarked }; // 서버에서 `is_bookmarked` 값 반환
    },
    {
      onMutate: async (frameId) => {
        await queryClient.cancelQueries("frames");

        const previousFrames = queryClient.getQueryData("frames");
        queryClient.setQueryData("frames", (oldFrames) =>
          oldFrames.map((frame) =>
            frame.customFrameId === frameId
              ? {
                  ...frame,
                  isBookmarked: !frame.isBookmarked,
                  bookmarks: frame.isBookmarked
                    ? frame.bookmarks - 1
                    : frame.bookmarks + 1,
                }
              : frame
          )
        );

        return { previousFrames };
      },
      onError: (err, frameId, context) => {
        queryClient.setQueryData("frames", context.previousFrames);
      },
    }
  );

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto px-[24px] pt-[70px]">
      <div className="w-full flex-col justify-start text-left">
        <div className="Headline_B flex text-black">김H팀님</div>
        <div className="Headline_L text-black">프레임을 선택해보세요!</div>
      </div>
      <div className="items-center pt-8">
        <img src="/icons/bannerimage.png" alt="배너 이미지" />
      </div>
      <div className="flex w-full flex-col text-left">
        <div className="items-start justify-start pt-8 text-left">
          <div className="Label_L text-black">많은 사람이 이용했어요!</div>
          <div className="caption_normal_M text-black">
            지금 제일 핫한 프레임
          </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-[20px] px-[15px] pt-8">
          {frames.slice(0, 4).map((frame) => (
            <HotFrame
              key={frame.customFrameId}
              label1={frame.customFrameTitle}
              onClick={() => navigate(`/frames/${frame.customFrameId}`)}
              frameImg={frame.customFrameUrl}
              label2={frame.bookmarks}
              isBookmarked={frame.isBookmarked}
              onBookmarkClick={() => mutation.mutate(frame.customFrameId)}
            />
          ))}
        </div>
        <div className="flex justify-center pt-[40px]">
          <div
            className="flex items-center justify-between gap-[9px] rounded-lg border-2 py-[6px] pl-[40px] pr-[30px]"
            onClick={() => navigate(RoutePath.FrameHot)}
          >
            <span className="Label_M">핫한 프레임 더보기</span>
            <img src="/src/assets/svgs/MoveButton.svg" alt="이동 버튼" />
          </div>
        </div>
        <div className="h-28 max-w-[490px]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
