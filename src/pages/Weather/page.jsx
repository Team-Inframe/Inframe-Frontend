// import { useEffect } from "react";
// import useGetLocation from "@/hooks/useGetLocation";
// import useGetWeather from "@/hooks/useGetWeather";

// const LocationWeatherApp = () => {
//   const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
//   const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

//   const {
//     location,
//     error: locationError,
//     fetchLocation,
//   } = useGetLocation(GOOGLE_MAPS_API_KEY);

//   const {
//     weather,
//     error: weatherError,
//     fetchWeather,
//   } = useGetWeather(OPENWEATHER_API_KEY);

//   useEffect(() => {
//     const getLocationAndWeather = async () => {
//       navigator.geolocation.getCurrentPosition(
//         async ({ coords }) => {
//           try {
//             const { latitude, longitude } = coords;

//             await fetchLocation(latitude, longitude);

//             await fetchWeather(latitude, longitude);
//           } catch (error) {
//             console.error(
//               "위치 또는 날씨 정보를 가져오는 중 오류 발생:",
//               error
//             );
//           }
//         },
//         (error) => {
//           console.error("Geolocation Error:", error);
//         },
//         { enableHighAccuracy: true }
//       );
//     };

//     getLocationAndWeather();
//   }, []);

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
//       <h1 className="mb-4 text-2xl font-bold">현재 위치 및 날씨</h1>

//       <p className="mb-2 text-lg">{locationError || `위치: ${location}`}</p>

//       <p className="mb-4 text-lg">
//         {weather.description
//           ? `날씨: ${weather.description}, 온도: ${weather.temperature}°C, 상태: ${weather.main}`
//           : weatherError || "날씨 정보를 가져오는 중..."}
//       </p>
//     </div>
//   );
// };

// export default LocationWeatherApp;
