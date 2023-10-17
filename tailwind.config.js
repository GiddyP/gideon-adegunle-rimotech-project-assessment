module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)", "sans-serif"],
			},
			colors: {
				light: "#F3F3F3",
				gray: "#F9F5FA",
				primary: "#A97CB8",
				black: {
					100: "#000",
					200: "#303030",
					300: "#3A3A3A",
					400: "#272727",
				},
				secondary: {
					200: "#F2ECF5",
				},
        orange: "#FB5646",
        lemon: "#1EAEA3"
			},
			animation: {
				"spin-slow": "spin 8s linear infinite",
			},
		},
		screens: {
			xs: "400px",
			slg: "999px", // @media (min-width: 999px)
			xmd: "800px", // @media (min-width: 800px)
			...require("tailwindcss/defaultTheme").screens,
		},
	},
	plugins: [],
};
