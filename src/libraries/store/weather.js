import { create } from "zustand";

const useWeatherStore = create((set) => ({
  location: null,
  weather: null,
  error: null,
  setLocation: (location) => set({ location }),
  setWeather: (weather) => set({ weather }),
  setError: (error) => set({ error }),
}));

export default useWeatherStore;
