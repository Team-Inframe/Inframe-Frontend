import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import { useNavigate } from "react-router-dom";

export const StorageLayout = ({ title, children }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className={`pt-[56px]`}>
      <img
        src={LeftArrow}
        alt="Left Arrow"
        onClick={handleOnClick}
        className="mb-[8px] cursor-pointer px-[14px]"
      />
      <div className="flex flex-col justify-center px-[24px]">
        <span className="Headline_B mb-[25px] text-black">{title}</span>
        {children}
      </div>
    </div>
  );
};
