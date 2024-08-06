/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "scaffoldEth",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        scaffoldEth: {
          primary: "#ff904c",
          "primary-content": "#FFFFFF",
          secondary: "#fe9144",
          "secondary-content": "#FFFFFF",
          accent: "#ff904c",
          "accent-content": "#FFFFFF",
          neutral: "#212638",
          "neutral-content": "#FFFFFF",
          "base-100": "#000000",
          "base-200": "#F9FBFF",
          "base-300": "#DAE8FF",
          "base-content": "#FFFFFF",
          info: "#FF4500",
          success: "#FF6347",
          warning: "#FFA500",
          error: "#B22222",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
        },
      },
    ],
  },
  theme: {
    // Extend Tailwind classes (e.g. font-bai-jamjuree, animate-grow)
    extend: {
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
