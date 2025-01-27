import Footer from "@/components/layout/Footer";
import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCustomFrameList, bookmarkCustomFrame } from "@/api";

export const HotFramePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 핫한 프레임 데이터 가져오기
  const {
    data: frames,
    isLoading,
    isError,
  } = useQuery("hotFrames", () =>
    getCustomFrameList("bookmarks").then((res) =>
      res.data.customFrames.map((frame) => ({
        ...frame,
        isBookmarked: frame.isBookmarked || false, // 기본값 설정
      }))
    )
  );

  // 북마크 저장/취소 Mutation
  const mutation = useMutation(
    async (frameId) => {
      const userId = 1;
      const response = await bookmarkCustomFrame(userId, frameId);
      return { frameId, isBookmarked: response.data.is_bookmarked }; // 반환 값에 `is_bookmarked` 추가
    },
    {
      onMutate: async (frameId) => {
        await queryClient.cancelQueries("hotFrames");

        const previousFrames = queryClient.getQueryData("hotFrames");

        queryClient.setQueryData("hotFrames", (oldFrames) =>
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
        queryClient.setQueryData("hotFrames", context.previousFrames);
      },
    }
  );

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div>
      <div className="px-[24px] pt-[70px]">
        <div className="Headline_B">핫한 프레임 🔥</div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-11 px-[50px] pt-12">
        {frames.map((frame) => (
          <HotFrame
            key={frame.customFrameId}
            label1={frame.customFrameTitle}
            onClick={() => navigate(`/frame/${frame.customFrameId}`)}
            frameImg={frame.customFrameUrl}
            label2={frame.bookmarks}
            isBookmarked={frame.isBookmarked}
            onBookmarkClick={() => mutation.mutate(frame.customFrameId)}
          />
        ))}
      </div>
      <div className="h-28 max-w-[490px]"></div>
      <Footer />
    </div>
  );
};
