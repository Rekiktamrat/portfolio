// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         background: 'hsl(0 0% 100%)',
//         foreground: 'hsl(222.2 84% 4.9%)',
//         primary: 'hsl(221.2 83.2% 53.3%)',
//         muted: 'hsl(210 40% 96.1%)',
//         'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
//         border: 'hsl(214.3 31.8% 91.4%)',
//       },
//     },
//   },
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure this includes all your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}