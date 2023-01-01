/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          text: '#826A0B',
          primary: '#DDB624',
        },
        gray: {
          dark: '#535A60',
          text: '#9199a1',
          light: '#babfc4', 
        },
        blue: {
          text: '#0077CC',
          light: '#CFEAFE',
          footer:' #232629',
          border: '#7aa7c7',
          button: '#e1ecf4',
          active: '#a3cae5',
        },
        red: {
          dark: '#942121',
          text: '#AC2726',
          light: '#F9D3D7',
        },
        orange: {
          text: '#F2720C',
          dark: '#BD5C00',
          primary: '#F48024',
        },
        green: {
          text: '#45A163',
          light: '#5EBA7D',
          primary: '#3D8F58',
          frame: '#48A868',
        },
        black: {
          text: '#3C4146',
        },
      },
    },
  },
  plugins: [],
};
