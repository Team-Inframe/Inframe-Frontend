import IconButton from "@/componets/common/IconButton";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="absolute bottom-0 left-0 flex h-24 w-full items-center justify-around bg-white">
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
        onClick={() => navigate("/")}
      />
      <IconButton
        iconSrc="/icons/cabinetbutton.png"
        altText="보관함"
        label="보관함"
        onClick={() => navigate("/")}
      />
      <IconButton
        iconSrc="/icons/mypagebutton.png"
        altText="마이페이지"
        label="마이페이지"
        onClick={() => navigate("/")}
      />
    </footer>
  );
};

export default Footer;
