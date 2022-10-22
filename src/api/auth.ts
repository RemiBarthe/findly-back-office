import axios from "axios";
const requestUrl = "https://technical-test.findly.co/login/api/token";

export function login(email: string, password: string) {
  return axios.post(
    requestUrl,
    { email: email, password: password },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
}
