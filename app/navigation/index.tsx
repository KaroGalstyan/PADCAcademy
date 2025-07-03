import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

import About from '../screens/about/About';
import DrawerNavigator from './DrawerNavigator';
import SignUp from "../screens/auth/signUp";
import CourseTypeSelect from '../screens/auth/CourseTypeSelect';
import ExamScheduleSelect from '../screens/auth/ExamScheduleSelect';
import FinishSignUp from '../screens/auth/FinishSignUp';
import Login from '../screens/auth/Login';
import AuthGate from '@/app/screens/auth/AuthGate';

export type RootStackParamList = {
	AuthGate: undefined;
	Home: undefined;
	About: undefined;
	SignUp: undefined;
	CourseTypeSelect: undefined;
	ExamScheduleSelect: undefined;
	FinishSignUp: undefined;
	Login: undefined
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
		</Stack.Navigator>
	);
}
