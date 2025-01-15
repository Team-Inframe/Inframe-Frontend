/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  safelist: [
    "Headline_B",
    "Headline_L",
    "Body_normal_M",
    "Body_reading_M",
    "Label_M",
    "Label_L",
    "Caption_normal_M",
    "Caption_reading_L",
  ],
  theme: {
    extend: {
      screens: {
        "iphone-14pro": "393px", // iPhone 14 Pro 크기
      },
      height: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      minHeight: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      colors: {
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",

        syscolor: {
          SystemPurple1: "#8761D2",
          SystemPurple2: "#B37DDF",
          SystemWhite: "#FFFFFF",
          SystemBlack: "#000000",
          SystemGray: "#999999",
          SystemLightGray: "#E6E6E6",
        },
      },
      fontFamily: {
        pretendard: ["pretendard"],
      },
    },
  },
  plugins: [],
};
