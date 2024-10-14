import { create } from 'zustand'

export const useWeatherStore = create((set) => ({
    superSecretKey: "N98UUEZWJCFKVHRPUJNY28T7R",

    loading: false,
    setLoading: (loading) => set({ loading }),

    //weather data
    weatherData: {},
    setWeatherData: (value) => set({ weatherData: value }),
    weatherDataDays: [],
    setWeatherDataDays: (weatherDataDays) => set({ weatherDataDays }),

    units: "c",
    changeUnits: () => set((state) => ({ units: state.units === "c" ? "f" : "c" })),

    location: "",
    changeLocation: (location) => set({ location }),

}))