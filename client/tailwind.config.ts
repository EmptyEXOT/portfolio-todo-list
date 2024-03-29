/** @type {import('tailwindcss').Config} */
import {Config} from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

