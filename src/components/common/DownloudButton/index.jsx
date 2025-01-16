export const DownloadButton = ({ label, onClick }) => {
  return (
    <button className="flex flex-row pt-3" onClick={onClick}>
      <img src="/icons/download.png" />
      <span className="Caption_normal_M">{label}</span>
    </button>
  );
};
