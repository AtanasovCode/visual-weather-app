/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#061c09',
        'background': '#f0fcf2',
        'primary': '#35d646',
        'secondary': '#8eb9e8',
        'accent': '#6460df',
      },
      backgroundImage: {
        'hero': "url('https://images.unsplash.com/photo-1464427219274-ab9450eba98b?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      screens: {
        '2xs': "475px",
        'xs': "550px",
      }
    },
  },
  plugins: [],
}