import PropTypes from "prop-types";

import { useEffect } from "react";
import ReactQuerySetting from "@/libraries/reactQuery/ReactQuerySetting";

const setScreenHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export default function AppContainer({ children }) {
  useEffect(() => {
    setScreenHeight();

    window.addEventListener("resize", setScreenHeight);
    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  return (
    <div className="mx-auto min-h-real-screen max-w-[450px] bg-[#FFFFFF]">
      <ReactQuerySetting>{children}</ReactQuerySetting>
    </div>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node,
};
