import { create } from "zustand";
import { SignUpStore } from "../interfaces";

const useSignUpStore = create<SignUpStore>((set) => ({
  data: {
    fullName: "",
    email: "",
    phone: "",
    university: "",
    faculty: "",
    occupation: "",
    countryId: 0,
    city: "",
    englishLevel: "",
    test: {},
  },
  setSignUpData: (newData) =>
    set((state) => ({
      data: {
        ...state.data,
        ...newData,
        test: {
          ...state.data.test,
          ...newData.test,
        },
      },
    })),
}));

export default useSignUpStore;
