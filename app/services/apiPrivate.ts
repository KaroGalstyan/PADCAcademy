import axios from "axios";

const apiPrivate = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

let accessToken: string | null = null;

export const setAccessTokenPrivate = (token: string | null) => {
  accessToken = token;
};

apiPrivate.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default apiPrivate;
