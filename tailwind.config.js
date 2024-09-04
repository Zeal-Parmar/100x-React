/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      "blue-default":"#1D9BF0",
      "blue-hover":"#1871CA",
      "blue-disabled":"#1E5D87",
      "Blue-wash":"#75BEEF", // (20% opacity)
      "Button-stroke":"#546A7A",
      "Searchbar-fill":"#16181C",
      "Card-fill":"#16181C",
      "Success":"#00BE74",
      "Error":"#8B141A",
      "Neutral/50":"#F9F9F9",
      "Neutral/100":"#F4F4F4",
      "Neutral/200":"#E4E4E4",
      "Neutral/300":"#D3D3D3",
      "Neutral/400":"#A2A2A2",
      "Neutral/500":"#737373",
      "Neutral/600":"#525252",
      "Neutral/700":"#404040",
      "Neutral/800":"#262626",
      "Neutral/900":"#171717",
      "Neutral/950":"#0A0A0A",
      "Neutral/1000":"#000000",
    },
    spacing:{
      25: "6.25rem",
    },
    fontFamily: {
      "px-regular":"Inter",
    },  
    },
  fontSize:{
    "3.5xl": ["1.938rem", { lineHeight: "2.5rem" }],
        "2.5xl": ["1.625rem", { lineHeight: "2rem" }],
        lg3: ["1.188rem", { lineHeight: "1rem" }],
        lg2: ["1.063rem", { lineHeight: "1rem" }],
        sm2: ["0.938rem", { lineHeight: "0.75rem" }],
        xxs: ["0.625rem", { lineHeight: "0.75rem" }],
  },
  
  },
  plugins: [],
}

