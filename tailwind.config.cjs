/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				fondo: '#ece8e4',
				botones: '#3f2b2f',
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
	
}