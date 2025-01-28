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
    <div className="mt-8 flex max-h-[160px] flex-col items-center justify-center">
      <div>
        <img
          src={frameImg}
          alt="Frame"
          className="cursor-pointer shadow-lg"
          onClick={onClick}
        />
        <div className="mt-2 flex w-full items-center justify-between">
          <div className="Caption_reading_L text-black">{label1}</div>
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
