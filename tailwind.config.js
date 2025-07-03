/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", './components/**/*.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}',],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins_400Regular'],
        poppinsBold: ['Poppins_700Bold'],
        poppinsSemiBold: ['Poppins_600SemiBold'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        customPurple: '#A19FDB',
      },
    },
  },
  plugins: [],
}