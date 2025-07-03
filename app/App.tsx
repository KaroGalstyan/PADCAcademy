import React from "react"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppNavigator from './navigation';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './utils/i18n';
import "../global.css"

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });


    if (!fontsLoaded) {
        return null;
    }

    return (
        // <I18nextProvider i18n={i18n}>
        <AppNavigator />
        // </I18nextProvider>
    )
}
