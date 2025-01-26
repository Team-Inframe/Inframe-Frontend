import IconButton from "@/components/common/Button/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import homebutton from "@/assets/svgs/HomeButton.svg";
import framemakebutton from "/src/assets/svgs/FrameMakeButton.svg";
import cabinetbutton from "/src/assets/svgs/CabinetButton.svg";
import ColoredHome from "@/assets/svgs/ColoredHome.svg";
import ColoredFrame from "@/assets/svgs/ColoredFrame.svg";
import ColoredStorage from "@/assets/svgs/ColoredStorage.svg";
import RoutePath from "@/routes/routePath";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveButton = () => {
    switch (location.pathname) {
      case RoutePath.Main:
        return "home";
      case RoutePath.Frame:
        return "frame";
      case RoutePath.Storage:
        return "storage";
      default:
        return "home";
    }
  };

  const activeButton = getActiveButton();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <footer
      className="fixed bottom-0 flex h-24 w-full max-w-[450px] items-center justify-between gap-[80px] bg-white px-[40px]"
      style={{
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <IconButton
        iconSrc={activeButton === "home" ? ColoredHome : homebutton}
        altText="HOME"
        label="홈"
        onClick={() => handleClick(RoutePath.Main)}
        className={activeButton === "home" ? "text-[#9E70D9]" : "text-gray-600"}
      />

      <IconButton
        iconSrc={activeButton === "frame" ? ColoredFrame : framemakebutton}
        altText="프레임 만들기"
        label="프레임 만들기"
        onClick={() => handleClick(RoutePath.Frame)}
        className={
          activeButton === "frame"
            ? "ml-3 text-[#9E70D9]"
            : "ml-3 text-gray-600"
        }
      />

      <IconButton
        iconSrc={activeButton === "storage" ? ColoredStorage : cabinetbutton}
        altText="보관함"
        label="보관함"
        onClick={() => handleClick(RoutePath.Storage)}
        className={
          activeButton === "storage" ? "text-[#9E70D9]" : "text-gray-600"
        }
      />
    </footer>
  );
};

export default Footer;
