/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#001C30",
        primary: "#176B87",
        "primary-light": "#64CCC5",
        "primary-lighter": "#BAFAFA4f",
      },
    },
  },
  plugins: [],
};
