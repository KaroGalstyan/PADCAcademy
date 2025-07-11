import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import api from "@/app/services/apiPrivate";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import useStudentStore from "@/app/store/studentStore";

type StudentsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Students">;

type Lecturer = { fullName: string };
type Chapter = {
  tasks: any[];
  miniProjects: any[];
  lectures: any[];
};
type Subject = {
  chapters: Chapter[];
  lecturer?: Lecturer;
  name: string;
};
export type Direction = {
  name: string;
  completedTaskCount: number;
  totalTaskCount: number;
  shortDescription: string;
  subjects: Subject[];
  lecturer?: Lecturer;
};
type DirectionWrapper = { direction: Direction };
type Student = {
  fullName: string;
  directions: DirectionWrapper[];
};

const Students = () => {
  const navigation = useNavigation<StudentsScreenNavigationProp>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const { setStudent: setStudentStore } = useStudentStore();

  useEffect(() => {
    api
      .get("/students")
      .then((res) => {
        setStudent(res.data);
        setStudentStore({ fullName: res.data.fullName }); // <== вот это добавь
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [setStudentStore]);

  // const getInitials = (fullName: string) => {
  // 	const parts = fullName.split(' ');
  // 	return parts.map((n) => n[0]).join('').toUpperCase();
  // };

  // const openDrawer = () => {
  // 	const parent = navigation.getParent();
  // 	if (parent?.getState().type === 'drawer') {
  // 		parent.dispatch(DrawerActions.openDrawer());
  // 	}
  // };

  const calculateProgress = (direction: Direction) => {
    const { completedTaskCount, totalTaskCount } = direction;
    if (!totalTaskCount) return 0;
    return Math.round((completedTaskCount / totalTaskCount) * 100);
  };

  if (loading || !student) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#A19FDB" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-[#F6F6FA] pt-10 pb-16">
      <View className="px-5">
        <View className="mb-6">
          <TextInput
            placeholder="Search"
            className="border border-gray-300 rounded-md px-4 py-3 bg-white"
          />
        </View>
      </View>
      <LinearGradient
        colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-xl px-5 py-6 mb-6 flex-row justify-between items-center"
      >
        <View className="flex-1 mr-4">
          <Text className="text-white text-lg font-semibold mb-2">
            Welcome back, {student.fullName.split(" ")[0]}
          </Text>
          <Text className="text-white text-sm leading-relaxed">
            You have learned 60% of your goals this week. Keep it up and improve your progress!
          </Text>
        </View>
        <Image
          source={require("../../../assets/images/learn.png")}
          style={{ width: 107, height: 87 }}
        />
      </LinearGradient>
      <View className="px-5">
        {student.directions.map((dirObj: any, idx: number) => {
          const dir = dirObj.direction;
          const subject: Subject = dir.subjects[0];
          const progress = calculateProgress(dir);
          const chapter = subject?.chapters?.[0];
          const filesCount =
            (chapter?.tasks?.length || 0) +
            (chapter?.miniProjects?.length || 0) +
            (chapter?.lectures?.length || 0);
          const lecturer = subject?.lecturer?.fullName || dir?.lecturer?.fullName || "Unknown";

          return (
            <View key={idx} className="mb-6">
              <Text className="text-lg font-bold text-black mb-3">{dir.name}</Text>
              <View className="flex-row items-start border border-gray-200 rounded-xl p-4 mb-4 bg-white">
                <Image
                  source={require("../../../assets/images/aqa.png")}
                  style={{ width: 60, height: 50, marginRight: 20 }}
                />

                <View className="flex-1">
                  <Text className="text-[18px] font-bold text-black mb-1">{subject.name}</Text>

                  <Text className="text-xs text-black mb-1">Progress</Text>
                  <View className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <View
                      style={{ width: `${progress}%` }}
                      className="h-full bg-[#A19FDB] rounded-full"
                    />
                  </View>

                  <Text className="text-xs text-black mb-1">Files: {filesCount}</Text>
                  <Text className="text-xs text-black mb-1">Lecturer: {lecturer}</Text>
                </View>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("SubjectDetails", {
                      direction: dir,
                      studentFullName: student.fullName,
                    })
                  }
                  className="w-8 h-8 rounded-full bg-[#A19FDB] justify-center items-center mt-2"
                >
                  <Ionicons name="chevron-forward" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Students;
