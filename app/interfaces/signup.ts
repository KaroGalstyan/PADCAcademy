import type { CourseType, EnglishLevelType, OccupationType } from "./types";

export interface ISignUpFormValues {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  occupation: OccupationType;
  countryId: number;
  city: string;
  englishLevel: EnglishLevelType;
  test?: {
    courseType?: CourseType;
    date?: string;
  };
}

export interface ISignUpStore {
  data: ISignUpFormValues;
  setSignUpData: (data: Partial<ISignUpFormValues>) => void;
}
