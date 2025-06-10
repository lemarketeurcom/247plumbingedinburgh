/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EFF6',
          100: '#CCDEED',
          200: '#99BDDB',
          300: '#669BC9',
          400: '#337AB7',
          500: '#0F4C81', // Main primary color
          600: '#0C3D67',
          700: '#092E4E',
          800: '#061E34',
          900: '#030F1A',
        },
        secondary: {
          50: '#E6F9F9',
          100: '#CCF3F3',
          200: '#99E7E7',
          300: '#66DBDB',
          400: '#33CFCF',
          500: '#30BFBF', // Main secondary color
          600: '#269999',
          700: '#1D7373',
          800: '#134C4C',
          900: '#0A2626',
        },
        accent: {
          50: '#FFF2EC',
          100: '#FFE5D9',
          200: '#FFCBB3',
          300: '#FFB28D',
          400: '#FF9867',
          500: '#FF7F41', // Main accent color
          600: '#CC6534',
          700: '#994C28',
          800: '#66321B',
          900: '#33190D',
        },
        gray: {
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#C2C2C2',
          400: '#ADADAD',
          500: '#999999',
          600: '#7A7A7A',
          700: '#5C5C5C',
          800: '#3D3D3D',
          900: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 6px rgba(15, 76, 129, 0.2)',
        'floating': '0 8px 16px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};