/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				White: "hsl(0, 0%, 100%)",
				Grey: "hsl(0, 0%, 50%)",
				Black: "hsl(0, 0%, 7%)",
				Yellow: "hsl(47, 88%, 63%)"
			},
			fontSize: {
				paragraph: '16px'
			},
			fontFamily: {
				Figtree: ['Figtree']
			}
		},
	},
	plugins: [],
};
