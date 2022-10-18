/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "tw-",
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "qwik-dark-blue": "#006ce9",
        "qwik-light-blue": "#18b6f6",
        "qwik-dark-purple": "#713fc2",
        "qwik-light-purple": "#ac7ff4",
      },
      cursor: {
        mindblow: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🤯</text></svg>\") 16 0, auto",
      },
    },
  },
  plugins: [],
};
