/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
      fontFamily: {
        pretendard: ["pretendard"],
      },
    },
  },
  plugins: [],
};
