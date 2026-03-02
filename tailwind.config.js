/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#154D3D", // Deep Forest
        secondary: "#CCBDA9", // Warm Sand
        dark: "#1E1916",
        light: "#FBF8F2",
        // Supporting palette
        "dark-100": "#000000",
        "dark-200": "#1E1916",
        "dark-300": "#2F2820",
        "dark-400": "#171311",
        "dark-500": "#42312A",
        "dark-600": "#453D32",
        "dark-700": "#0B2B22",
        "dark-800": "#07241C",
        "light-100": "#FFFFFF",
        "light-200": "#FBF8F2",
        "light-300": "#F8F2E7",
        "light-400": "#E5D6C2",
        "light-500": "#908271", // Muted taupe from palette
        "light-600": "#F0F0F0",
        "light-700": "#FAF7F1",
        "accent-mint": "#C6FFEF",
      },
      fontFamily: {
        'brother-1816': ["'Brother 1816'", "sans-serif"],
        sans: ["'Brother 1816'", "sans-serif"], // Default sans
      },
      backgroundImage: {
        'grain': "url('/grain.png')", // Placeholder for grain texture
      },
      cursor: {
        'none': 'none',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
