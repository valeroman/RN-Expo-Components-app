import { Colors } from './constants/Colors';
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          text: Colors.light.text,
          background: Colors.light.background,
          neonGreen: Colors.light.neonGreen,
          inputBorder: Colors.light.inputBorder,
          border: Colors.light.border,
          
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          text: Colors.dark.text,
          background: Colors.dark.background,
          neonGreen: Colors.dark.neonGreen,
          inputBorder: Colors.dark.inputBorder,
          border: Colors.dark.border,
        },
      }

    },
  },
  plugins: [],
}