import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useTokenStore = defineStore("token", () => {
  const token: Ref<string | null> = ref(null);
  const currentEmail: Ref<string | null> = ref(null);

  return { token, currentEmail };
});
