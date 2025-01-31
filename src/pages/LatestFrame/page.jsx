import { HotFrame } from "@/components/pages/HotFrame";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCustomFrameList, bookmarkCustomFrame } from "@/api";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import { useEffect } from "react";

export const LatestFramePage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const sort = "latest";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      staleTime: 300000,
    }
  );

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

  const handleOnClick = () => {
    navigate(-1);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="pt-[56px]">
      <img
        src={LeftArrow}
        alt="Left Arrow"
        onClick={handleOnClick}
        className="mb-[8px] cursor-pointer px-[14px]"
      />
      <div className="Headline_B px-[24px]">최신 프레임</div>
      <div className="grid grid-cols-2 items-center justify-center gap-12 px-[44px] pt-12">
        {frames.map((frame) => (
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
      <div className="h-28 max-w-[450px]"></div>
    </div>
  );
};
