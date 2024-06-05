/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "gradient-custom": "linear-gradient(135deg, #1A2E39, #131A2C)",
      }),
      colors: {
        "primary-color": "#2D9F89",
      },
    },
  },
  plugins: [],
};
