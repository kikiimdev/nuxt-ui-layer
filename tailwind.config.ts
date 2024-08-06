import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      // colors: {
      //   background: 'white'
      // }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      //
    ],
  },
} satisfies Config;
