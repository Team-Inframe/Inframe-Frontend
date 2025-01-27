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
    <div className="flex-col">
      <button className="border-black bg-white shadow-lg" onClick={onClick}>
        <img src={frameImg} alt="Frame" />
      </button>
      <div>
        <div className="flex items-center justify-between px-[3px] pt-[4px]">
          <span className="Caption_normal_M flex flex-col justify-start text-black">
            {label1}
          </span>
          <DownloadButton
            label={label2}
            isBookmarked={isBookmarked} // 북마크 상태 전달
            onClick={onBookmarkClick} // 북마크 클릭 핸들러 전달
          />
        </div>
      </div>
    </div>
  );
};
