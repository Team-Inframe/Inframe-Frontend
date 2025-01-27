import Footer from "@/components/layout/Footer";
import { DownloadButton } from "@/components/common/Button/DownloadButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCustomFrame, bookmarkCustomFrame } from "@/api";

export const FrameDetailPage = () => {
  const navigate = useNavigate();
  const { customFrameId } = useParams();
  const queryClient = useQueryClient();

  // Frame 데이터 가져오기
  const {
    data: frameData,
    isLoading,
    isError,
  } = useQuery(
    ["frame", customFrameId],
    () => getCustomFrame(customFrameId).then((res) => res.data),
    {
      staleTime: 300000, // 5분 캐싱
      cacheTime: 600000, // 10분 유지
    }
  );

  // 북마크 저장/취소 Mutation
  const mutation = useMutation(
    async () => {
      const userId = localStorage.getItem("userId");
      const response = await bookmarkCustomFrame(userId, customFrameId);
      return response.status;
    },
    {
      onMutate: async () => {
        // Optimistic Update
        await queryClient.cancelQueries(["frame", customFrameId]);
        const previousData = queryClient.getQueryData(["frame", customFrameId]);

        queryClient.setQueryData(["frame", customFrameId], (oldData) => ({
          ...oldData,
          isBookmarked: !oldData.isBookmarked,
          bookmarks: oldData.isBookmarked
            ? oldData.bookmarks - 1
            : oldData.bookmarks + 1,
        }));

        return { previousData };
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData(
          ["frame", customFrameId],
          context.previousData
        );
      },
    }
  );

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="flex flex-col">
      <div className="pt-[70px]">
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
            label={frameData.bookmarks}
            isBookmarked={frameData.isBookmarked}
            onClick={() => mutation.mutate()} // 북마크 저장/취소 트리거
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
