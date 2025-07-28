import type { ImageSourcePropType } from "react-native";
import type { RootDrawerParamList } from "./navigation";
import type { CourseType } from "./types";

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
