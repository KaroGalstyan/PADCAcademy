import axios from "axios";
import useAuthStore from "@/app/store/authStore";

const apiPrivate = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});

apiPrivate.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default apiPrivate;
