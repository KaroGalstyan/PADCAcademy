import type { ISignUpFormValues } from "./signup";
import type { IDirection } from "./student";

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
