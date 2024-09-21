/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',
				'neon-blue-start': '#1B9CFC',
				'neon-blue-end': '#55E6C1',
				'card-start': '#901707',
				'card-end' : '#865701',
				'border-blue': '#052af8',
				'border-pink': '#fd05a2',
		
			},
			backgroundImage: theme => ({
				'neon-blue-gradient': 'linear-gradient(90deg, #1B9CFC 0%, #55E6C1 100%)',
			}),
		
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
	  
    },
  },
  variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: ['@tailwindcss/forms'],
}

