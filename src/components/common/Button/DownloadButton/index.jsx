export const DownloadButton = ({ label, onClick, isBookmarked }) => {
  const BookmarkIcon = isBookmarked
    ? "/src/assets/svgs/filledbookmark.svg"
    : "/src/assets/svgs/bookmark.svg";

  return (
    <button className="flex flex-row pt-3" onClick={onClick}>
      <img src={BookmarkIcon} />
      <span className="Caption_normal_M">{label}</span>
    </button>
  );
};
