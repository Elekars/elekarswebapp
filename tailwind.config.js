/** @type {import('tailwindcss').Config} */
module.exports = {
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
        bannerbg: "url('/punch.jpg')",
        Homebg: "url('/bg.png')",
        Formbg: "url('/evbg.jpg')",
        Urgent: "url('/urgent.jpg')",
        Fare: "url('/farebg.jpg')",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        colorChange: {
          "0%, 100%": { color: "#5c8ffc" },
          "50%": { color: "#33ae60" },
        },
      },
      animation: {
        typing: "typing 2s steps(10) infinite, blink .75s step-end infinite",
        colorChange: "colorChange 3s infinite",
      },
    },
  },
  plugins: [],
};
