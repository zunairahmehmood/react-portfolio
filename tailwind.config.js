/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f2c",
        cyan: "#00f5ff",
        grayLight: "#e5e5e5",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}
