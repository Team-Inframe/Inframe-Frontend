import filledbookmark from "@/assets/svgs/filledbookmark.svg";
import bookmark from "@/assets/svgs/bookmark.svg";

export const DownloadButton = ({ label, onClick, isBookmarked }) => {
  console.log("isBookmarked:", isBookmarked);
  const BookmarkIcon = isBookmarked ? filledbookmark : bookmark;

  return (
    <button className="flex gap-1" onClick={onClick}>
      <span className="Caption_reading_M">{label}</span>
      <img src={BookmarkIcon} className="self-center" />
    </button>
  );
};
