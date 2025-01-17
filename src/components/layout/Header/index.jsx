import { useNavigate } from "react-router-dom";
import leftarrow from "/src/assets/svgs/LeftArrow.svg";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="">
      <button className="bg-cyan-200" onClick={() => navigate(-1)}>
        <img src={leftarrow} alt="뒤로가기" />
      </button>
      <div className="Headline_B bg-gray-700">{title}</div>
    </header>
  );
};

export default Header;
