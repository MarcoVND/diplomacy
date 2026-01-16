/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#f8f605',
  				foreground: '#130800'
  			},
  			secondary: {
  				DEFAULT: '#2c475a',
  				foreground: '#cfd7dd'
  			},
  			background: '#121214',
  			foreground: '#27272a',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			success: {
  				DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
  				foreground: 'rgb(var(--color-success-foreground) / <alpha-value>)'
  			},
  			warning: {
  				DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
  				foreground: 'rgb(var(--color-warning-foreground) / <alpha-value>)'
  			},
  			info: {
  				DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
  				foreground: 'rgb(var(--color-info-foreground) / <alpha-value>)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			toggle: {
  				active: 'rgb(var(--toggle-active) / <alpha-value>)',
  				'active-foreground': 'rgb(var(--toggle-active-foreground) / <alpha-value>)',
  				border: 'rgb(var(--toggle-border) / <alpha-value>)'
  			},
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        ":root": {
          "--color-primary": "0 0 0",
          "--color-secondary": "45 45 45",
          "--color-background": "255 255 255",
          "--color-primary-foreground": "255 255 255",
          "--color-foreground": "0 0 0",
          "--color-popover": "255 255 255",
          "--color-destructive": "239 68 68",
          "--color-success": "34 197 94",
          "--color-warning": "234 179 8",
          "--color-info": "59 130 246",
          "--color-muted": "115 115 115",
          "--toggle-active": "45 45 45",
          "--toggle-border": "229 231 235",
        },
      });
    },
      require("tailwindcss-animate")
],
};
