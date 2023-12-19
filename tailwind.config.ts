import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "	hsl(42, 80%, 98%)",
        "beige-darker": "hsl(39, 38%, 95%)",
        "beige-dakest": "	hsl(26, 13%, 65%)",
        darkgreen: "hsl(186, 50%, 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
