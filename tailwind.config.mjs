/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark"
		]
	}
}
