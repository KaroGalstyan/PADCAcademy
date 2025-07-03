import { Ionicons } from "@expo/vector-icons"
import React, { useRef, } from "react"
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Linking } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const { width: screenWidth } = Dimensions.get('window');
const CARD_WIDTH = screenWidth * 0.61;
const CARD_MARGIN = 10;
const VISIBLE_NEXT_CARD = screenWidth * 0.33;

const contactUs = [
	{
		id: "1",
		icon: require("../../../assets/images/support.png"),
		title: "Chat to support",
		description: "We are here to help.",
		email: "support@untitledui.com",
	},
	{
		id: "2",
		icon: require("../../../assets/images/visit-us.png"),
		title: "Visit us",
		description: "Visit our ofiice.",
		email: "View on Google Maps",
		location: "40.7989655,43.8431837",
	},
	{
		id: "3",
		icon: require("../../../assets/images/call-us.png"),
		title: "Call us",
		description: "Mon-Fri from 10:30am to 6:30pm.",
		email: "+(374)94-019-941 ",
	},
]

const priceList = [
	{
		title: "Basic Plan",
		price: "50",
		time: "/1mo",
		features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
		bg: "rgba(161, 159, 219, 0.1)",
		border: "transparent",
	},
	{
		title: "Pro Plan",
		price: "99",
		time: "/1year",
		features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",],
		bg: "#FFFFFF",
		border: "#A19FDB",
	},
	{
		title: "Enterprise Plan",
		price: "199",
		time: "/week",
		features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
		bg: "rgba(161, 159, 219, 0.1)",
		border: "transparent",
	},
]


const data = [
	{
		id: "1",
		title: "Software Engineering",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		image: require("../../../assets/images/soft-eng.png"),
	},
	{
		id: "2",
		title: "Front-End Development",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		image: require("../../../assets/images/front-end.png"),
	},
	{
		id: "3",
		title: "Back-End Development",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		image: require("../../../assets/images/back-end.png"),
	},
	{
		id: "4",
		title: "Automated Quality Assurance (AQA)",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		image: require("../../../assets/images/aqa.png"),
	},
	{
		id: "5",
		title: "DevOps Engineering",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		image: require("../../../assets/images/devops.png"),
	},
]

const HomeScreen = () => {
	const navigation = useNavigation<HomeScreenNavigationProp>();

	const people = [
		{
			id: 1,
			photo: require('../../../assets/images/y.png')
		},
		{
			id: 2,
			photo: require('../../../assets/images/y.png')
		},
		{
			id: 3,
			photo: require('../../../assets/images/y.png')
		}
	];

	const scrollRef = useRef<ScrollView>(null);


	return (
		<SafeAreaView edges={['left', 'right',]}
			style={{ flex: 1, backgroundColor: 'white' }}>
			<ScrollView>
				<View className="px-5 pt-5">
					<View className="mb-5">
						<Text className="font-poppinsBold text-3xl text-black">
							Find your <Text className="text-customPurple">Course</Text> & make sure goal.
						</Text>
					</View>

					<View>
						<Text className="font-poppinsBold text-base text-black">
							Your dream Courses is waiting for you.
						</Text>
					</View>
				</View>

				<View className="w-full h-[346px] rounded-xl overflow-hidden mb-[30px] relative">
					<Image
						source={require("../../../assets/images/bg-img1.png")}
						className="w-full h-full"
						resizeMode="cover"
					/>
				</View>

				<View className="px-5">
					<View className="mb-[50px]">
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.navigate('SignUp')}
							className="rounded-lg overflow-hidden w-full h-[50px]"
						>
							<LinearGradient
								colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								className="w-full h-full flex-row items-center justify-center space-x-2"
							>
								<Text className="text-white font-poppinsBold text-base leading-none">Get Started</Text>
								<Ionicons name="arrow-forward" size={20} color="#fff" />
							</LinearGradient>
						</TouchableOpacity>
					</View>

					<View className="items-center mb-[50px]">
						<Text className="font-poppinsBold text-2xl text-black mb-5">ABOUT</Text>
						<Text className="text-sm/[30px] text-black mb-[30px] text-left">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim...
						</Text>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => navigation.navigate('About')}
							className="rounded-lg overflow-hidden w-full h-[50px]"
						>
							<LinearGradient
								colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								className="w-full h-full flex-row items-center justify-center space-x-2"
							>
								<Text className="text-white font-poppinsBold text-base leading-none">Read More</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>

					<View className="items-center">
						<Text className="font-poppinsBold text-2xl text-black mb-5">COURSES</Text>
					</View>

					<View className="mb-[30px]">
						<Text className="font-inter text-sm/[30px] text-black">
							Our education sistem will give you the perfect solution
						</Text>
					</View>
				</View>
				<View>
					<View className="items-center mb-[30px]">
						<FlatList
							scrollEnabled={false}
							data={data}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={false}
							contentContainerStyle={{ paddingVertical: 20 }}
							renderItem={({ item }) => (
								<View
									className="w-[375px] h-[250px] mb-5"
									style={{
										marginHorizontal: 10,
										shadowColor: "#000",
										shadowOffset: { width: 0, height: 4 },
										shadowOpacity: 0.15,
										shadowRadius: 10,
										elevation: 6,
										borderRadius: 20,
										backgroundColor: "#fff",
									}}
								>
									<View className="flex-1 rounded-[20px] p-5">
										<Image
											source={item.image}
											className="w-[74px] h-[64px] mb-4"
											resizeMode="cover"
										/>
										<Text className="font-bold text-xl text-black mb-2">
											{item.title}
										</Text>
										<Text className="font-inter text-sm text-black">{item.description}</Text>
									</View>
								</View>
							)}
						/>
					</View>
				</View>
				<View className="py-[50px] px-5 bg-[#F8F8FA]">
					<Text className="text-2xl font-poppinsBold text-black mb-6 text-center">
						OUR SUCCESS STORIES
					</Text>
					<Text className="text-sm font-normal text-black mb-6 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur eu ex non blandit.
					</Text>
					<ScrollView
						ref={scrollRef}
						horizontal
						showsHorizontalScrollIndicator={false}
						snapToInterval={CARD_WIDTH + CARD_MARGIN * 2 - VISIBLE_NEXT_CARD}
						decelerationRate="fast"
						contentContainerStyle={{
							paddingLeft: (screenWidth - CARD_WIDTH) / 2,
							paddingRight: (screenWidth - CARD_WIDTH) / 2 - VISIBLE_NEXT_CARD,
						}}
					>
						{people.map((person, index) => (
							<View
								key={person.id}
								style={{
									width: CARD_WIDTH,
									marginRight: CARD_MARGIN,
									marginLeft: index === 0 ? 0 : CARD_MARGIN,
								}}
								className="items-center"
							>
								<Image
									source={person.photo}
									style={{
										width: CARD_WIDTH,
										height: CARD_WIDTH * 1.2,
										borderRadius: 12,
									}}
									resizeMode="cover"
									className="bg-gray-200"
								/>
							</View>
						))}
					</ScrollView>
				</View>
				<View className="px-5">
					<View className="items-center mt-[50px]">
						<Text className="font-poppinsBold text-2xl text-black mb-5">Pricing</Text>
					</View>

					<View className="mb-[50px]">
						<Text className="font-inter text-sm/[30px] text-black">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						</Text>
					</View>
				</View>

				<ScrollView className="bg-white px-5 py-8">
					<View className="space-y-6">
						{priceList.map((item, index) => (
							<View
								key={index}
								className=" h-[324px] rounded-[20px] px-[76px] pt-[30px] pb-[94px] self-center mb-8 items-center"
								style={{
									backgroundColor: item.bg,
									borderColor: item.border,
									borderWidth: item.border !== "transparent" ? 1 : 0,
								}}
							>
								<Text className="text-[20px] font-bold text-black mb-[30px]">{item.title}</Text>
								<View className="flex-row items-baseline mb-[50px]">
									<Text className="text-base font-bold align-top">$</Text>
									<Text className="text-4xl font-bold">{item.price}</Text>
									<Text className="text-xl text-gray-500">{item.time}</Text>
								</View>
								<View className="">
									{item.features.map((feature, idx) => (
										<View key={idx} className="self-start flex-row items-start mb-[15px]">
											<Ionicons
												name="checkmark-outline"
												size={18}
												color="#000000"
												style={{ marginTop: 2, marginRight: 8 }}
											/>
											<Text className="text-base text-gray-700">{feature}</Text>
										</View>
									))}
								</View>
							</View>
						))}
					</View>
				</ScrollView>
				<View>
					<Text className="text-[25px] font-poppinsBold text-black text-center">
						GET IN TOUCH
					</Text>
				</View>
				<View className="w-[353px] h-[97px] rounded-xl relative mx-[30px]">
					<Image
						source={require("../../../assets/images/bg-img2.png")}
						className="absolute top-0 left-0 w-full h-auto min-h-[165px]"
						resizeMode="cover"
					/>
				</View>
				<View className="px-5 mb-[50px]">
					{contactUs.map((item) => (
						<View
							key={item.id}
							className="w-[287px] bg-white rounded-2xl p-5 mb-5 border border-[#D9D9D9] self-center"
						>
							<Image
								source={item.icon}
								className="w-[39px] h-[39px] mb-4"
								resizeMode="contain"
							/>
							<Text className="text-xl font-poppins text-black mb-2">
								{item.title}
							</Text>
							<Text className="text-poppins text-[#A5A5A5] mb-4 leading-6">
								{item.description}
							</Text>

							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => {
									if (item.title === 'Visit us' && item.location) {
										const url = `https://www.google.com/maps?q=${encodeURIComponent(item.location)}`;
										Linking.openURL(url);
									} else if (item.title === 'Call us') {
										const cleanedPhone = item.email.replace(/[^\d+]/g, '');
										Linking.openURL(`tel:${cleanedPhone}`);
									} else if (item.title === 'Chat to support') {
										Linking.openURL(`mailto:${item.email}`);
									} else {
										console.log('Pressed:', item.email);
									}
								}}
								className="border border-gray-300 rounded-full px-4 py-3 bg-white"
							>
								<Text className="text-poppins text-black">{item.email}</Text>
							</TouchableOpacity>
						</View>
					))}
				</View>
				<LinearGradient
					colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					className="w-full pt-[39px] pl-[35px] pr-[28px] pb-[50px] mb-[1px]"
				>
					<View className="items-start mb-8">
						<Image
							source={require('../../../assets/images/padc-footer.png')}
							className="w-[138px] h-[49px] mb-4"
							resizeMode="contain"
						/>
						<Text className="font-poppinsBold text-[30px] text-white text-start mb-2">
							Find your <Text className="text-[#4D7BC1]">Course</Text> & make sure goal.
						</Text>
						<Text className="font-poppins text-[15px] text-white text-center">
							Your dream Courses is waiting for you.
						</Text>
					</View>

					<View className="flex-row justify-between">
						<View>
							<Text className="font-poppinsBold text-white text-[25px] mb-4">Menu</Text>
							<View className="">
								<Text className="font-poppins text-white text-[15px] mb-[11px]">Home</Text>
								<Text className="font-poppins text-white text-[15px] mb-[11px]">About</Text>
								<Text className="font-poppins text-white text-[15px] mb-[11px]">Success stories</Text>
								<Text className="font-poppins text-white text-[15px] mb-[11px]">Courses</Text>
								<Text className="font-poppins text-white text-[15px] mb-[11px]">Contact</Text>
							</View>
						</View>

						<View className="items-start">
							<View className="mb-6 items-start">
								<Text className="font-poppinsBold text-white text-[25px] mb-[18px]">Get in touch</Text>
								<View className="items-start">
									<Text className="font-poppins text-white text-right text-[15px]  mb-[17px]">support@untitledui.com</Text>
									<Text className="font-poppins text-white text-right text-[15px]">+(374)94-019-941</Text>
								</View>
							</View>

							<View>
								<Text className="font-poppinsBold text-white text-[25px] mb-4">Follow us</Text>
								<View className="flex-row space-x-4">
									<TouchableOpacity>
										<Image source={require('../../../assets/images/facebook.png')} className="w-[18px] h-[18px] mr-[11px]" />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={require('../../../assets/images/instagram.png')} className="w-[18px] h-[18px] mr-[11px]" />
									</TouchableOpacity>
									<TouchableOpacity>
										<Image source={require('../../../assets/images/linkedin.png')} className="w-[18px] h-[18px]" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
				</LinearGradient>
				<LinearGradient
					colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					className="w-full py-[10px]"
				>
					<Text className="font-poppins text-white text-center">
						© 2023 PADC LLC All Rights Reserved
					</Text>
				</LinearGradient>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
