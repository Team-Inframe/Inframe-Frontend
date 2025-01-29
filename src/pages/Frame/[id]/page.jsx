import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCustomFrame } from "@/api";
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import Camera from "@/assets/svgs/Camera.svg";

export const FrameDetailPage = () => {
  const { customFrameId } = useParams();
  const navigate = useNavigate();
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

  // // 북마크 저장/취소 Mutation
  // const mutation = useMutation(
  //   async () => {
  //     const userId = 1;
  //     const response = await bookmarkCustomFrame(userId, customFrameId);
  //     return response.status;
  //   },
  //   {
  //     onMutate: async () => {
  //       // Optimistic Update
  //       await queryClient.cancelQueries(["frame", customFrameId]);
  //       const previousData = queryClient.getQueryData(["frame", customFrameId]);

  //       queryClient.setQueryData(["frame", customFrameId], (oldData) => ({
  //         ...oldData,
  //         isBookmarked: !oldData.isBookmarked,
  //         bookmarks: oldData.isBookmarked
  //           ? oldData.bookmarks - 1
  //           : oldData.bookmarks + 1,
  //       }));

  //       return { previousData };
  //     },
  //     onError: (err, variables, context) => {
  //       queryClient.setQueryData(
  //         ["frame", customFrameId],
  //         context.previousData
  //       );
  //     },
  //   }
  // );

  const handleOnClick = () => {
    navigate(-1);
  };

  const handleCameraClick = () => {
    navigate(`/frames/camera/${customFrameId}`);
  };

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>;

  return (
    <div className="flex flex-col">
      <div className="pt-[50px]">
        <img
          src={LeftArrow}
          alt="Left Arrow"
          onClick={handleOnClick}
          className="mb-[12px] cursor-pointer px-[14px]"
        />
        <span className="Headline_B h-full px-[24px]">
          {frameData.customFrameTitle}
        </span>
      </div>
      <div className="mt-[80px] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src={frameData.customFrameUrl}
            className="mb-10 w-full px-[10px]"
          />
          <div className="flex items-center justify-center gap-[5px] px-[6px]">
            <img src={Camera} className="mt-1" />
            <div className="Label_M mt-2" onClick={handleCameraClick}>
              촬영하러 가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
