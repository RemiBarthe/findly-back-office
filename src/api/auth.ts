import axios from "axios";
const requestUrl = "https://technical-test.findly.co/api/token";

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
    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY1MzI4NTMsImV4cCI6MTY2NjUzNjQ1Mywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGZpbmRseS5jbyJ9.IMOz3kkzzg8pGyOtlTmfTDQBj2lItWVf06zigmMxiuPjUGAP9ufF37zOohlZ2Xj_CR5k-HzGY0J2WJmFHqUmRHm3pDgo7GCJ2wnZ4j_AHpLpOcUIjKdIkpby1ZkGbs90K9cMtFwNIgArsYKrY0Zba_PjeW9arELDSkoMdJtRSNQPPvBjKil5mAcNV2lT8Fi0diGfAZhEyKQk37k72sXpIzkZ7T5rJOI5FHcTmkAo57zxKB-j6pXGfIxjuwYiPjJX8y_DDNzNkbXGhc4kd20hu9mZ7qZtiQHxX0NaamyqG9P0USsFTca9ZJo5GKNdVq-ZdkYXcqEWcIv28cQNyo5rtQ";
  }

  return null;
}
