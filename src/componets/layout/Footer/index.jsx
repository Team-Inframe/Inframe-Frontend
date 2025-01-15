import IconButton from "@/componets/common/IconButton";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 w-screen max-w-[490px] h-24  bg-white flex justify-around items-center">
      <IconButton
        iconSrc="/icons/homebutton.png"
        altText="HOME"
        label="홈"
        onClick={() => navigate("/")}
      />
      <IconButton
        iconSrc="/icons/framemakebutton.png"
        altText="프레임 만들기"
        label="프레임 만들기"
        onClick={() => navigate("/home")}
      />
      <IconButton
        iconSrc="/icons/cabinetbutton.png"
        altText="보관함"
        label="보관함"
        onClick={() => navigate("/")}
      />
    </footer>
  );
};

export default Footer;
