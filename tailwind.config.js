/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
				dancing: ["Dancing Script", "cursive"],
				monserrat: ["Montserrat", "sans-serif"],
				marcellus: ["Marcellus", "serif"],
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
};
