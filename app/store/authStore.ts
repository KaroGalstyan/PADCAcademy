import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import refreshAccessToken from "@/app/services/authService";
import { setAccessTokenPrivate } from "@/app/services/apiPrivate";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  rememberMe: boolean;
  setTokens: (accessToken: string, refreshToken: string, rememberMe: boolean) => Promise<void>;
  clearTokens: () => Promise<void>;
  restoreSession: () => Promise<boolean>;
}

const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  rememberMe: false,

  setTokens: async (accessToken, refreshToken, rememberMe) => {
    set({ accessToken, refreshToken, rememberMe });
    setAccessTokenPrivate(accessToken);

    if (rememberMe) {
      await SecureStore.setItemAsync("accessToken", accessToken);
      await SecureStore.setItemAsync("refreshToken", refreshToken);
    }
  },

  clearTokens: async () => {
    set({ accessToken: null, refreshToken: null, rememberMe: false });
    await SecureStore.deleteItemAsync("accessToken");
    await SecureStore.deleteItemAsync("refreshToken");
  },

  restoreSession: async () => {
    const storedRefreshToken = await SecureStore.getItemAsync("refreshToken");
    if (!storedRefreshToken) return false;

    try {
      const { accessToken, refreshToken: newRefreshToken } =
        await refreshAccessToken(storedRefreshToken);

      set({ accessToken, refreshToken: newRefreshToken, rememberMe: true });
      setAccessTokenPrivate(accessToken);
      await SecureStore.setItemAsync("accessToken", accessToken);
      await SecureStore.setItemAsync("refreshToken", newRefreshToken);

      return true;
    } catch (err) {
      console.warn("Failed to restore session", err);
      return false;
    }
  },
}));

export default useAuthStore;
