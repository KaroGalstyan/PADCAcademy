import { create } from "zustand";

type SignUpFormValues = {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  occupation: string;
  countryId: number;
  city: string;
  englishLevel: string;
  test?: {
    courseType?: "online" | "offline";
    date?: string;
  };
};

type SignUpStore = {
  data: SignUpFormValues;
  setSignUpData: (data: Partial<SignUpFormValues>) => void;
};

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
