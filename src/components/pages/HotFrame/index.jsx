import Downloadbutton from "/src/assets/svgs/Download.svg";
import frame1 from "@/assets/images/frame1.png";

export const HotFrame = ({ onClick, label1, label2 }) => {
  return (
    <div className="flex-col">
      <button className="border-black bg-white shadow-lg" onClick={onClick}>
        <img src={frame1} />
      </button>
      <div>
        <div className="flex items-center justify-between px-[3px] pt-[4px]">
          <span className="Caption_normal_M flex flex-col justify-start text-black">
            {label1}
          </span>
          <button className="flex flex-row">
            <img className="" src={Downloadbutton} />
            <span className="Caption_normal_M">{label2}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
