/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  fontFamily: {
    'sans' : ['ui-sans-sherif', 'Montserrat']
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
