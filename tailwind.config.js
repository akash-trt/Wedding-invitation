/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        parisienne: ['Parisienne', 'cursive'],
        engagement: ['Engagement', 'cursive'],
        greatVibes: ['"Great Vibes"', 'cursive'],
      },
    },
  },
};
