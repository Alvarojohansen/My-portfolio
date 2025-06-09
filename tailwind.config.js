/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#2d2333",
        thirdty: "#0f172a",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end) 1s 1 normal both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
});
