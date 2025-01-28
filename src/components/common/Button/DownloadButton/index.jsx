export const DownloadButton = ({ label, onClick, isBookmarked }) => {
  console.log("isBookmarked:", isBookmarked);
  const BookmarkIcon = isBookmarked
    ? "/src/assets/svgs/filledbookmark.svg"
    : "/src/assets/svgs/bookmark.svg";

  return (
    <button className="flex gap-1" onClick={onClick}>
      <span className="Caption_reading_M">{label}</span>
      <img src={BookmarkIcon} className="self-center" />
    </button>
  );
};
