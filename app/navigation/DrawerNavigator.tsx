import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import About from "../screens/about/About";

import CustomDrawerContent from "../components/CustomDrawerContent";
import CourseTypeSelect from "../screens/auth/CourseTypeSelect";
import ExamScheduleSelect from "../screens/auth/ExamScheduleSelect";
import FinishSignUp from "../screens/auth/FinishSignUp";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/signUp";
import Courses from "../screens/courses/Courses";
import HomeScreen from "../screens/home/HomeScreen";
import Pricing from "../screens/pricing/Pricing";
import Students from "../screens/students/Student";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        drawerPosition: "right",
        headerLeft: () => (
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 95, height: 36, marginLeft: 20 }}
            resizeMode="contain"
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginRight: 20 }}
          >
            <Ionicons name="menu" size={24} color="#868686" />
          </TouchableOpacity>
        ),
        headerTitle: "",
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="About" component={About} options={{ headerShown: false }} />
      <Drawer.Screen name="Courses" component={Courses} options={{ headerShown: false }} />
      <Drawer.Screen name="SignUp" component={SignUp} options={{ headerShown: true }} />
      <Drawer.Screen
        name="CourseTypeSelect"
        component={CourseTypeSelect}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        name="ExamScheduleSelect"
        component={ExamScheduleSelect}
        options={{ headerShown: true }}
      />
      <Drawer.Screen name="FinishSignUp" component={FinishSignUp} options={{ headerShown: true }} />
      <Drawer.Screen name="Login" component={Login} options={{ headerShown: true }} />
      <Drawer.Screen name="Pricing" component={Pricing} options={{ headerShown: true }} />
      <Drawer.Screen name="Students" component={Students} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
