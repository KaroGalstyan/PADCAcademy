import { create } from "zustand";
import { StudentStore } from "../interfaces";

const useStudentStore = create<StudentStore>((set) => ({
  student: null,
  setStudent: (student) => set({ student }),
}));

export default useStudentStore;
