/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				darkblue: "hsl(240, 38%, 20%)",
				lightblue: "hsl(240, 18%, 77%)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
