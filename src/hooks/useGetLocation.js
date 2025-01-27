import { useState } from "react";

const useGetLocation = (googleMapsApiKey) => {
  const [location, setLocation] = useState("위치를 가져오는 중...");
  const [error, setError] = useState(null);

  const fetchLocation = async () => {
    if (!navigator.geolocation) {
      setError("브라우저가 Geolocation을 지원하지 않습니다.");
      return;
    }

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
          }
        } catch (error) {
          console.error("주소 정보 가져오기 실패:", error);
          setError("위치 정보를 가져오는 데 실패했습니다.");
        }
      },
      (error) => {
        console.error("Geolocation Error:", error);
        setError("위치 정보를 가져오는 데 실패했습니다.");
      },
      { enableHighAccuracy: true }
    );
  };

  return { location, error, fetchLocation };
};

export default useGetLocation;
