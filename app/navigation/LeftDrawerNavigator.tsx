import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import CustomDrawerLeft from "../components/LeftCustomDrawerContent";
import Student from "../screens/students/Student";
import useStudentStore from "@/app/store/studentStore";

const Drawer = createDrawerNavigator();

const LeftDrawerNavigator = () => {
  const { student } = useStudentStore();

  const getInitials = (fullName: string) =>
    fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "left",
      }}
      drawerContent={(props) => <CustomDrawerLeft {...props} />}
    >
      <Drawer.Screen
        name="Student"
        component={Student}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#F6F6FA",
            shadowColor: "transparent",
            elevation: 0,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="menu" size={28} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () =>
            student ? (
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#A19FDB",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {getInitials(student.fullName)}
                </Text>
              </View>
            ) : null,
        })}
      />
    </Drawer.Navigator>
  );
};

export default LeftDrawerNavigator;
