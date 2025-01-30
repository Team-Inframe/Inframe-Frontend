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
            const addressComponents = geocodeData.results[0].address_components;

            const administrativeArea = addressComponents.find((comp) =>
              comp.types.includes("administrative_area_level_1")
            )?.long_name;

            const locality = addressComponents.find((comp) =>
              comp.types.includes("locality")
            )?.long_name;

            const formattedLocation =
              `${administrativeArea || ""} ${locality || ""}`.trim();

            localStorage.setItem("location", formattedLocation);
            setLocation(formattedLocation);

            console.log("저장된 위치:", formattedLocation);
          } else {
            throw new Error("주소 정보를 가져오는 데 실패했습니다.");
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
            throw new Error(
              weatherData.message || "날씨 정보를 가져오지 못했습니다."
            );
          }
        } catch (error) {
          console.error("위치 또는 날씨 정보 가져오기 실패:", error);
          setError(error.message);
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
