import create from "zustand";
import { authenticateService } from "../services/authService";
const authStore = create((set) => ({
  email: null,
  error: null,
  isDone: false,
  isAuthenticated: false,
  setIsDone: () => set((state) => ({ ...state, isDone: !state.isDone })),

  setAuthenticated: () =>
    set((state) => ({ ...state, isAuthenticated: !state.isAuthenticated })),
  async fetchData() {
    set((state) => ({ ...state }));
    const response = await authenticateService();
    if (!response.isError) {
      set((state) => ({
        ...state,
        email: response.email,
        error: null,
        isDone: true,
        isAuthenticated: true,
      }));
      console.log(
        "response in auth store, returned via auth service ",
        response
      );
    } else {
      set((state) => ({
        ...state,
        error: response.message,
        email: null,
        isDone: true,
        isAuthenticated: false,
      }));
      console.log(
        " got error in auth store , returned via auth service ",
        response
      );
    }
  },
}));

module.exports = { authStore };
