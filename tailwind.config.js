/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      'blockblue': '#0B50CF',
      'blockred': '#C13030',
      'blockgreen': '#20553C',
    },
    extend: {
      fontFamily: {
        'lores': ['lores', 'sans-serif']
      }
    }
  }
}
