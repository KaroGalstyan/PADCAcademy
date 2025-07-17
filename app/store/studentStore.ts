import { create } from "zustand";
import { IStudentStore } from "../interfaces";

const useStudentStore = create<IStudentStore>((set) => ({
  student: null,
  setStudent: (student) => set({ student }),
}));

export default useStudentStore;
