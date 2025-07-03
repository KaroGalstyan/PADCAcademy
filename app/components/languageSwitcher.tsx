// import React, { useEffect } from 'react';
// import { View, Text, Pressable } from 'react-native';
// import { useTranslation } from 'react-i18next';
// import useLanguageStore from '@/app/store/languageStore';

const LanguageSwitcher = () => {
	// const { i18n } = useTranslation();
	// const language = useLanguageStore((state) => state.language);
	// const setLanguage = useLanguageStore((state) => state.setLanguage);
	// const loadLanguage = useLanguageStore((state) => state.loadLanguage);

	// useEffect(() => {
	// 	loadLanguage();
	// }, [loadLanguage]);

	// useEffect(() => {
	// 	i18n.changeLanguage(language);
	// }, [language, i18n]);


	// const toggleLanguage = () => {
	// 	const newLang = language === 'en' ? 'ru' : 'en';
	// 	console.log("🔄 Переключение языка на:", newLang);
	// 	setLanguage(newLang);
	// };

	// return (
	// 	<View className="absolute top-14 right-5 z-50">
	// 		<Pressable
	// 			onPress={toggleLanguage}
	// 			className="bg-blue-600 px-4 py-2 rounded-lg"
	// 		>
	// 			<Text className="text-white font-bold">
	// 				{language === 'en' ? 'EN' : 'RU'}
	// 			</Text>
	// 		</Pressable>
	// 	</View>
	// );
};

export default LanguageSwitcher;
