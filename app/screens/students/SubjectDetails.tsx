import React, { useState, useLayoutEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

type Chapter = {
  name: string;
  tasks: { title: string }[];
  lectures: { title: string }[];
  miniProjects: { title: string }[];
};

type Subject = {
  name: string;
  chapters: Chapter[];
  lecturer?: { fullName: string };
};

type Direction = {
  name: string;
  shortDescription: string;
  lecturer?: { fullName: string };
  subjects: Subject[];
};

const SubjectDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { direction, studentFullName } = route.params as {
    direction: Direction;
    studentFullName: string;
  };

  const chapter = direction.subjects[0]?.chapters || [];

  const totalTasks = chapter.reduce((sum, ch) => sum + (ch.tasks?.length || 0), 0);
  const totalLectures = chapter.reduce((sum, ch) => sum + (ch.lectures?.length || 0), 0);
  const totalMini = chapter.reduce((sum, ch) => sum + (ch.miniProjects?.length || 0), 0);
  const totalFiles = totalTasks + totalLectures + totalMini;

  const [expanded, setExpanded] = useState<number | null>(null);

  const initials = studentFullName
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerRight: () => (
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
          <Text style={{ color: "white", fontWeight: "bold" }}>{initials}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, initials]);

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-2">{direction.subjects[0]?.name}</Text>
      <Text className="text-sm text-gray-500 mb-1">Files: {totalFiles}</Text>
      <Text className="text-sm text-gray-500 mb-1">
        Lecturer:{" "}
        {direction.subjects?.[0]?.lecturer?.fullName || direction.lecturer?.fullName || "Unknown"}
      </Text>
      <Text className="text-base text-gray-700 mt-3 mb-4">{direction.shortDescription}</Text>

      <View className="h-[1px] bg-gray-300 my-4" />

      <Text className="text-base font-semibold mb-2">
        Step: {totalLectures} Lecture • {totalTasks} Tasks • {totalMini} Mini Project
      </Text>

      {chapter.map((ch, idx) => (
        <View key={idx} className="mb-3">
          <TouchableOpacity
            onPress={() => setExpanded(expanded === idx ? null : idx)}
            className="bg-[#F0F0F0] px-4 py-3 rounded-md"
          >
            <Text className="font-semibold">
              Chapter {idx + 1}: {ch.name}
            </Text>
          </TouchableOpacity>

          {expanded === idx && (
            <View className="pl-4 mt-2 space-y-2">
              {ch.lectures.map((l, i) => (
                <Text key={`l-${i}`} className="text-sm text-blue-600">
                  📘 Lecture: {l.title}
                </Text>
              ))}
              {ch.tasks.map((t, i) => (
                <Text key={`t-${i}`} className="text-sm text-green-600">
                  ✅ Task: {t.title}
                </Text>
              ))}
              {ch.miniProjects.map((m, i) => (
                <Text key={`m-${i}`} className="text-sm text-purple-600">
                  🚀 Mini Project: {m.title}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default SubjectDetails;
