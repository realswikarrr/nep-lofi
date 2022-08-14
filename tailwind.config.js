module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "my-bg": "url('/images/bg.webp')",
      }),
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      cursor: {
        default: "url('/images/cursor.png'), default",
        pointer: "url('/images/cursorpointer.png'), pointer",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
