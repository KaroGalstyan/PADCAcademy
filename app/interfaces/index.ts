export type OccupationType = "student" | "employee" | "other";

export type ICourseType = "online" | "offline";

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
