import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useWeatherStore from "@/libraries/store/weather";
import useGetLocationAndWeather from "@/hooks/useGetLocationAndWeather"; // 위치, 날씨 가져오는 훅
import LeftArrow from "@/assets/svgs/LeftArrow.svg";
import Camera from "@/assets/svgs/Camera.svg";

export const WeatherFramePage = () => {
  const navigate = useNavigate();
  const { location, weather } = useWeatherStore();
  const { fetchLocationAndWeather, loading: weatherLoading } =
    useGetLocationAndWeather(
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      import.meta.env.VITE_OPENWEATHER_API_KEY
    );

  const getWeatherFrameTitle = (weatherMain) => {
    const WEATHER_TITLES = {
      Thunderstorm: "빗방울 프레임",
      Rain: "빗방울 프레임",
      Drizzle: "빗방울 프레임",
      Snow: "눈송이 프레임",
      Atmosphere: "흐림 프레임",
      Clouds: "흐림 프레임",
      Clear: "햇빛 프레임",
    };
    return WEATHER_TITLES[weatherMain] || "기본 프레임";
  };

  const [frame, setFrame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLocationAndWeather();
  }, []);

  useEffect(() => {
    if (!weather) return;

    const fetchFrame = async () => {
      try {
        const response = await fetch(
          `https://your-backend-api.com/frames?weather=${weather.main}`
        );
        if (!response.ok) throw new Error("Failed to fetch frame");

        const data = await response.json();
        setFrame(data);
      } catch (error) {
        console.error("Error fetching weather frame:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFrame();
  }, []);

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col">
      <div className="pt-[56px]">
        <img
          src={LeftArrow}
          alt="Back"
          onClick={handleOnClick}
          className="mb-[12px] cursor-pointer px-[14px]"
        />
        <span className="Headline_B h-full px-[24px]">
          {getWeatherFrameTitle(weather?.main)}
        </span>
        {location && (
          <p className="Label_M px-[24px] text-gray-500">
            {location}에서의 추억
          </p>
        )}
      </div>

      <div className="mt-[40px] flex flex-col items-center justify-center">
        {weatherLoading || loading ? (
          <p className="text-gray-500">프레임을 불러오는 중...</p>
        ) : frame ? (
          <div className="relative w-full max-w-[400px] overflow-hidden rounded-lg shadow-md">
            <img
              src={frame.imageUrl}
              alt={frame.name}
              className="h-60 w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3">
              <span className="text-lg font-bold text-white">{frame.name}</span>
              <p className="text-sm text-white">{frame.description}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">해당 날씨에 맞는 프레임이 없습니다.</p>
        )}
      </div>

      <div className="mt-[40px] flex items-center justify-center gap-[5px] px-[6px]">
        <img src={Camera} className="mt-1" />
        <span className="Label_M mt-2">촬영하러 가기</span>
      </div>
    </div>
  );
};
