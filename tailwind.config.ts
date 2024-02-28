import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'gray1':'#212731',
        'grayhead':'#2C384A',
        'graynav':'#D1D6DA',
        'grayline':'#E1E4E6',
        'graytext':'#4B5665',
        'grayicon':'#626E79',
        'btnblue':'#1B88F4',
        'graysign':'#5C6874',
        'bluetext':'#074786',
        'lightblue':'#F3F9FF',
        'lightgray':'#F2F4F7',
        'lightred':'#EF4C5D',
        'pricegray':'#9FA9B3',
        'footergray':'#B6BDC4',
        'lightyellow':'#FFF4ED',
        'ticklightblue':'#EBF5FF',
        'tickdarkblue':'#0855A1',
        'lightbluetext':'#074786',

      },
      
    },
    
  },
  plugins: [],
};
export default config;
