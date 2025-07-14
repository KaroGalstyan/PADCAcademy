export type OccupationType = "student" | "employee" | "other";

export type ICourseType = "online" | "offline";

export type Country = {
  id: number;
  name: string;
};

type Lecturer = { fullName: string };

type Chapter = {
  tasks: { fullName: string }[];
  miniProjects: { fullName: string }[];
  lectures: Lecturer[];
};

export type Subject = {
  chapters: Chapter[];
  lecturer?: Lecturer;
  name: string;
};

export type Direction = {
  name: string;
  completedTaskCount: number;
  totalTaskCount: number;
  shortDescription: string;
  subjects: Subject[];
  lecturer?: Lecturer;
};

export type DirectionWrapper = { direction: Direction };

export type Student = {
  fullName: string;
  directions: DirectionWrapper[];
};

export type StudentFStore = {
  fullName: string;
};

export type StudentStore = {
  student: StudentFStore | null;
  setStudent: (student: StudentFStore) => void;
};

export type ChapterDetails = {
  name: string;
  tasks: { title: string }[];
  lectures: { title: string }[];
  miniProjects: { title: string }[];
};

export type SubjectDetails = {
  name: string;
  chapters: ChapterDetails[];
  lecturer?: { fullName: string };
};

export type DirectionDetails = {
  name: string;
  shortDescription: string;
  lecturer?: { fullName: string };
  subjects: SubjectDetails[];
};

export type ContactItem =
  | {
      id: string;
      type: "support";
      icon: any;
      title: string;
      description: string;
      email: string;
    }
  | {
      id: string;
      type: "location";
      icon: any;
      title: string;
      description: string;
      email: string;
      location: string;
    }
  | {
      id: string;
      type: "phone";
      icon: any;
      title: string;
      description: string;
      email: string;
    };

export type PaymentModalProps = {
  visible: boolean;
  onClose: () => void;
  countries: { id: string | number; name: string }[];
  loading: boolean;
  error: string | null;
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  cardNumber: string;
  setCardNumber: (val: string) => void;
  expiration: string;
  setExpiration: (val: string) => void;
  cvc: string;
  setCvc: (val: string) => void;
  formatCardNumber: (text: string) => string;
  formatExpiration: (text: string) => string;
  onConfirm: () => void;
};

export type PricingCardProps = {
  item: {
    title: string;
    price: string;
    time: string;
    features: string[];
    bg: string;
    border: string;
    type: "gradient" | "outlined";
  };
  onPress: () => void;
};

export type PricingListProps = {
  priceList: {
    title: string;
    price: string;
    time: string;
    features: string[];
    bg: string;
    border: string;
    type: "gradient" | "outlined";
  }[];
  onGetStarted: () => void;
};

export type LanguageState = {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  loadLanguage: () => Promise<void>;
};

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

export type SignUpStore = {
  data: SignUpFormValues;
  setSignUpData: (data: Partial<SignUpFormValues>) => void;
};

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
  SubjectDetails: { direction: Direction; studentFullName: string };
};

export interface IMenuItem {
  label: string;
  icon: number;
  route: keyof RootDrawerParamList;
}

export type Options = {
  key: ICourseType;
  title: string;
  icon: any;
  points: string[];
};

export default interface ISignUpPayload {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  occupation: OccupationType;
  countryId: number;
  city: string;
  englishLevel:
    | "A1 (Elementary)"
    | "A2 (Pre Intermediate)"
    | "B1 (Intermediate)"
    | "B2 (Upper Intermediate)"
    | "C1 (Advanced)"
    | "C2 (Proficient)";
}
