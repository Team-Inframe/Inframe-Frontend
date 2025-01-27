import { useState } from "react";

const useGetWeather = (openWeatherApiKey) => {
  const [weather, setWeather] = useState("날씨 정보를 가져오는 중...");
  const [error, setError] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=kr&appid=${openWeatherApiKey}`
      );
      const weatherData = await weatherResponse.json();

      if (weatherResponse.ok) {
        setWeather({
          description: weatherData.weather[0].description,
          main: weatherData.weather[0].main,
          temperature: weatherData.main.temp,
          city: weatherData.name,
        });
      } else {
        setError(weatherData.message || "날씨 정보를 가져오지 못했습니다.");
      }
    } catch (error) {
      console.error("날씨 정보 가져오기 실패:", error);
      setError("날씨 정보를 가져오는 데 실패했습니다.");
    }
  };

  return { weather, error, fetchWeather };
};

export default useGetWeather;
