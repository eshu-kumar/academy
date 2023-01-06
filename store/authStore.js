import create from "zustand";
import { authUser } from "../services/authService";
const authStore = create((set) => ({
  data: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
  setAuthenticated: () =>
    set((state) => ({ ...state, isAuthenticated: !state.isAuthenticated })),
  async fetchData() {
    set((state) => ({ ...state, isLoading: true }));
    const { isError, data, error } = await authUser();
    if (!isError) {
      set((state) => ({
        ...state,
        data,
        error,
        isLoading: false,
        isAuthenticated: true,
      }));
      console.log("data in store ", data);
    } else {
      set((state) => ({
        ...state,
        error,
        isLoading: false,
        isAuthenticated: false,
      }));
      console.log("data in error store", data);
    }
  },
}));

module.exports = { authStore };
