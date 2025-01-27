import { useNavigate } from "react-router-dom";
import leftarrow from "/src/assets/svgs/LeftArrow.svg";

const Header = ({ title, onClick }) => {
  const navigate = useNavigate();
  return (
    <header>
      <button onClick={() => navigate(-1)}>
        <img src={leftarrow} alt="뒤로가기" className="mb-[8px] px-[14px]" />
      </button>
      <div className="flex justify-between px-[24px]">
        <span className="Headline_B">{title}</span>
        <button className="Label_L text-syscolor-SystemGray" onClick={onClick}>
          완료
        </button>
      </div>
    </header>
  );
};

export default Header;
