import { create } from 'zustand'

export const useWeatherStore = create((set) => ({
    superSecretKey: "N98UUEZWJCFKVHRPUJNY28T7R",

    loading: false,
    setLoading: (loading) => set({ loading }),

    weatherData: {},
    setWeatherData: (value) => set({ weatherData: value }),

    units: "c",
    changeUnits: () => set((state) => ({ units: state.units === "c" ? "f" : "c" })),

    location: "London",
    changeLocation: (location) => set({ location }),

    //response values
    temp: "",
    setTemp: (temp) => set({ temp }),
    conditions: "",
    setConditions: (conditions) => set({ conditions }),
    feelsLike: "",
    setFeelsLike: (feelsLike) => set({ feelsLike }),
    humidity: "",
    setHumidity: (humidity) => set({ humidity }),
    precip: 0,
    setPrecip: (precip) => set({ precip }),
    icon: "",
    setIcon: (icon) => set({ icon }),

}))