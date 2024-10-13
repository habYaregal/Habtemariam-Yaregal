/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          800: '#5B3B16', 
          900: '#4A2F12', 
        },
        redish:{
          500:'#6A2F27'
        },
        pencil:{
          500:'#333333'
        },
        black:{
          500:'#000000'
        },
        neonp:{500: '#9b5de5'},
        neonb:{500: '#00bbf9'},
        neong:{500:'#00f5d4'},
      },
      fontFamily: {
        crafty: ['"Crafty Girls"', 'cursive'],
        crimson: [' "Crimson Pro"', 'serif'],
        lora: [' "Lora"', 'serif'],
        railway:['"Raleway"', 'sans-serif'],
        pirata:['"Pirata One"', 'system-ui'],
        pixel:['"Pixelify Sans"', 'serif'],
        jacky:['"Jacquard 24"', 'system-ui']
      },
      fontSize: {
        '16px': '18px',
        'head': '64px',
        'par':'18px',
        'qoute':'20px'
        },
      height:{
        'all' : '100hv'
      }  
    },
  },
  plugins: [],
}