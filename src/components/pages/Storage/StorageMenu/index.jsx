import RightArrow from "@/assets/svgs/RightArrow.svg";
import { useNavigate } from "react-router-dom";

export const StorageMenu = ({ children, to }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(to);
  };
  return (
    <div
      className="cursor-pointe flex items-center justify-between py-[11px]"
      onClick={handleOnClick}
    >
      <span className="Body_normal_M text-black">{children}</span>
      <img src={RightArrow} alt="Right Arrow" />
    </div>
  );
};
