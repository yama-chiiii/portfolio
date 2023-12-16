//import range from "lodash/range";
import type { Config } from "tailwindcss";

const path = require("path");
const range = require("lodash/range");

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                px: "1px",
                ...range(1, 800).reduce((acc: { [x: string]: string }, i: string | number) => {
                    acc[i] = `${i}px`;
                    return acc;
                }, {}),
            },
            colors: {
                "light-pink": "#FFE8FD",
                "vivid-pink": "#FF45FD",
                "red-pink": "#FF66B4",
                "light-blue": "#C7F4F6",
                "light-yellow": "#FDFFB0",
                "light-green": "#C7F6CF",
                "light-purple": "#E5C7F6",
                "normal-purple": "#B873FE",
                "purple-pink": "#CF5CE2",
            },
            boxShadow: {
                pink: "28px 28px 1px 2px rgba(255, 69, 253, .9)",
            },
        },
        fontFamily: {
            Dot: ["DotGothic16", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
