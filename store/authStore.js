import create from "zustand";
import { authUser } from "../services/authService";
const authStore = create((set) => ({
  data: null,
  error: null,
  isDone: false,
  isAuthenticated: false,
  setIsDone: () => set((state) => ({ ...state, isDone: !state.isDone })),

  setAuthenticated: () =>
    set((state) => ({ ...state, isAuthenticated: !state.isAuthenticated })),
  async fetchData() {
    set((state) => ({ ...state }));
    const { isError, data, error } = await authUser();
    if (!isError) {
      set((state) => ({
        ...state,
        data,
        error,
        isDone: true,
        isAuthenticated: true,
      }));
      console.log("data in store ", data);
    } else {
      set((state) => ({
        ...state,
        error,
        isDone: true,
        isAuthenticated: false,
      }));
      console.log("data in error store", data);
    }
  },
}));

module.exports = { authStore };
