import "/icons/download.png";
export const HotFrame = ({ onClick, label }) => {
  return (
    <div className="flex-col">
      <button
        className="h-48 w-40 border-black bg-white shadow-lg"
        onClick={onClick}
      ></button>
      <div>
        <span className="Caption_normal_M flex flex-col justify-start text-black">
          {label}
        </span>
      </div>
    </div>
  );
};
