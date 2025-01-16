import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="">
      <button className="pl-8 pt-8" onClick={() => navigate(-1)}>
        <img src="/icons/backbutton.png" alt="뒤로가기" />
      </button>
      <div className="Headline_B flex items-center justify-center pt-20">
        {title}
      </div>
    </header>
  );
};

export default Header;
