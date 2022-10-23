import axios from "axios";
import { useTokenStore } from "@/stores/token";
import { storeToRefs } from "pinia";

const requestUrl = "https://technical-test.findly.co/api/users";
const { token } = storeToRefs(useTokenStore());

axios.defaults.headers.common = { Authorization: `Bearer ${token.value}` };

export default {
  index(params: { page: number }) {
    return axios.get(requestUrl, {
      params: params,
    });
  },

  get(id: number) {
    return axios.get(requestUrl + id);
  },

  update(id: number, data: Array<string>) {
    return axios.put(requestUrl + id, data);
  },

  create(data: Array<string>) {
    return axios.post(requestUrl, data);
  },

  delete(id: number) {
    return axios.delete(requestUrl + id);
  },
};
