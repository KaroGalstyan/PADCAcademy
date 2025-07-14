import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AuthGate from "@/app/screens/auth/AuthGate";
import About from "../screens/about/About";
import CourseTypeSelect from "../screens/auth/CourseTypeSelect";
import ExamScheduleSelect from "../screens/auth/ExamScheduleSelect";
import FinishSignUp from "../screens/auth/FinishSignUp";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/signUp";
import Pricing from "../screens/pricing/Pricing";
import SubjectDetails from "../screens/students/SubjectDetails";
import DrawerNavigator from "./DrawerNavigator";
import LeftDrawerNavigator from "./LeftDrawerNavigator";
import { Direction } from "../interfaces";

export type RootStackParamList = {
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
  SubjectDetails: { direction: Direction; studentFullName: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AuthGate">
      <Stack.Screen name="AuthGate" component={AuthGate} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CourseTypeSelect" component={CourseTypeSelect} />
      <Stack.Screen name="ExamScheduleSelect" component={ExamScheduleSelect} />
      <Stack.Screen name="FinishSignUp" component={FinishSignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Pricing" component={Pricing} />
      <Stack.Screen name="Students" component={LeftDrawerNavigator} />
      <Stack.Screen name="SubjectDetails" component={SubjectDetails} />
    </Stack.Navigator>
  );
}
