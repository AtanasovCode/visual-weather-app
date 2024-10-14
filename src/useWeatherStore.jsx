import { create } from 'zustand'

export const useWeatherStore = create((set) => ({
    superSecretKey: "N98UUEZWJCFKVHRPUJNY28T7R",

    loading: false,
    setLoading: (loading) => set({ loading }),

    //weather data
    weatherData: {},
    setWeatherData: (value) => set({ weatherData: value }),
    currentWeather: [],
    setCurrentWeather: (currentWeather) => set({ currentWeather }),
    weatherDays: [],
    setWeatherDays: (weatherDays) => set({ weatherDays }),

    units: "c",
    changeUnits: () => set((state) => ({ units: state.units === "c" ? "f" : "c" })),

    location: "",
    changeLocation: (location) => set({ location }),

}))