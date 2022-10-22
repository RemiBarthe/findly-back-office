import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    token: null as string | null,
  }),
  getters: {
    getToken(): string | null {
      return this.token;
    },
  },
  actions: {
    setToken(token: string | null) {
      this.token = token;
    },
  },
});
