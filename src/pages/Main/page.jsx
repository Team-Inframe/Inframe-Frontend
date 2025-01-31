import Footer from "@/components/layout/Footer";
import FrameList from "@/components/pages/Main/FrameList";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import weather1 from "@/assets/images/weather1.png";
import weather2 from "@/assets/images/weather2.png";
import weather3 from "@/assets/images/weather3.png";
import RightArrow from "@/assets/svgs/RightArrow.svg";
import { useEffect } from "react";
import useWeatherStore from "@/libraries/store/weather";
import useGetLocationAndWeather from "@/hooks/useGetLocationAndWeather";

export const MainPage = () => {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const { weather } = useWeatherStore();
  const { fetchLocationAndWeather } = useGetLocationAndWeather(
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    import.meta.env.VITE_OPENWEATHER_API_KEY
  );

  useEffect(() => {
    fetchLocationAndWeather().then(() => {
      const storedLocation = localStorage.getItem("location");
      if (!storedLocation) {
        localStorage.setItem("location", weather?.city || "Unknown");
      }
    });
  }, []);

  const WEATHER_FRAME_IDS = {
    Clear: 72,
    Snow: 73,
    Thunderstorm: 74,
    Mist: 72,
    Rain: 74,
    Drizzle: 74,
    Clouds: 74,
    Atmosphere: 74,
  };

  const customFrameId = WEATHER_FRAME_IDS[weather?.main] || null;

  const handleOnClick = () => {
    if (customFrameId) {
      navigate(`/frames/camera/${customFrameId}`);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto pt-[56px]">
      <div className="w-full flex-col justify-start text-left">
        <div className="Logo_B bg-gradient-to-r from-[#966BD6] to-[#B37DDF] bg-clip-text px-[24px] pb-7 text-transparent">
          INFRAME
        </div>
        <div className="flex justify-between px-[24px]">
          <div className="flex-col">
            <span className="Body_normal_M mb-1 flex font-bold text-black">
              {username}님
            </span>
            <span className="Label_L text-black">
              오늘의 날씨, 프레임으로 기억해볼까요?
            </span>
          </div>
          <img src={RightArrow} onClick={handleOnClick} />
        </div>
        <div className="mt-7 flex w-full flex-col items-center justify-center px-[24px]">
          <Slider {...settings} className="w-full">
            <div className="relative">
              <img src={weather1} className="w-full rounded-[10px]" />
              <div className="absolute bottom-0 left-0 h-40 w-full rounded-b-[10px] bg-gradient-to-t from-black/80 to-transparent p-4" />

              <div className="absolute bottom-0 left-0 w-full rounded-b-[10px] px-5 py-8">
                <span className="Body_normal_M font-bold text-white">
                  맑음 프레임
                </span>
                <div className="mt-3 flex-col gap-1">
                  <div className="font-regular font-pretendard text-[14px] text-white">
                    맑고 투명한 하루를 담아내는 프레임
                  </div>
                  <div className="font-pretendard text-[12px] font-light text-white">
                    #햇살 #푸른하늘 #상쾌한기분
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={weather2} className="w-full rounded-[10px]" />
              <div className="absolute bottom-0 left-0 h-40 w-full rounded-b-[10px] bg-gradient-to-t from-black/80 to-transparent p-4" />

              <div className="absolute bottom-0 left-0 w-full rounded-b-[10px] px-5 py-8">
                <span className="Body_normal_M font-bold text-white">
                  윈터 프레임
                </span>
                <div className="mt-3 flex-col gap-1">
                  <div className="font-regular font-pretendard text-[14px] text-white">
                    포근한 겨울 감성이 스며든 프레임
                  </div>
                  <div className="font-pretendard text-[12px] font-light text-white">
                    #겨울감성 #눈내리는날 #포근한분위기
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={weather3} className="w-full rounded-[8px]" />
              <div className="absolute bottom-0 left-0 h-40 w-full rounded-b-[10px] bg-gradient-to-t from-black/80 to-transparent p-4" />

              <div className="absolute bottom-0 left-0 w-full rounded-b-[10px] px-5 py-8">
                <span className="Body_normal_M font-bold text-white">
                  빗방울 프레임
                </span>
                <div className="mt-3 flex-col gap-1">
                  <div className="font-regular font-pretendard text-[14px] text-white">
                    잔잔한 빗소리와 감성을 담은 프레임
                  </div>
                  <div className="font-pretendard text-[12px] font-light text-white">
                    #비오는날 #감성 #잔잔한무드
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
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
