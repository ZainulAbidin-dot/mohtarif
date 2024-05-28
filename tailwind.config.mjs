/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'grey-mist': '#8AA3A3',
				'grey-mist-h': '#C5B19E',
				'beige': 'rgb(247, 242, 240)',
				'beige-heading': '#C58771',
				'beige-p': '#9E8E7E',
				'beige-btn-fade': '#C5B19E96',
				'grey-p': '#7B736F'
			  },
		},
	},
	plugins: [],
}
