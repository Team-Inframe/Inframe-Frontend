export const DownloadButton = ({ label, onClick, isBookmarked }) => {
  console.log("isBookmarked:", isBookmarked);
  const BookmarkIcon = isBookmarked
    ? "/src/assets/svgs/filledbookmark.svg"
    : "/src/assets/svgs/bookmark.svg";

  return (
    <button className="flex flex-row gap-2 pt-3" onClick={onClick}>
      <span className="Caption_normal_M">{label}</span>
      <img src={BookmarkIcon} />
    </button>
  );
};
