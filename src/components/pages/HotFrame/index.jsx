import { DownloadButton } from "@/components/common/Button/DownloadButton";
export const HotFrame = ({
  onClick,
  frameImg,
  label1,
  label2,
  isBookmarked,
  onBookmarkClick,
}) => {
  console.log("HotFrame isBookmarked:", isBookmarked);
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <div className="flex min-w-[129px] flex-col justify-between">
        <img
          src={frameImg}
          alt="Frame"
          className="cursor-pointer shadow-lg"
          onClick={onClick}
        />
        <div className="mt-1 flex w-full items-center justify-between">
          <div className="Caption_normal_M text-black">{label1}</div>
          <DownloadButton
            label={label2}
            isBookmarked={isBookmarked}
            onClick={onBookmarkClick}
          />
        </div>
      </div>
    </div>
  );
};
