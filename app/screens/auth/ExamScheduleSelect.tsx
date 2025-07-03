import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import useSignUpStore from '@/app/store/useSignUpStore';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/navigation';

type ExamScheduleSelectScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ExamScheduleSelect'>;

const ExamScheduleSelect = () => {
	const navigation = useNavigation<ExamScheduleSelectScreenNavigationProp>();
	const { setSignUpData } = useSignUpStore();

	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [time, setTime] = useState<Date>(new Date());
	const [showPicker, setShowPicker] = useState(false);

	const onConfirm = () => {
		if (!selectedDate) return;

		const [year, month, day] = selectedDate.split('-').map(Number);
		const combinedDateTime = new Date(year, month - 1, day, time.getHours(), time.getMinutes());

		setSignUpData({ 
			test: {
				date: combinedDateTime.toISOString(),
			},
		});

		console.log('Selected datetime:', combinedDateTime.toISOString());
		navigation.navigate('FinishSignUp')
	};

	return (
		<ScrollView className="flex-1 bg-[#F8F8F8] px-[15px] pt-10">
			<Text className="text-[30px] px-[45px] font-poppinsBold text-black text-center mb-[40px]">
				Schedule to take the exam
			</Text>

			<Calendar
				onDayPress={(day) => setSelectedDate(day.dateString)}
				markedDates={selectedDate ? { [selectedDate]: { selected: true, selectedColor: '#A09DD9' } } : {}}
				theme={{
					backgroundColor: '#ffffff',
					calendarBackground: '#ffffff',
					textSectionTitleColor: '#000',
					selectedDayBackgroundColor: '#A09DD9',
					selectedDayTextColor: '#ffffff',
					todayTextColor: '#7596CF',
					dayTextColor: '#000000',
					textDisabledColor: '#d9e1e8',
					monthTextColor: '#000',
					arrowColor: '#7596CF',
				}}
			/>

			<View className="h-[1px] bg-gray-300 mt-[35px] mb-[20px] mx-[5px]" />

			<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }} className="text-[20px] font-poppinsSemiBold mb-[17px] mx-[5px]">Pick a time</Text>

			<TouchableOpacity
				onPress={() => setShowPicker(true)}
				className="border border-gray-300 rounded-xl px-4 py-4 mb-[57px]"
			>
				<View className="flex-row items-center ml-[10px]">
					<Ionicons name="time-outline" size={24} color="gray" />
					<Text className="text-[14px] text-gray-500 ml-[15px]">Time</Text>
				</View>

				<View className="flex-row items-center justify-between">
					<Text className="text-black text-[16px] ml-[49px]">
						{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
					</Text>
					<Ionicons name="chevron-down" size={24} color="gray" />
				</View>
			</TouchableOpacity>

			{showPicker && (
				<DateTimePicker
					value={time}
					mode="time"
					display={Platform.OS === 'ios' ? 'spinner' : 'default'}
					onChange={(event, selected) => {
						if (event.type === 'set' && selected) {
							setTime(selected);
						}
						setShowPicker(false);
					}}
				/>
			)}

			<TouchableOpacity
				onPress={onConfirm}
				disabled={!selectedDate}
				className={`rounded-xl overflow-hidden h-[50px] mb-12 ${!selectedDate ? 'opacity-50' : ''}`}
			>
				<LinearGradient
					colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					className="w-full h-full flex-row items-center justify-center"
				>
					<Text className="text-white font-poppinsBold text-[16px]">Confirm</Text>
				</LinearGradient>
			</TouchableOpacity>
		</ScrollView>
	);
};

export default ExamScheduleSelect;
