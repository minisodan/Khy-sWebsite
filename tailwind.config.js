/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-image": "url('Images/JAPAN39.jpg')",
        "contact-image": "url('Images/ContactBackground.jpg')",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
