import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { ILanguageState } from "../interfaces";

const LANGUAGE_KEY = "appLanguage";

const useLanguageStore = create<ILanguageState>((set) => ({
  language: Constants.expoConfig?.extra?.defaultLocale || "en",

  setLanguage: async (lang) => {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
    set({ language: lang });
  },

  loadLanguage: async () => {
    const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (savedLang) {
      set({ language: savedLang });
    }
  },
}));

export default useLanguageStore;
