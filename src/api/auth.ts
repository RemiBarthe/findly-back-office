import axios from "axios";
const requestUrl = "https://technical-test.findly.co/login/api/token";

export function _login(email: string, password: string) {
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

// blocked by CORS policy
export function login(email: string, password: string): string | null {
  if (email && password) {
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY0NzcwNjMsImV4cCI6MTY2NjQ4MDY2Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.exC303DM9PF2CsapBi1XK2NiZn57HEn8cyfXjTYe5fa22-IRr47CirwkdjlZ3QPHppOkJd7pf7eEcErQABXtdNzJrFhxXj49QyWMxbvp5Dt1suKCGnfD3abJolWNeZA9T8Jst8LxVRrlvynnkLSSeYpwZyas8RQ9b9-AruZNIlUja2Bj3URbsFdGJ5wHGWGLwHT6zxshSFjowbwfd6W_bIuCjn7qlC3G1LsfibLkgrxk_GqML7Uq27gNjXFadMsRpAHhh0jWZYGoo7c_NiYG4UYfBk5W9js3OjSYhixQAA0teoWwnueJFuj8fy6RtiPKFYCkRoJihThi1Ov0dH_08g";
  }

  return null;
}
