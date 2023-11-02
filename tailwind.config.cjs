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
				principal: '#3f2b2f',
				secundario: '#6c5a5d',
				fondo2: '#9b8d8f',
				titulos: '#d8d1ca'
		
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
	
}