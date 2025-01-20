import Downloadbutton from "/src/assets/svgs/Download.svg";

export const HotFrame = ({ onClick, frameImg, label1, label2 }) => {
  return (
    <div className="flex-col">
      <button className="border-black bg-white shadow-lg" onClick={onClick}>
        <img src={frameImg} />
      </button>
      <div>
        <div className="flex items-center justify-between px-[3px] pt-[4px]">
          <span className="Caption_normal_M flex flex-col justify-start text-black">
            {label1}
          </span>
          <button className="flex flex-row">
            <img src={Downloadbutton} />
            <span className="Caption_normal_M">{label2}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
