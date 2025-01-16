export const HotFrame = ({ onClick, label1, label2 }) => {
  return (
    <div className="flex-col">
      <button
        className="h-48 w-40 border-black bg-white shadow-lg"
        onClick={onClick}
      >
        <img src="/icons/frame.png" />
      </button>
      <div>
        <div className="flex flex-row justify-between">
          <span className="Caption_normal_M flex flex-col justify-start pt-3 text-black">
            {label1}
          </span>
          <button className="flex flex-row pt-3">
            <img src="/icons/download.png" />
            <span className="Caption_normal_M">{label2}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
