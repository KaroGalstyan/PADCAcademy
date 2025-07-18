import { ImageSourcePropType } from "react-native";

export type OccupationType = "student" | "employee" | "other";
export type CourseType = "online" | "offline";
export type EnglishLevelType =
  | "A1 (Elementary)"
  | "A2 (Pre Intermediate)"
  | "B1 (Intermediate)"
  | "B2 (Upper Intermediate)"
  | "C1 (Advanced)"
  | "C2 (Proficient)";

export interface ICountry {
  id: number;
  name: string;
}

export type IChapterItem = {
  title: string;
};

export interface IChapter {
  name: string;
  tasks: IChapterItem[];
  miniProjects: IChapterItem[];
  lectures: IChapterItem[];
}

export interface ISubject {
  name: string;
  chapters: IChapter[];
  lecturer?: {
    fullName: string;
  };
}

export interface IDirection {
  name: string;
  shortDescription: string;
  completedTaskCount: number;
  totalTaskCount: number;
  subjects: ISubject[];
  lecturer?: {
    fullName: string;
  };
}

export interface IStudent {
  fullName: string;
  directions: { direction: IDirection }[];
}

export interface IStudentStore {
  student: Pick<IStudent, "fullName"> | null;
  setStudent: (student: Pick<IStudent, "fullName">) => void;
}

export interface IContactItemBase {
  id: string;
  icon: ImageSourcePropType;
  title: string;
  description: string;
}

export interface IContactSupport extends IContactItemBase {
  type: "support";
  email: string;
}

export interface IContactPhone extends IContactItemBase {
  type: "phone";
  phone: string;
}

export interface IContactLocation extends IContactItemBase {
  type: "location";
  location: string;
}

export type ContactItem = IContactSupport | IContactPhone | IContactLocation;

export interface IPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  loading?: boolean;
  error?: string | null;
}

export interface IPricingCard {
  title: string;
  price: string;
  time: string;
  features: string[];
  bg: string;
  border: string;
  type: "gradient" | "outlined";
}

export interface IPricingCardProps {
  item: IPricingCard;
  onPress: () => void;
  loading: boolean;
}

export interface IPricingListProps {
  priceList: IPricingCard[];
  onGetStarted: (price: string) => void;
  loading: boolean;
}

export interface ILanguageState {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  loadLanguage: () => Promise<void>;
}

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

export interface IMenuItem {
  label: string;
  icon: number;
  route: keyof RootDrawerParamList;
}

export interface ICourseOption {
  key: CourseType;
  title: string;
  icon: ImageSourcePropType;
  points: string[];
}

export type RootDrawerParamList = {
  AuthGate: undefined;
  Home: undefined;
  About: undefined;
  SignUp: undefined;
  CourseTypeSelect: undefined;
  ExamScheduleSelect: undefined;
  FinishSignUp: undefined;
  Login: undefined;
  Pricing: undefined;
  Students: undefined;
  Courses: undefined;
  SubjectDetails: {
    direction: IDirection;
    studentFullName: string;
  };
};

export type ISignUpPayload = Omit<ISignUpFormValues, "test">;
