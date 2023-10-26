import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['winter', 'dark',{
      mytheme: {
      
"primary": "#1e40af",
      
"secondary": "#f29bcb",
      
"accent": "#86198f",
      
"neutral": "#1e1d2b",
      
"base-100": "#3b4045",
      
"info": "#9fbcdf",
      
"success": "#145747",
      
"warning": "#d8a713",
      
"error": "#f34982",
      },
    },]
  }
}
export default config
