/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['EncodeSans', ...defaultTheme.fontFamily.sans],
				antonio: ['Antonio'],
				poppins: ['Poppins'],
				'code-display': ['ShareTech'],
				'ubuntu-mono': ['UbuntuMono'],
				Teko: ['Teko'],
				k2d: ['K2D'],
				josefinsans: ['JosefinSans'],
				redhat: ['RedHat'],
				urbanist: ['Urbanist'],
			},
			keyframes: {
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					}
				}
			},
			animation: {
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.3s ease-out',
				'spin-slow': 'spin 3s linear infinite',
			},
		},
	},
	plugins: [],
}
