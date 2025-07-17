import { create } from "zustand";
import { ISignUpStore } from "../interfaces";

const useSignUpStore = create<ISignUpStore>((set) => ({
  data: {
    fullName: "",
    email: "",
    phone: "",
    university: "",
    faculty: "",
    occupation: "student",
    countryId: 0,
    city: "",
    englishLevel: "A1 (Elementary)",
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
