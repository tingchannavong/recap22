import { create } from "zustand";
import { persist } from "zustand/middleware";

const userConfig = (set, get) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logOut: () => set({ user: null, token: null }),
});

//in persist, 1st param is config
// 2nd param is the name key : to be saved in local storage
// name must be name it's a persist key
const useUserStore = create(
    persist(userConfig, {name: "user-store"})
);

export default useUserStore;
