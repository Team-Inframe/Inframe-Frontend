import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCustomFrameList, bookmarkCustomFrame } from "@/api";
import { useNavigate } from "react-router-dom";
import { HotFrame } from "@/components/pages/HotFrame";
import RightArrow from "@/assets/svgs/RightArrow.svg";

const FrameList = ({ sort, title, subtitle, navigateTo, movePage }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // 프레임 데이터 가져오기
  const {
    data: frames,
    isLoading,
    isError,
  } = useQuery(
    ["frames", sort],
    () =>
      getCustomFrameList(sort).then((res) =>
        res.data.customFrames.map((frame) => ({
          ...frame,
          isBookmarked: frame.isBookmarked || false,
        }))
      ),
    {
      staleTime: 300000, // 5분 동안 데이터 재요청 방지
    }
  );

  // 북마크 저장/취소 Mutation
  const mutation = useMutation(
    async (frameId) => {
      const userId = localStorage.getItem("userId");
      const response = await bookmarkCustomFrame(userId, frameId);
      return { frameId, isBookmarked: response.data.is_bookmarked };
    },
    {
      onMutate: async (frameId) => {
        await queryClient.cancelQueries(["frames", sort]);

        const previousFrames = queryClient.getQueryData(["frames", sort]);
        queryClient.setQueryData(["frames", sort], (oldFrames) =>
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
        queryClient.setQueryData(["frames", sort], context.previousFrames);
      },
    }
  );

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="mt-10 flex w-full flex-col px-[24px] text-left">
      <div className="items-start justify-start pt-2 text-left">
        <div className="Caption_reading_L text-black">{title}</div>
        <div className="Label_M font-bold text-black">{subtitle}</div>
      </div>
      <div className="mt-2 grid grid-cols-2 items-center justify-center gap-[20px]">
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
          className="flex items-center justify-between gap-[9px] rounded-[8px] border-2 py-[4px] pl-[40px] pr-[30px]"
          onClick={() => navigate(navigateTo)}
        >
          <span className="Caption_normal_M">{movePage}</span>
          <img src={RightArrow} alt="이동 버튼" />
        </div>
      </div>
    </div>
  );
};

export default FrameList;
