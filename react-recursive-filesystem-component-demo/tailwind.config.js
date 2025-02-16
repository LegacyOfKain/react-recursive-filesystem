import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.css",
    "node_modules/react-recursive-filesystem-component/*.{js,ts,jsx,tsx,mdx}", // Added this
  ],
  plugins: [forms],
};
