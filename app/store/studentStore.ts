import { create } from "zustand";

type Student = {
  fullName: string;
};

type StudentStore = {
  student: Student | null;
  setStudent: (student: Student) => void;
};

const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  setStudent: (student) => set({ student }),
}));

export default useStudentStore;
