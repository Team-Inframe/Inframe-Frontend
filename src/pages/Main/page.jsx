import Footer from "@/components/layout/Footer";
import FrameList from "@/components/pages/Main/FrameList";
import useGetLocationAndWeather from "@/hooks/useGetLocationAndWeather";
import useWeatherStore from "@/libraries/store/weather";
import { useEffect } from "react";

export const MainPage = () => {
  const username = localStorage.getItem("username");

  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const { location, weather, error } = useWeatherStore();
  const { fetchLocationAndWeather, loading } = useGetLocationAndWeather(
    GOOGLE_MAPS_API_KEY,
    OPENWEATHER_API_KEY
  );

  useEffect(() => {
    fetchLocationAndWeather();
  }, []);

  // {location && <p className="Label_M">현재 위치: {location}</p>}
  // {weather && (
  //   <div>
  //     <p className="Label_M">날씨: {weather.description}</p>
  //   </div>
  // )}
  // {error && <div className="text-red-500">오류: {error}</div>}

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto pt-[70px]">
      <div className="w-full flex-col justify-start px-[24px] text-left">
        <div className="Headline_B bg-gradient-to-r from-[#8761D2] to-[#B37DDF] bg-clip-text pb-7 text-transparent">
          INFRAME
        </div>
        <span className="Body_normal_M mb-1 flex text-black">{username}님</span>
        <span className="Label_L text-black">
          오늘의 날씨 프레임을 확인해보세요!
        </span>
        <div className="mt-4 flex items-center justify-center"></div>
      </div>
      <FrameList
        sort="bookmarks"
        title="오늘 하루 가장 인기 있는 프레임들이에요!"
        subtitle="지금 제일 핫한 프레임"
        navigateTo="/frames/hot"
        movePage="핫한 프레임 더 보러 가기"
      />
      <FrameList
        sort="latest"
        title="새로운 프레임을 확인해보세요!"
        subtitle="최신 프레임 목록"
        navigateTo="/frames/latest"
        movePage="최신 프레임 더 보러 가기"
      />
      <div className="h-36 max-w-[450px]"></div>
      <Footer />
    </div>
  );
};

export default MainPage;
