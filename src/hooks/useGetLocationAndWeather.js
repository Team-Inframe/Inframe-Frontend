import useWeatherStore from "@/libraries/store/weather";
import { useState } from "react";

const useGetLocationAndWeather = (googleMapsApiKey, openWeatherApiKey) => {
  const { setLocation, setWeather, setError } = useWeatherStore();
  const [loading, setLoading] = useState(false);

  const fetchLocationAndWeather = async () => {
    if (!navigator.geolocation) {
      setError("브라우저가 Geolocation을 지원하지 않습니다.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const geocodeResponse = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=ko&key=${googleMapsApiKey}`
          );
          const geocodeData = await geocodeResponse.json();

          if (geocodeResponse.ok && geocodeData.results.length > 0) {
            const formattedAddress = geocodeData.results[0].formatted_address;
            setLocation(formattedAddress);
          } else {
            setError("주소 정보를 가져오는 데 실패했습니다.");
            setLoading(false);
            return;
          }

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
          console.error("위치 또는 날씨 정보 가져오기 실패:", error);
          setError("위치 또는 날씨 정보를 가져오는 데 실패했습니다.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation Error:", error);
        setError("위치 정보를 가져오는 데 실패했습니다.");
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return { fetchLocationAndWeather, loading };
};

export default useGetLocationAndWeather;
