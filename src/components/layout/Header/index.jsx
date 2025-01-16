import { useNavigate } from "react-router-dom";
const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="">
      <button onClick={() => navigate(-1)}>
        <img src="/icons/backbutton.png" alt="뒤로가기" />
      </button>
      <div className="Headline_B pl-5">{title}</div>
    </header>
  );
};
export default Header;
