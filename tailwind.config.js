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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
