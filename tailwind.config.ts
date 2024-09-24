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
                main: '#248FE9',
                gray: '#EAECEE',
                black: '#000',
                white: '#fff',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                '2xl': '1152px',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
