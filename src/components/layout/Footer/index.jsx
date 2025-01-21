import IconButton from "@/components/common/Button/IconButton";
import { useNavigate } from "react-router-dom";
import homebutton from "@/assets/svgs/HomeButton.svg";
import framemakebutton from "/src/assets/svgs/FrameMakeButton.svg";
import cabinetbutton from "/src/assets/svgs/CabinetButton.svg";
import RoutePath from "@/routes/routePath";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 flex h-24 w-screen max-w-[490px] items-center justify-around bg-white">
      <IconButton
        iconSrc={homebutton}
        altText="HOME"
        label="홈"
        onClick={() => navigate(RoutePath.Main)}
      />
      <IconButton
        iconSrc={framemakebutton}
        altText="프레임 만들기"
        label="프레임 만들기"
        onClick={() => navigate(RoutePath.Frame)}
      />
      <IconButton
        iconSrc={cabinetbutton}
        altText="보관함"
        label="보관함"
        onClick={() => navigate(RoutePath.Storage)}
      />
    </footer>
  );
};

export default Footer;
