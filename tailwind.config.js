/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        adobe: {
          bg: '#0b0c10',         // Dark background ala Adobe Spectrum
          card: '#16181e',       // Card background
          cardHover: '#21242e',  // Hover card
          accent: '#fa0f00',     // Red Accent khas Adobe
          purple: '#8a2be2',     // Creative Purple
          blue: '#0066ff',       // Tech Blue
          cyan: '#00f2fe',       // Modern Cyan
        }
      }
    },
  },
  plugins: [],
}