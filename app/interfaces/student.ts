import type { IChapter, ILecturer } from "./course";

export interface IStudentStore {
  student: Pick<IStudent, "fullName"> | null;
  setStudent: (student: Pick<IStudent, "fullName">) => void;
}

export interface ISubject {
  name: string;
  chapters: IChapter[];
  lecturer?: ILecturer;
}

export interface IDirection {
  name: string;
  shortDescription: string;
  completedTaskCount: number;
  totalTaskCount: number;
  subjects: ISubject[];
  lecturer?: ILecturer;
}

export interface IStudentDirection {
  direction: IDirection;
}

export interface IStudent {
  fullName: string;
  directions: IStudentDirection[];
}
