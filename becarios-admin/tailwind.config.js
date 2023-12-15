/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'brand-input': '#ECECEC',
      'brand-blue': '#1F8FF9',
      'brand-yellow': '#C98200',
      'brand-green': '#324D00',
      'brand-red': '#A93424',
      'brand-black': '#121214',
    },
    backgroundImage: {
      gradient: 'linear-gradient(92deg, #F2B23C -16.2%, #1F8FF9 114.08%)',
      login: "url('./assets/login_img.jpeg')",
    },
    backgroundClip: {
      text: 'text',
    },
    textColor: {
      transparent: 'transparent',
      black: '#121214',
    },
    extend: {},
  },
  plugins: [],
};
