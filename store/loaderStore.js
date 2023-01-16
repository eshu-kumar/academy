import create from "zustand";

export const loaderStore = create((set) => ({
  status: "Loading...",
  isLoading: false,
  setIsLoading: (isLoading) => set((state) => ({ ...state, isLoading })),
  setStatus: (status) => set((state) => ({ ...state, status })),
}));
