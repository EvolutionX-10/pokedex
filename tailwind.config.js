/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'solid': ['pokemon-solid'],
				'hollow': ['pokemon-hollow'],
			}
		},
	},
	plugins: [],
};
