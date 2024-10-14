import { create } from 'zustand'

export const useWeatherStore = create((set) => ({
  cats: 14,
  increasePopulation: () => set((state) => ({ cats: state.bears + 1 })),
  removeAllCats: () => set({ cats: 0 }),
}))