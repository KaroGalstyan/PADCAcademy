import { create } from "zustand";
import type { IStudentStore } from "../interfaces/student";

const useStudentStore = create<IStudentStore>((set) => ({
  student: null,
  setStudent: (student) => set({ student }),
}));

export default useStudentStore;
