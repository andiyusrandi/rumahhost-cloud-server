/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
        ubuntu: "var(--font-ubuntu)",
      },
      colors: {
        primary: "#FF7D2A",
        secondary: "#377BF6",
        main: "#F1F5FA",
      },
      boxShadow: {
        onPrimary: "0px 4px 8px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
